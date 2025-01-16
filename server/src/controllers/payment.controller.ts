import crypto from 'crypto';
import { Request, Response } from 'express';
import dotenv from 'dotenv';
import Payment from '../models/payment.model';
import Order from '../models/orders.model';

dotenv.config();

export const paymentVerification = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const {
      razorpay_payment_id,
      razorpay_order_id,
      razorpay_signature,
      orderId,
    } = req.body;

    const order = await Order.findById(orderId);

    const body = razorpay_order_id + '|' + razorpay_payment_id;

    const expectedSignature = crypto
      .createHmac('sha256', process.env.KEY_SECRET)
      .update(body.toString())
      .digest('hex');

    const isAuthentic = expectedSignature === razorpay_signature;

    if (isAuthentic) {
      const newPayment = new Payment({
        razorpay_payment_id,
        razorpay_order_id,
        razorpay_signature,
      });
      await newPayment.save();

      order.paymentDetails[0].status = 'Verified';
      order.payment_status = 'Payment Verified';
      await order.save();

      res.json({
        success: true,
      });
    } else {
      res.status(400).json({
        success: false,
      });
    }
  } catch (error) {
    res.status(404).json({
      success: false,
      error,
    });
  }
};
