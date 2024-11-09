import mongoose, { Schema } from 'mongoose';
import { IClient } from '../interfaces/IClient';

const clientSchema = new Schema<IClient>(
  {
    name: { type: String, required: true },
    phoneNumber: { type: String, required: true },
    email: { type: String, required: false },
    address: { type: String, required: false },
    city: { type: String, required: false },
    state: { type: String, required: false },
    architectId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

export default mongoose.model<IClient>('Client', clientSchema);
