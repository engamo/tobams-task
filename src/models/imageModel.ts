import mongoose, { Schema, Document } from 'mongoose';

export interface IImage extends Document {
  filename: string;
  filePath: string;
}

const ImageSchema: Schema = new Schema({
  filename: { type: String, required: true },
  filePath: { type: String, required: true },
});

const ImageModel = mongoose.model<IImage>('Image', ImageSchema);

export default ImageModel;
