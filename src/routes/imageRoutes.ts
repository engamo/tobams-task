import express from 'express';
import { processImage } from '../controllers/imageController';

const router = express.Router();

router.post('/upload', processImage);

export default router;
