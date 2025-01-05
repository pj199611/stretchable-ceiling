import mongoose from "mongoose";
import crypto from "crypto";
import PaymentInterface from "../interfaces/payments";

const ENCRYPTION_KEY = crypto.randomBytes(32); 
const IV_LENGTH = 16; 


function encrypt(text:string) {
  const iv = crypto.randomBytes(IV_LENGTH);
  const cipher = crypto.createCipheriv("aes-256-cbc", ENCRYPTION_KEY, iv);
  let encrypted = cipher.update(text, "utf8", "hex");
  encrypted += cipher.final("hex");
  return iv.toString("hex") + ":" + encrypted;
}

function decrypt(text:string) {
  const [ivHex, encryptedText] = text.split(":");
  const iv = Buffer.from(ivHex, "hex");
  const decipher = crypto.createDecipheriv("aes-256-cbc", ENCRYPTION_KEY, iv);
  let decrypted = decipher.update(encryptedText, "hex", "utf8");
  decrypted += decipher.final("utf8");
  return decrypted;
}

const paymentSchema = new mongoose.Schema<PaymentInterface>({
  razorpay_payment_id: {
    type: String,
    required: true,
  },
  razorpay_order_id: {
    type: String,
    required: true,
  },
  razorpay_signature: {
    type: String,
    required: true,
  },
});


paymentSchema.pre("save", function (next) {
  if (this.isModified("razorpay_payment_id")) {
    this.razorpay_payment_id = encrypt(this.razorpay_payment_id);
  }
  if (this.isModified("razorpay_order_id")) {
    this.razorpay_order_id = encrypt(this.razorpay_order_id);
  }
  if (this.isModified("razorpay_signature")) {
    this.razorpay_signature = encrypt(this.razorpay_signature);
  }
  next();
});


paymentSchema.methods.decryptFields = function () {
  return {
    razorpay_payment_id: decrypt(this.razorpay_payment_id),
    razorpay_order_id: decrypt(this.razorpay_order_id),
    razorpay_signature: decrypt(this.razorpay_signature),
  };
};

const Payment = mongoose.model("Payment", paymentSchema);
export default Payment;
