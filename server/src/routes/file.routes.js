import express from 'express';
import { uploadFileMetadata, getMyFiles, moveToTrash } from '../controllers/file.controller.js';
import { protect } from '../middleware/auth.middleware.js';

const router = express.Router();

// All routes below this line require a valid JWT
router.use(protect);

router.get('/', getMyFiles);
router.post('/metadata', uploadFileMetadata);
router.patch('/:id/trash', moveToTrash);

export default router;