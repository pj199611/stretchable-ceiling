"use client";
// // pages/index.js
import Link from "next/link";
import { useState } from "react";
import ProductCard from "@/comp/card/product-card-8/index";
import Tabs from "@/comp/Tabs/Tabs";

// slug, id, title, price, thumbnail, images, reviews
const products = [
  {
    id: "5e82e187-c3bd-4589-ae13-e3e9d0d3bacb",
    slug: "denim-classic-blue-jeans",
    title: "Denim Classic Blue Jeans",
    price: 310,
    class: "anime",
    imageUrl:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS-C_UAhXq9GfuGO452EEzfbKnh1viQB9EDBQ&s",
    images: [
      "/assets/images/products/Fashion/Clothes/7.DenimClassicBlueJeans.png",
      "/assets/images/products/Fashion/Clothes/7.DenimClassicBlueJeans.png",
    ],
    rating: 5,
  },
  {
    id: "5e82e187-c3bd-4589-ae13-e3e9d0d3bacb",
    slug: "denim-classic-blue-jeans",
    imageUrl:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS-C_UAhXq9GfuGO452EEzfbKnh1viQB9EDBQ&s",
    images: [
      "/assets/images/products/Fashion/Clothes/7.DenimClassicBlueJeans.png",
      "/assets/images/products/Fashion/Clothes/7.DenimClassicBlueJeans.png",
    ],
    rating: 5,
    title: "Denim Classic Blue Jeans",
    price: 310,
    class: "anime 2",
  },
  {
    id: "5e82e187-c3bd-4589-ae13-e3e9d0d3bacb",
    slug: "denim-classic-blue-jeans",
    imageUrl:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRXJA32WU4rBpx7maglqeEtt3ot1tPIRWptxA&s",

    images: [
      "/assets/images/products/Fashion/Clothes/7.DenimClassicBlueJeans.png",
      "/assets/images/products/Fashion/Clothes/7.DenimClassicBlueJeans.png",
    ],
    rating: 5,
    title: "Denim Classic Blue Jeans",
    price: 310,
    class: "anime 2",
  },
  {
    id: "5e82e187-c3bd-4589-ae13-e3e9d0d3bacb",
    slug: "denim-classic-blue-jeans",
    title: "Denim Classic Blue Jeans",
    price: 310,
    class: "anime",
    imageUrl:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS-C_UAhXq9GfuGO452EEzfbKnh1viQB9EDBQ&s",
    images: [
      "/assets/images/products/Fashion/Clothes/7.DenimClassicBlueJeans.png",
      "/assets/images/products/Fashion/Clothes/7.DenimClassicBlueJeans.png",
    ],
    rating: 5,
  },
  {
    id: "5e82e187-c3bd-4589-ae13-e3e9d0d3bacb",
    slug: "denim-classic-blue-jeans",
    imageUrl:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS-C_UAhXq9GfuGO452EEzfbKnh1viQB9EDBQ&s",
    images: [
      "/assets/images/products/Fashion/Clothes/7.DenimClassicBlueJeans.png",
      "/assets/images/products/Fashion/Clothes/7.DenimClassicBlueJeans.png",
    ],
    rating: 5,
    title: "Denim Classic Blue Jeans",
    price: 310,
    class: "anime 2",
  },
  {
    id: "5e82e187-c3bd-4589-ae13-e3e9d0d3bacb",
    slug: "denim-classic-blue-jeans",
    imageUrl:
      "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/1.jpg",

    images: [
      "/assets/images/products/Fashion/Clothes/7.DenimClassicBlueJeans.png",
      "/assets/images/products/Fashion/Clothes/7.DenimClassicBlueJeans.png",
    ],
    rating: 5,
    title: "Denim Classic Blue Jeans",
    price: 310,
    class: "anime 2",
  },
];

const allClasses = [
  "All",
  "Best Seller",
  "Class 1",
  "Class 2",
  "Class 3",
  "Class 4",
  "Class 5",
  "Class 6",
];

const ProductsPage = () => {
  const [activeClass, setActiveClass] = useState("All");
  console.log(activeClass);
  
  return (
    <>
      <Tabs
        allClasses={allClasses}
        activeClass={activeClass}
        setActiveClass={setActiveClass}
      />
      <div
        className="m-4"
        style={{ display: "flex", flexWrap: "wrap", justifyContent: "left" }}
      >
        {products.map((product) => (
          <Link href={`/product-details/black-sofa`}>
            <ProductCard key={product.id} product={product} />
          </Link>
        ))}
      </div>
    </>
  );
};
export default ProductsPage;
