import { Metadata } from "next";
import { TicketsPageView } from "@/pages-sections/customer-dashboard/support-tickets/page-view";
// API FUNCTIONS
import api from "@/utils/__api__/ticket";

export const metadata: Metadata = {
  title: "Support Tickets - Nest n Nook",
  description: `Nest and Nook Interior Is a place to create creative and express ideas at our places.`,
  authors: [{ name: "UI-LIB", url: "https://ui-lib.com" }],
  keywords: ["e-commerce", "e-commerce template", "next.js", "react"],
};

export default async function SupportTickets() {
  // const tickets = await api.getTicketList();
  // return <TicketsPageView tickets={tickets} />;
}
