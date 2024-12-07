import { Metadata } from "next";
import IndexPageView from "@/pages-sections/landing/page-view";
import Link from "next/link";
import Carousal from "@/comp/carousal";

export const metadata: Metadata = {
  title: "Bazaar - Next.js E-commerce Template",
  description: `Bazaar is a React Next.js E-commerce template. Build SEO friendly Online store, delivery app and Multi vendor store`,
  authors: [{ name: "UI-LIB", url: "https://ui-lib.com" }],
  keywords: ["e-commerce", "e-commerce template", "next.js", "react"],
};

const carouselData = [
  {
    id: 1,
    buttonLink: "/category",
    buttonText: "Check Category",
    title: "Category",
    imgUrl:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS-C_UAhXq9GfuGO452EEzfbKnh1viQB9EDBQ&s",
    subTitle: "The gift of a man is his goodwill. Take care of gift",
  },
  {
    id: 2,
    buttonLink: "#",
    buttonText: "Shop Now",
    subTitle: "GIFT SHOP",
    imgUrl:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRXJA32WU4rBpx7maglqeEtt3ot1tPIRWptxA&s",

    title: "The gift of a man is his goodwill. Take care of gift",
  },
  {
    id: 3,
    buttonLink: "/category",
    buttonText: "Shop Now",
    subTitle: "GIFT SHOP",
    imgUrl:
      "https://gratisography.com/wp-content/uploads/2024/03/gratisography-funflower-800x525.jpg",
    title: "The gift of a man is his goodwill. Take care of gift",
  },
];

export default function IndexPage() {
  return (
    <>
      <Carousal carouselData={carouselData} />
    </>
  );
  // return <IndexPageView />;
}
