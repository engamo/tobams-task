import express from 'express';
import multer from 'multer';
import { processImage, getImage } from '../controllers/imageController';

const router = express.Router();

const storage = multer.memoryStorage();
const upload = multer({ storage: storage });

// Apply multer middleware to the '/upload' route
router.post('/upload', upload.single('image'), processImage);

// Other routes...
router.get('/get_image/:imageId', getImage);

export default router;
