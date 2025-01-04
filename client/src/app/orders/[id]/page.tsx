"use client";

// import { Metadata } from "next";
import { notFound } from "next/navigation";
import { OrderDetailsPageView } from "@/pages-sections/customer-dashboard/orders/page-view";
import { usePathname } from "next/navigation";
import useCart from "@/hooks/useCart";

// export const metadata: Metadata = {
//   title: "Order Details - Nest n Nook",
//   description: `Nest and Nook Interior Is a place to create creative and express ideas at our places.`,
//   authors: [{ name: "UI-LIB", url: "https://ui-lib.com" }],
//   keywords: ["e-commerce", "e-commerce template", "next.js", "react"],
// };

export default async function OrderDetails({ params }) {
  const { state } = useCart();

  const pathname = usePathname();
  const orderId: string = pathname?.split("/orders/")?.[1] || "";
  const currentOrder = state.orders.filter((val) => val._id === orderId)?.[0];
  return <OrderDetailsPageView order={currentOrder} />;
}
