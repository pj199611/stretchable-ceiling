import { Document } from 'mongoose';

export default interface PaymentInterface extends Document {
  razorpay_payment_id: string;
  razorpay_order_id: string;
  razorpay_signature: string;
  decryptFields(): {
    razorpay_payment_id: string;
    razorpay_order_id: string;
    razorpay_signature: string;
  };
}
