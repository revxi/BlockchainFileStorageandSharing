import multer from 'multer';
import path from 'path';

// Store in memory (better for transient processing/proxying to IPFS)
const storage = multer.memoryStorage();

const upload = multer({
  storage,
  limits: {
    fileSize: 50 * 1024 * 1024, // 50MB limit
  },
  fileFilter: (req, file, cb) => {
    // Only allow specific file types if necessary
    const allowedTypes = /jpeg|jpg|png|pdf|zip|docx/;
    const extname = allowedTypes.test(path.extname(file.originalname).toLowerCase());
    
    if (extname) {
      return cb(null, true);
    } else {
      cb(new Error('Only specific file formats are allowed!'));
    }
  }
});

export default upload;