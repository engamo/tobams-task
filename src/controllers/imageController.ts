import { Request, Response } from 'express';
import multer from 'multer';
import ImageModel from '../models/imageModel';

const storage = multer.memoryStorage();
const upload = multer({ storage: storage });

export const uploadImage = upload.single('image');

export const processImage = async (req: Request, res: Response): Promise<void> => {
  try {
    const { originalname, buffer } = req.file;

    // Validate file type
    const allowedTypes = ['image/jpeg', 'image/png', 'image/gif'];
    if (!allowedTypes.includes(req.file.mimetype)) {
      throw new Error('Invalid file type. Only JPG, PNG, and GIF are allowed.');
    }

    // Save the image to MongoDB
    const image = new ImageModel({
      filename: originalname,
      filePath: `data:image/png;base64,${buffer.toString('base64')}`,
    });

    await image.save();

    res.status(201).json({ message: 'Image uploaded successfully.' });
  } catch (error) {
    console.error(error);
    res.status(400).json({ error: error.message });
  }
};
