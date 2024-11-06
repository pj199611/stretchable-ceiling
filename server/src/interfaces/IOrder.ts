import { Document, Types } from 'mongoose';

interface IOrderProduct {
  product: Types.ObjectId;
  quantity: number;
}

interface IShippingAddress {
  address: string;
  city: string;
  postalCode: string;
  country: string;
}

export default interface IOrder extends Document {
  user: Types.ObjectId;
  products: IOrderProduct[];
  totalAmount: number;
  status: 'Pending' | 'Processed' | 'Shipped' | 'Delivered' | 'Cancelled';
  remarks?:string;
  shippingAddress: IShippingAddress;
  createdAt?: Date;
  updatedAt?: Date;
}
