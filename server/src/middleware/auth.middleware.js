import jwt from 'jsonwebtoken';
import { env } from '../config/env.js';
import User from '../models/User.js';

export const protect = async (req, res, next) => {
  let token;

  // Check for token in Authorization header (Bearer <token>)
  if (req.headers.authorization && req.headers.authorization.startsWith('Bearer')) {
    try {
      token = req.headers.authorization.split(' ')[1];

      // Verify token
      const decoded = jwt.verify(token, env.JWT_SECRET);

      // Attach user to request (excluding sensitive fields)
      req.user = await User.findById(decoded.id).select('-nonce');
      
      if (!req.user) {
        return res.status(401).json({ message: 'User no longer exists' });
      }

      next();
    } catch (error) {
      console.error('JWT Verification Error:', error.message);
      res.status(401).json({ message: 'Not authorized, token failed' });
    }
  }

  if (!token) {
    res.status(401).json({ message: 'Not authorized, no token' });
  }
};