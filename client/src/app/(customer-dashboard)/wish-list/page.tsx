import { Metadata } from "next";
import { WishListPageView } from "@/pages-sections/customer-dashboard/wish-list";
// API FUNCTIONS
import { getWishListProducts } from "@/utils/__api__/wish-list";

export const metadata: Metadata = {
  title: "Wish List - Nest n Nook",
  description: `Nest and Nook Interior Is a place to create creative and express ideas at our places.`,
  authors: [{ name: "UI-LIB", url: "https://ui-lib.com" }],
  keywords: ["e-commerce", "e-commerce template", "next.js", "react"],
};

export default async function WishList({ searchParams }) {
  // const { products, totalProducts } = await getWishListProducts(searchParams.page);
  // return <WishListPageView products={products} totalProducts={totalProducts} />;
}
