import express from 'express';
import { getNonce, verifySignature } from '../controllers/auth.controller.js';

const router = express.Router();

// GET /api/auth/nonce/0x123...
router.get('/nonce/:walletAddress', getNonce);

// POST /api/auth/verify
router.post('/verify', verifySignature);

export default router;