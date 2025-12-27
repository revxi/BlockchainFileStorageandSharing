import express from 'express';
import { getTxDetails } from '../controllers/blockchain.controller.js';
import { protect } from '../middleware/auth.middleware.js';

const router = express.Router();

// We still protect this to prevent anonymous API scraping
router.use(protect);

// GET /api/blockchain/tx/0xabc...
router.get('/tx/:txHash', getTxDetails);

export default router;