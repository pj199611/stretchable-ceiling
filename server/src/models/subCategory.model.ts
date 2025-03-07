import mongoose, { Schema } from 'mongoose';
import ISubCategory from '../interfaces/ISubCategory';

const SubCategorySchema = new Schema<ISubCategory>(
  {
    name: { type: String, required: true },
    description: { type: String, required: true },
    price: { type: Number, required: true },
    category: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Category',
        required: true,
      },
    ],
  },
  {
    timestamps: true,
  }
);

export default mongoose.model<ISubCategory>('SubCategory', SubCategorySchema);
