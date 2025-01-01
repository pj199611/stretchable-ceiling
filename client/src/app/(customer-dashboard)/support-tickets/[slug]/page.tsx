import { Metadata } from "next";
import { notFound } from "next/navigation";
import { TicketDetailsPageView } from "@/pages-sections/customer-dashboard/support-tickets/page-view";
// API FUNCTIONS
import api from "@/utils/__api__/ticket";
// CUSTOM DATA MODEL
// import { SlugParams } from "models/Common";

export const metadata: Metadata = {
  title: "Order Details - Nest n Nook",
  description: `Nest and Nook Interior Is a place to create creative and express ideas at our places.`,
  authors: [{ name: "UI-LIB", url: "https://ui-lib.com" }],
  keywords: ["e-commerce", "e-commerce template", "next.js", "react"],
};

export default async function SupportTicketDetails({ params }) {
  try {
    // const ticket = await api.getTicket(String(params.slug));
    // return <TicketDetailsPageView ticket={ticket} />;
  } catch (error) {
    notFound();
  }
}
