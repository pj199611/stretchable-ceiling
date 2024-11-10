import { Document, Types } from 'mongoose';

export default interface ISubCategory extends Document {
  name: string;
  description: string;
  category: Types.ObjectId[];
}
