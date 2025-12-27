import express from 'express';
import cors from 'cors';
import helmet from 'helmet';
import morgan from 'morgan';

// Route Imports
import authRoutes from './routes/auth.routes.js';
import fileRoutes from './routes/file.routes.js';
import shareRoutes from './routes/share.routes.js';
import blockchainRoutes from './routes/blockchain.routes.js';

// Middleware Imports
import { notFound, errorHandler } from './middleware/error.middleware.js';

const app = express();

// 1. Global Middleware
app.use(helmet()); // Security headers
app.use(cors());   // Enable Cross-Origin Resource Sharing
app.use(morgan('dev')); // Request logging
app.use(express.json({ limit: '10mb' })); // Parse JSON bodies
app.use(express.urlencoded({ extended: true }));

// 2. Health Check Route
app.get('/health', (req, res) => {
  res.status(200).json({ 
    status: 'active', 
    uptime: process.uptime(),
    timestamp: new Date().toISOString() 
  });
});

// 3. API Routes
app.use('/api/auth', authRoutes);
app.use('/api/files', fileRoutes);
app.use('/api/share', shareRoutes);
app.use('/api/blockchain', blockchainRoutes);

// 4. Error Handling Middleware
app.use(notFound);
app.use(errorHandler);

export default app;