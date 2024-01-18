import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import imageRoutes from './routes/imageRoutes';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use('/api/images', imageRoutes);

mongoose.connect(process.env.MONGO_URI || 'mongodb://localhost:27017/imageUploadDB', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
