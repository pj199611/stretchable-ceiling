import mongoose, { Schema } from 'mongoose';
import IRequestCallback from '../interfaces/IRequestCallback';

const IRequestSchema: Schema = new Schema<IRequestCallback>(
  {
    name: {
      type: String,
      required: true,
      lowercase: true,
      trim: true,
    },
    phoneNumber: {
      type: Number,
      required: true,
    },
    comment: {
      type: String,
      required: false,
    },
  },
  { timestamps: true }
);

const RequestCallback = mongoose.model<IRequestCallback>('RequestCallback', IRequestSchema);

export default RequestCallback;
