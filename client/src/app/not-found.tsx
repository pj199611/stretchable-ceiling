import { Metadata } from "next";
import { NotFoundPageView } from "@/pages-sections/not-found";

export const metadata: Metadata = {
  title: "404 - Nest n Nook",
  description: "Nest n Nook Interior Page Not Found",
};

export default function NotFound() {
  return <NotFoundPageView />;
}
