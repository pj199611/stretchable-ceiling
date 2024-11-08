import { Document, Types } from "mongoose";

export interface IClient extends Document {
    name: string;
    phoneNumber: string;
    email?: string;
    address?: string;
    city?: string;
    state?: string;
    createdAt: Date;
    updatedAt: Date;
    architectId: Types.ObjectId;
}
