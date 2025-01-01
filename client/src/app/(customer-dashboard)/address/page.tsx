import { Metadata } from "next";
import { AddressPageView } from "@/pages-sections/customer-dashboard/address/page-view";
// API FUNCTIONS
import api from "@/utils/__api__/address";

export const metadata: Metadata = {
  title: "Address - Nest n Nook",
  description: `Nest and Nook Interior Is a place to create creative and express ideas at our places.`,
  authors: [{ name: "UI-LIB", url: "https://ui-lib.com" }],
  keywords: ["e-commerce", "e-commerce template", "next.js", "react"],
};

export default async function Address() {
  // const addressList = await api.getAddressList();
  // return <AddressPageView addressList={addressList} />;
}
