import { Metadata } from "next";
import CallbackRequestPage from "@/comp/Admin/callbackRequests/page-view/callbackRequest";

export const metadata: Metadata = {
  title: "Create Product - Nest and Nook",
  keywords: ["e-commerce", "create product"],
};

export default function CallBackRequest() {
  return <CallbackRequestPage />;
}
