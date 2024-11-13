import mongoose, { Schema } from 'mongoose';
import ILocation from '../interfaces/ILocation';

const locationSchema = new Schema<ILocation>(
  {
    name: { type: String, required: true },
    location_price: { type: Number, required: true },
  },
  {
    timestamps: true,
  }
);

export default mongoose.model<ILocation>('Location', locationSchema);
