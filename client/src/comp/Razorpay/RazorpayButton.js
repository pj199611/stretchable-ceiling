"use client";
import { useState } from "react";

const Checkout = () => {
  const [loading, setLoading] = useState(false);

  const handlePayment = async () => {
    setLoading(true);
    try {
      // Create RazorPay order
      const res = await fetch("/api/create-order", { method: "POST" });
      const data = await res.json();

      const options = {
        key: process.env.RAZORPAY_KEY_ID,
        amount: data.amount, // Razorpay Amount (e.g., ₹100 = 10000)
        currency: "INR",
        name: "Nest and Nook Interior",
        description: "Payment for order",
        order_id: data.id, // Order ID from the Razorpay
        theme: { color: "#2a306c" },
        handler: function (response) {
          const { razorpay_order_id, razorpay_payment_id, razorpay_signature } =
            response;
          alert("Payment Successful! Payment ID: " + razorpay_payment_id);
        },
        prefill: {
          name: "Customer",
          email: "abc@gmail.com",
          contact: "1234567890",
        },
      };

      const rzp = new window.Razorpay(options);
      rzp.open();
    } catch (err) {
      console.log(err);
    } finally {
      setLoading(false);
    }

    setLoading(false);
  };

  return (
    <div>
      <h2>Checkout</h2>
      <button disabled={loading} onClick={handlePayment}>
        {loading ? "Processing..." : "Pay with Razorpay"}
      </button>
    </div>
  );
};

export default Checkout;
