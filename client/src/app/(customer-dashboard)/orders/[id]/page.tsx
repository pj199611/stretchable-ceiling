import { Metadata } from "next";
import { notFound } from "next/navigation";
import { OrderDetailsPageView } from "@/pages-sections/customer-dashboard/orders/page-view";
// API FUNCTIONS
import api from "@/utils/__api__/orders";
// CUSTOM DATA MODEL
// import { IdParams } from "models/Common";

export const metadata: Metadata = {
  title: "Order Details - Nest n Nook",
  description: `Nest and Nook Interior Is a place to create creative and express ideas at our places.`,
  authors: [{ name: "UI-LIB", url: "https://ui-lib.com" }],
  keywords: ["e-commerce", "e-commerce template", "next.js", "react"],
};

export default async function OrderDetails({ params }) {
  try {
    // const order = await api.getOrder(String(params.id));
    // return <OrderDetailsPageView order={order} />;
  } catch (error) {
    notFound();
  }
}
