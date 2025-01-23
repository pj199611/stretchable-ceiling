import { Metadata } from "next";
// import IndexPageView from "@/pages-sections/landing/page-view";
// import Link from "next/link";
// import Carousal from "@/comp/carousal";
// import Img1 from "@/images/3d-stretchable-fabric-ceiling-work.jpg";
// import Img2 from "@/images/Page-1234-scaled-700x466.jpg";
// import Img3 from "@/images/stretch-ceiling-1.webp";
import FurnitureTwoPageView from "@/pages-sections/furniture-2/page-view";
import FurnitureOnePageView from "@/pages-sections/furniture-1/section-1/section-1";
import RazorpayButton from "@/comp/Razorpay/RazorpayButton";
import Script from "next/script";

export const metadata: Metadata = {
  title: "Home - Nest n Nook",
  description: `Nest and Nook Interior Is a place to create creative and express ideas at our places.`,
  authors: [{ name: "UI-LIB", url: "https://ui-lib.com" }],
  keywords: ["e-commerce", "e-commerce template", "next.js", "react"],
};

// const carouselData = [
//   {
//     id: 1,
//     buttonLink: "/category",
//     buttonText: "Check Category",
//     title: "Category",
//     imgUrl: Img1,
//     subTitle: "The gift of a man is his goodwill. Take care of gift",
//   },
//   {
//     id: 2,
//     buttonLink: "#",
//     buttonText: "Shop Now",
//     subTitle: "GIFT SHOP",
//     imgUrl: Img2,
//     title: "The gift of a man is his goodwill. Take care of gift",
//   },
//   {
//     id: 3,
//     buttonLink: "/category",
//     buttonText: "Shop Now",
//     subTitle: "GIFT SHOP",
//     imgUrl: Img3,
//     title: "The gift of a man is his goodwill. Take care of gift",
//   },
// ];

export default function IndexPage() {
  return (
    <>
      <Script
        id="razorpay-checkout-js"
        src="https://checkout.razorpay.com/v1/checkout.js"
      />
      {/* <RazorpayButton /> */}
      <FurnitureOnePageView />
      {/* <Carousal carouselData={carouselData} /> */}
      <FurnitureTwoPageView />
    </>
  );
  // return <IndexPageView />;
}
