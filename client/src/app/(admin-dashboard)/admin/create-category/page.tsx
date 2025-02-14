import { Metadata } from "next";
import CreateCategory from "@/comp/Admin/createCategory/createCategory";

export const metadata: Metadata = {
  title: "Create Category - Nest and Nook",
  keywords: ["e-commerce", "create Category"],
};

export default function CategoryCreate() {
  return <CreateCategory />;
}
