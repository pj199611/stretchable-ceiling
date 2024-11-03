import mongoose from 'mongoose';

export default function setupDB() {
  mongoose
    .connect(process.env.MONGO_URI!,{dbName:"strechable-ceiling"})
    .then(() => console.log('Connected to DB'))
    .catch((err) => console.log('DB connection error:', err));
}
