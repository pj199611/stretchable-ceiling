import { Document } from 'mongoose';

export default interface IProduct extends Document {
  name: string;
  description?: string;
  price: number;
  category: string;
  stock: number;
  height: number;
  width: number;
  area: number;
  imageUrl?: string;
  createdAt?: Date;
  updatedAt?: Date;
}
