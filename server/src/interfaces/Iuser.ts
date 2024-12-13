import { Document } from 'mongoose';

export default interface IUser extends Document {
  email: string;
  password: string;
  userName:string;
  createdAt: Date;
  role: string;
  requestCallback:Boolean
  isPasswordValid(password: string): Promise<boolean>;
}
