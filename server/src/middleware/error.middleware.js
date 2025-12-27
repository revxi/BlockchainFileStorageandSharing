import { env } from '../config/env.js';

// Catch-all for 404 Not Found
export const notFound = (req, res, next) => {
  const error = new Error(`Not Found - ${req.originalUrl}`);
  res.status(404);
  next(error);
};

// Global Error Handler
export const errorHandler = (err, req, res, next) => {
  // Sometimes error status is 200, but it should be 500
  const statusCode = res.statusCode === 200 ? 500 : res.statusCode;
  
  res.status(statusCode).json({
    message: err.message,
    // Only show stack trace in development mode for security
    stack: env.NODE_ENV === 'production' ? null : err.stack,
  });
};