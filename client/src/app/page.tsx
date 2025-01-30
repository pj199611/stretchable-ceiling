import { Metadata } from "next";

import HomeContents from "@/comp/furniture-2/page-view";
import Carousal from "@/comp/Carousal/index";
import RazorpayButton from "@/comp/Razorpay/RazorpayButton";
import Script from "next/script";

export const metadata: Metadata = {
  title: "Home - Nest n Nook",
  description: `Nest and Nook Interior Is a place to create creative and express ideas at our places.`,
  authors: [{ name: "UI-LIB", url: "https://ui-lib.com" }],
  keywords: ["e-commerce", "e-commerce template", "next.js", "react"],
};

export default function IndexPage() {
  return (
    <>
      <Script
        id="razorpay-checkout-js"
        src="https://checkout.razorpay.com/v1/checkout.js"
      />
      {/* <RazorpayButton /> */}
      <Carousal />
      <HomeContents />
    </>
  );
}
