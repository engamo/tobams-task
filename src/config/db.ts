import mongoose from 'mongoose';
import colors from 'colors';
import dotenv from 'dotenv';

dotenv.config();

const connectDB = async () => {
  try {
    if (!process.env.MONGO_URI) {
      throw new Error('MONGO_URI is not defined in the environment variables.');
    }

    const conn = await mongoose.connect(process.env.MONGO_URI);
    console.log(colors.cyan.underline(`MongoDB Connected: ${conn.connection.host}`));
  } catch (error: any) {
    console.error(colors.red.underline.bold(`Error: ${(error as Error).message}`));
    process.exit(1);
  }
};

export default connectDB;
