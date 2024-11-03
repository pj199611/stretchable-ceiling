import { Document } from 'mongoose';

export default interface IUser extends Document {
  email: string;
  password: string;
  createdAt: Date;
  isPasswordValid(password: string): Promise<boolean>;
}
