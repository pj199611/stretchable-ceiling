import { Document, Types } from 'mongoose';

export default interface IProduct extends Document {
  name: string;
  description?: string;
  subCategory: Types.ObjectId;
  category: Types.ObjectId;
  imageUrl?: string;
  stockPhotoId:Number;
  createdAt?: Date;
  updatedAt?: Date;
}
