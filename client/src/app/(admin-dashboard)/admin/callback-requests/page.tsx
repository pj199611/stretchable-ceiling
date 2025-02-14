import { Metadata } from "next";
import CallbackRequestPage from "@/comp/Admin/callbackRequests/page-view/callbackRequest";

export const metadata: Metadata = {
  title: "Admin Callback Page - Nest and Nook",
  keywords: ["e-commerce", "Callback"],
};

export default function CallBackRequest() {
  return <CallbackRequestPage />;
}
