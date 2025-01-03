import { Metadata } from "next";
import { OrdersPageView } from "@/pages-sections/customer-dashboard/orders/page-view";

export const metadata: Metadata = {
  title: "Orders - Nest n Nook",
  description: `Nest and Nook Interior Is a place to create creative and express ideas at our places.`,
  authors: [{ name: "UI-LIB", url: "https://ui-lib.com" }],
  keywords: ["e-commerce", "e-commerce template", "next.js", "react"],
};

export default function Orders() {
  return <OrdersPageView />;
}
