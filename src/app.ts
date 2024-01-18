import express from 'express';
import colors from 'colors';
import dotenv from 'dotenv';
import connectDB from './config/db';
import imageRoutes from './routes/imageRoutes';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

connectDB(); 

app.use(express.json());
app.use('/api/images', imageRoutes);

app.listen(PORT, () => {
  console.log(colors.green(`Server is running on http://localhost:${PORT}`));
});
