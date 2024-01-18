import { Request, Response } from 'express';
import multer from 'multer';
import path from 'path';
import ImageModel, { IImage } from '../models/imageModel';

const storage = multer.memoryStorage();
const upload = multer({ storage: storage });

export const uploadImage = upload.single('image');

export const processImage = async (req: Request, res: Response): Promise<void> => {
  try {
    // Check if req.file is defined
    if (!req.file) {
      throw new Error('No file provided.');
    }

    const { originalname, buffer } = req.file;

    // Get file extension from the original file name
    const fileExtension = path.extname(originalname).toLowerCase();

    // Validate file type based on extension
    const allowedExtensions = ['.jpg', '.jpeg', '.png', '.gif'];
    if (!allowedExtensions.includes(fileExtension)) {
      throw new Error('Invalid file type. Only JPG, PNG, and GIF are allowed.');
    }

    // Save the image to MongoDB
    const base64Buffer = buffer?.toString('base64') || '';
    const image = new ImageModel({
      filename: originalname,
      filePath: `data:image/png;base64,${base64Buffer}`,
    });

    await image.save();

    res.status(201).json({ message: 'Image uploaded successfully.' });
  } catch (error: any) {
    console.error(error);
    res.status(400).json({ error: (error as Error).message });
  }
};


export const getImage = async (req: Request, res: Response): Promise<void> => {
  try {
    const imageId = req.params.imageId;

    // Find the image by ID in MongoDB
    const image = await ImageModel.findById(imageId);

    if (!image) {
      res.status(404).json({ error: 'Image not found' });
      return;
    }

    // Assuming the filePath in the database is stored in a secure URL format
    const imageUrl = image.filePath;

    res.status(200).json({ imageUrl });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal server error' });
  }
};
