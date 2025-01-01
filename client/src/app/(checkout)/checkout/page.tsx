import { Metadata } from "next";
import { CheckoutPageView } from "@/pages-sections/checkout/page-view";

export const metadata: Metadata = {
  title: "Checkout - Nest n Nook",
  description: `Nest and Nook Interior Is a place to create creative and express ideas at our places.`,
  authors: [{ name: "UI-LIB", url: "https://ui-lib.com" }],
  keywords: ["e-commerce", "e-commerce template", "next.js", "react"],
};

export default function Checkout() {
  return <CheckoutPageView />;
}
