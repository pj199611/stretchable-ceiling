import { Metadata } from "next";
import { NotFoundPageView } from "@/pages-sections/not-found";

export const metadata: Metadata = {
  title: "404 - Next.js E-commerce Template",
  description: "Interior Not Found Page View",
};

export default function NotFound() {
  return <NotFoundPageView />;
}
