import mongoose from 'mongoose';
import IClientOrder from '../interfaces/IClientOrder';

const clientOrderSchema = new mongoose.Schema<IClientOrder>(
  {
    client: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Client',
      required: true,
    },
    products: [
      {
        product: {
          type: mongoose.Schema.Types.ObjectId,
          ref: 'Product',
          required: true,
        },
        quantity: {
          type: Number,
          required: true,
          min: 1,
        },
        width: {
          type: Number,
          required: false,
        },
        height: {
          type: Number,
          required: false,
        },
        area: {
          type: Number,
          required: false,
        },
        shape: {
          type: String,
          enum: ['Rectangle', 'Square'],
          required: false,
        },
        customShape: {
          type: String,
          required: false,
        },
      },
    ],
    totalAmount: {
      type: Number,
      required: true,
    },
    remarks: {
      type: String,
      required: false,
    },
    status: {
      type: String,
      enum: ['Pending', 'Processed', 'Shipped', 'Delivered', 'Cancelled'],
      default: 'Pending',
    },
    shippingAddress: {
      address: String,
      city: String,
      postalCode: String,
      country: String,
    },
  },
  { timestamps: true }
);

const clientOrder = mongoose.model<IClientOrder>(
  'ClientOrder',
  clientOrderSchema
);
export default clientOrder;
