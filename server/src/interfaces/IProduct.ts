import { Document, Types } from 'mongoose';

export default interface IProduct extends Document {
  name: string;
  description?: string;
  subCategoryId: Types.ObjectId;
  categoryId: Types.ObjectId;
  imageUrl?: string;
  createdAt?: Date;
  updatedAt?: Date;
}
