import express from 'express';
import { shareFile } from '../controllers/share.controller.js';
import { protect } from '../middleware/auth.middleware.js';

const router = express.Router();

router.use(protect);

// POST /api/share
router.post('/', shareFile);

export default router;