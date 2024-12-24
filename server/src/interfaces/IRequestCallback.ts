import { Document } from 'mongoose';

export default interface IRequestCallback extends Document {
    name:string;
    phoneNumber:Number;
    comment:string;
}
