import crypto from 'crypto';
import { Request, Response } from 'express';
import instance from '../config/razorpay';
import dotenv from 'dotenv';
import Payment from '../models/payment.model';

dotenv.config();

export const createOrder = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const options = {
      amount: Number(req.body.amount * 100),
      currency: 'INR',
      receipt: crypto.randomBytes(10).toString('hex'),
    };

    const order = await instance.orders.create(options);
    res.status(200).json({
      success: true,
      order,
      razorpayKeyId: process.env.RAZORPAY_KEY_ID,
    });
  } catch (error) {
    res.status(404).json({
      success: false,
      error: error.message || 'Something went wrong',
    });
  }
};

export const paymentVerification = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const { razorpay_payment_id, razorpay_order_id, razorpay_signature } =req.body;

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

      res.redirect(
        `http://localhost:5173/paymentsuccess?reference=${razorpay_payment_id}`
      );
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
