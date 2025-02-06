import { Metadata } from "next";
import ProductForm from "@/comp/createProduct/createProduct";

export const metadata: Metadata = {
  title: "Create Product - Nest and Nook",
  keywords: ["e-commerce", "create product"],
};

export default function ProductCreate() {
  return <ProductForm />;
}
