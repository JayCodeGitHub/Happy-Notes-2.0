import mongoose from 'mongoose';

const uri = process.env.MONGODB_URI;
  
if (!uri) {
    throw new Error('MONGODB_URI not defined');
}
  
mongoose.connect(uri, {useNewUrlParser: true,useUnifiedTopology: true,} as mongoose.ConnectOptions);

const db = mongoose.connection;