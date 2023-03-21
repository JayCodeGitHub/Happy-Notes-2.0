import mongoose, { ConnectOptions } from 'mongoose';
import dotenv from 'dotenv';

dotenv.config();

const connectMongo = async () => {
    
  if (process.env.DB_CONNECT) {
    await mongoose.connect(process.env.DB_CONNECT, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      }as ConnectOptions);
  } else {
    console.error('DB_CONNECT is not defined');
  }
};

export default connectMongo;