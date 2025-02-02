import { Document, Types } from 'mongoose';

interface IOrderProduct {
  product: Types.ObjectId;
  quantity: number;
  width?: number;
  height?: number;
  area?: number;
  customizedUrls: string[];
  stockPhotoIds?: number[];
  imageUrls?: string[];
  shape?: string[];
  customShape?: string;
}

interface IShippingAddress {
  address: string;
  city: string;
  postalCode: string;
  country: string;
}

interface IPaymentDetails {
  paymentId?: string;
  amount?: number;
  status?: 'Success' | 'Failed' | 'Verified' | 'Not Verified' ;
  date?: Date;
}

export default interface IOrder extends Document {
  user: Types.ObjectId;
  products: IOrderProduct[];
  totalAmount: number;
  totalPaid?: number;
  paymentDetails?: IPaymentDetails[];
  status: 'Pending' | 'Processed' | 'Shipped' | 'Delivered' | 'Cancelled' | 'Not Verified';
  isCustomized: boolean;
  payment_status: string;
  remarks?: string;
  shippingAddress: IShippingAddress;
  createdAt?: Date;
  updatedAt?: Date;
  calculateTotalAmount: (Location: {
    operator: string;
    price: number;
  }) => Promise<number>;
}
