// import { Metadata } from "next";
import Container from "@mui/material/Container";
import { notFound } from "next/navigation";
import ProductDetailsPageView from "@/comp/ProductDetails/ProductIntro";
import api from "@/utils/__api__/products";
// import {
//   getFrequentlyBought,
//   getRelatedProducts,
// } from "@/utils/__api__/related-products";

// export const metadata: Metadata = {
//   title: "Product Details - Bazaar Next.js E-commerce Template",
//   description: `Bazaar is a React Next.js E-commerce template. Build SEO friendly Online store, delivery app and Multi vendor store`,
//   authors: [{ name: "UI-LIB", url: "https://ui-lib.com" }],
//   keywords: ["e-commerce", "e-commerce template", "next.js", "react"],
// };

const product = {
  id: "9db9ee6a-a658-4d96-a144-a0f4cef4f290",
  slug: "black-sofa",
  price: 125,
  title: "Product Name",
  thumbnail: "/assets/images/furniture-products/furniture-11.png",
  images: [
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS-C_UAhXq9GfuGO452EEzfbKnh1viQB9EDBQ&s",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRXJA32WU4rBpx7maglqeEtt3ot1tPIRWptxA&s",
    "https://images.nagwa.com/figures/explainers/785120927370/3.svg",
    "https://gratisography.com/wp-content/uploads/2024/03/gratisography-funflower-800x525.jpg",
    "/assets/images/furniture-products/furniture-11.png",
    "/assets/images/furniture-products/furniture-11.png",
  ],
  rating: 4,
  totalNoOfReviews: 30,
  productClass: "universe",
  specific_product_price: 700,
  description:
    "Wireless Bluetooth Headset FM Frequency Response: 87.5 – 108 MHz Feature: FM Radio, Card Supported (Micro SD / TF) Made in China",
};
// const { title, images, thumbnail } = product || {};

export default async function ProductDetails({ params }: any) {
  try {
    // const product = await api.getProduct(params.slug as string);

    return (
      <Container className="mt-2 mb-2">
        <ProductDetailsPageView product={product} />
        {/* ---------------ADD---------------- */}
        {/* Description & Reviews */}
      </Container>
    );
  } catch (error) {
    notFound();
  }
}
