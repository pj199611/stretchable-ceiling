import { Document, Types } from 'mongoose';

export default interface IProduct extends Document {
  name: string;
  description?: string;
  subCategory: Types.ObjectId;
  category: Types.ObjectId;
  images: string[]; 
  imageUrls:string[];
  thumbnail: string;
  class: string;
  product_price?: number;
  createdAt?: Date;
  updatedAt?: Date;
}