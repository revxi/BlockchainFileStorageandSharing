import User from '../models/User.js';
import jwt from 'jsonwebtoken';
import { ethers } from 'ethers';
import { env } from '../config/env.js';

export const getNonce = async (req, res) => {
  const { walletAddress } = req.params;
  try {
    let user = await User.findOne({ walletAddress: walletAddress.toLowerCase() });
    if (!user) {
      user = await User.create({ walletAddress: walletAddress.toLowerCase() });
    }
    res.json({ nonce: user.nonce });
  } catch (error) {
    res.status(500).json({ message: "Error fetching nonce" });
  }
};

export const verifySignature = async (req, res) => {
  const { walletAddress, signature } = req.body;
  try {
    const user = await User.findOne({ walletAddress: walletAddress.toLowerCase() });
    if (!user) return res.status(404).json({ message: "User not found" });

    // Verify signature using ethers
    const msg = `Sign this nonce to login: ${user.nonce}`;
    const recoveredAddress = ethers.verifyMessage(msg, signature);

    if (recoveredAddress.toLowerCase() === walletAddress.toLowerCase()) {
      // Update nonce for next login (Security best practice)
      user.nonce = Math.floor(Math.random() * 1000000);
      await user.save();

      const token = jwt.sign({ id: user._id, walletAddress }, env.JWT_SECRET, { expiresIn: '24h' });
      res.json({ token, user });
    } else {
      res.status(401).json({ message: "Invalid signature" });
    }
  } catch (error) {
    res.status(500).json({ message: "Auth failed" });
  }
};