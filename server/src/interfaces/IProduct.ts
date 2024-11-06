import { Document } from 'mongoose';

export default interface IProduct extends Document {
  name: string;
  description?: string;
  price: number;
  category: string;
  height: number;
  width: number;
  area: number;
  shape: 'Rectangle' | 'Square' | string;
  customShape: string;
  imageUrl?: string;
  createdAt?: Date;
  updatedAt?: Date;
}
