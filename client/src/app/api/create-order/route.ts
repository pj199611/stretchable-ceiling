import { NextRequest, NextResponse } from "next/server";
import Razorpay from "razorpay";

const razorpay = new Razorpay({
  key_id: process.env.RAZORPAY_KEY_ID!,
  key_secret: process.env.RAZORPAY_KEY_SECRET!,
});

export async function POST(request: NextRequest) {
  try {
    const order = await razorpay.orders.create({
      amount: 123 * 100, //  (₹100 = 10000)
      currency: "INR",
      receipt: "rec_0" + "trial",
    });
    return NextResponse.json(order, { status: 200 });
  } catch (error) {
    console.error("Error creating Order: ", error);
    return NextResponse.json(
      { error: "Error creating Order " },
      { status: 500 }
    );
  }
}
