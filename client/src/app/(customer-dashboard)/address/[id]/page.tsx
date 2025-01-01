import { Metadata } from "next";
import { notFound } from "next/navigation";
import { AddressDetailsPageView } from "@/pages-sections/customer-dashboard/address/page-view";
// API FUNCTIONS
import api from "@/utils/__api__/address";
// CUSTOM DATA MODEL
// import { IdParams } from "models/Common";

export const metadata: Metadata = {
  title: "Address - Nest n Nook",
  description: `Nest and Nook Interior Is a place to create creative and express ideas at our places.`,
  authors: [{ name: "UI-LIB", url: "https://ui-lib.com" }],
  keywords: ["e-commerce", "e-commerce template", "next.js", "react"],
};

export default async function Address({ params }) {
  try {
    const address = await api.getAddress(params.id);
    return null;
    return <AddressDetailsPageView address={address} />;
  } catch (error) {
    notFound();
  }
}
