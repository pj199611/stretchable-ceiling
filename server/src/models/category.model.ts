import mongoose, { Schema } from 'mongoose';
import ICategory from '../interfaces/ICategory';

const categorySchema = new Schema<ICategory>(
  {
    name: { type: String, required: true },
    description: { type: String, required: true }
  },
  {
    timestamps: true,
  }
);

export default mongoose.model<ICategory>('Category', categorySchema);
