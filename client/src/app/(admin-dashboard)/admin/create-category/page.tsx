import { Metadata } from "next";
import CreateCategory from "@/comp/Admin/createCategory/createCategory";

export const metadata: Metadata = {
  title: "Create Product - Nest and Nook",
  keywords: ["e-commerce", "create product"],
};

export default function ProductCreate() {
  return <CreateCategory />;
}
