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
    shop: {
      id: "12e519bc-ad1d-465f-8307-90e2ee5d68b1",
      slug: "word-wide-wishes",
      user: {
        id: "c203bf6b-fa49-462b-9e81-bb544538e2c0",
        email: "Emmanuel.Wilkinson@yahoo.com",
        phone: "224.760.0494",
        avatar:
          "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/1.jpg",
        password: "muuWPwPsN8lSo_m",
        dateOfBirth: "1980-07-04T12:04:06.468Z",
        verified: true,
        name: {
          firstName: "Maximilian",
          lastName: "Terry",
        },
      },
      email: "Evangeline.Toy69@hotmail.com",
      name: "Word Wide Wishes",
      phone: "(613) 343-9004",
      address: "845 N. Stonybrook Ave. Tonawanda, NY 14210, Denmark",
      verified: false,
      coverPicture: "/assets/images/banners/banner-7.png",
      profilePicture: "/assets/images/faces/propic(6).png",
      socialLinks: {
        facebook: null,
        youtube: null,
        twitter: null,
        instagram: null,
      },
    },
    title: "Denim Classic Blue Jeans",
    price: 310,
    class: "anime",
    images: [
      "/assets/images/products/Fashion/Clothes/7.DenimClassicBlueJeans.png",
      "/assets/images/products/Fashion/Clothes/7.DenimClassicBlueJeans.png",
    ],
    rating: 5,
  },
  {
    id: "5e82e187-c3bd-4589-ae13-e3e9d0d3bacb",
    slug: "denim-classic-blue-jeans",
    shop: {
      id: "12e519bc-ad1d-465f-8307-90e2ee5d68b1",
      slug: "word-wide-wishes",
      user: {
        id: "c203bf6b-fa49-462b-9e81-bb544538e2c0",
        email: "Emmanuel.Wilkinson@yahoo.com",
        phone: "224.760.0494",
        avatar:
          "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/1.jpg",
        password: "muuWPwPsN8lSo_m",
        dateOfBirth: "1980-07-04T12:04:06.468Z",
        verified: true,
        name: {
          firstName: "Maximilian",
          lastName: "Terry",
        },
      },
      email: "Evangeline.Toy69@hotmail.com",
      name: "Word Wide Wishes",
      imageUrl:
        "https://gratisography.com/wp-content/uploads/2024/03/gratisography-funflower-800x525.jpg",
      phone: "(613) 343-9004",
      address: "845 N. Stonybrook Ave. Tonawanda, NY 14210, Denmark",
      verified: false,
      coverPicture: "/assets/images/banners/banner-7.png",
      profilePicture: "/assets/images/faces/propic(6).png",
      socialLinks: {
        facebook: null,
        youtube: null,
        twitter: null,
        instagram: null,
      },
    },
    title: "Denim Classic Blue Jeans",
    price: 310,
    class: "anime",
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
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRXJA32WU4rBpx7maglqeEtt3ot1tPIRWptxA&s",
    shop: {
      id: "12e519bc-ad1d-465f-8307-90e2ee5d68b1",
      slug: "word-wide-wishes",
      user: {
        id: "c203bf6b-fa49-462b-9e81-bb544538e2c0",
        email: "Emmanuel.Wilkinson@yahoo.com",
        phone: "224.760.0494",
        avatar:
          "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/1.jpg",
        password: "muuWPwPsN8lSo_m",
        dateOfBirth: "1980-07-04T12:04:06.468Z",
        verified: true,
        name: {
          firstName: "Maximilian",
          lastName: "Terry",
        },
      },
      email: "Evangeline.Toy69@hotmail.com",
      name: "Word Wide Wishes",
      phone: "(613) 343-9004",
      address: "845 N. Stonybrook Ave. Tonawanda, NY 14210, Denmark",
      verified: false,
      coverPicture: "/assets/images/banners/banner-7.png",
      profilePicture: "/assets/images/faces/propic(6).png",
      socialLinks: {
        facebook: null,
        youtube: null,
        twitter: null,
        instagram: null,
      },
    },
    title: "Denim Classic Blue Jeans",
    price: 310,
    class: "anime",
    images: [
      "/assets/images/products/Fashion/Clothes/7.DenimClassicBlueJeans.png",
      "/assets/images/products/Fashion/Clothes/7.DenimClassicBlueJeans.png",
    ],
    rating: 5,
  },
  {
    id: "5e82e187-c3bd-4589-ae13-e3e9d0d3bacb",
    slug: "denim-classic-blue-jeans",
    shop: {
      id: "12e519bc-ad1d-465f-8307-90e2ee5d68b1",
      slug: "word-wide-wishes",
      user: {
        id: "c203bf6b-fa49-462b-9e81-bb544538e2c0",
        email: "Emmanuel.Wilkinson@yahoo.com",
        phone: "224.760.0494",
        avatar:
          "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/1.jpg",
        password: "muuWPwPsN8lSo_m",
        dateOfBirth: "1980-07-04T12:04:06.468Z",
        verified: true,
        name: {
          firstName: "Maximilian",
          lastName: "Terry",
        },
      },
      email: "Evangeline.Toy69@hotmail.com",
      name: "Word Wide Wishes",
      phone: "(613) 343-9004",
      address: "845 N. Stonybrook Ave. Tonawanda, NY 14210, Denmark",
      verified: false,
      coverPicture: "/assets/images/banners/banner-7.png",
      profilePicture: "/assets/images/faces/propic(6).png",
      socialLinks: {
        facebook: null,
        youtube: null,
        twitter: null,
        instagram: null,
      },
    },
    title: "Denim Classic Blue Jeans",
    price: 310,
    class: "anime",
    images: [
      "/assets/images/products/Fashion/Clothes/7.DenimClassicBlueJeans.png",
      "/assets/images/products/Fashion/Clothes/7.DenimClassicBlueJeans.png",
    ],

    rating: 5,
  },
  {
    id: "5e82e187-c3bd-4589-ae13-e3e9d0d3bacb",
    slug: "denim-classic-blue-jeans",
    shop: {
      id: "12e519bc-ad1d-465f-8307-90e2ee5d68b1",
      slug: "word-wide-wishes",
      user: {
        id: "c203bf6b-fa49-462b-9e81-bb544538e2c0",
        email: "Emmanuel.Wilkinson@yahoo.com",
        phone: "224.760.0494",
        avatar:
          "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/1.jpg",
        password: "muuWPwPsN8lSo_m",
        dateOfBirth: "1980-07-04T12:04:06.468Z",
        verified: true,
        name: {
          firstName: "Maximilian",
          lastName: "Terry",
        },
      },
      email: "Evangeline.Toy69@hotmail.com",
      name: "Word Wide Wishes",
      phone: "(613) 343-9004",
      address: "845 N. Stonybrook Ave. Tonawanda, NY 14210, Denmark",
      verified: false,
      coverPicture: "/assets/images/banners/banner-7.png",
      profilePicture: "/assets/images/faces/propic(6).png",
      socialLinks: {
        facebook: null,
        youtube: null,
        twitter: null,
        instagram: null,
      },
    },
    title: "Denim Classic Blue Jeans",
    price: 310,
    class: "anime",
    images: [
      "/assets/images/products/Fashion/Clothes/7.DenimClassicBlueJeans.png",
      "/assets/images/products/Fashion/Clothes/7.DenimClassicBlueJeans.png",
    ],

    rating: 5,
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
