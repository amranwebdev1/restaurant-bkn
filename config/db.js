import mongoose from 'mongoose';
import dotenv from 'dotenv';
dotenv.config();

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.DATABASE_URL);
    console.log("DB Connected");
  } catch (err) {
    console.log("Database not connected");
    process.exit(1);
  }
};

export default connectDB;