// // pages/index.js
import Image from "next/image";
import Link from "next/link";

// import styles from "@/comp/gallery/Home.module.css";
import Container from "@mui/material/Container";
import ProductCard from "@/comp/card/product-card-8/index";
const products = [
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
    brand: null,
    price: 310,
    size: null,
    colors: [],
    discount: 0,
    thumbnail:
      "/assets/images/products/Fashion/Clothes/7.DenimClassicBlueJeans.png",
    images: [
      "/assets/images/products/Fashion/Clothes/7.DenimClassicBlueJeans.png",
      "/assets/images/products/Fashion/Clothes/7.DenimClassicBlueJeans.png",
    ],
    categories: ["Men's Fashion"],
    status: null,
    reviews: [],
    rating: 5,
    for: {
      demo: "fashion-2",
      type: "featured-products",
    },
  },
  {
    id: "7ca294fc-be16-4d2a-8441-4b1c60624bda",
    slug: "double-wool-overcoat",
    shop: {
      id: "39205790-268b-4c94-9bcc-d7acdce4e016",
      slug: "anytime-buys",
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
      email: "Verna_Schiller@yahoo.com",
      name: "Anytime Buys",
      phone: "(613) 343-9004",
      address: "845 N. Stonybrook Ave. Tonawanda, NY 14210, Denmark",
      verified: false,
      coverPicture: "/assets/images/banners/banner-6.png",
      profilePicture: "/assets/images/faces/propic(5).png",
      socialLinks: {
        facebook: null,
        youtube: null,
        twitter: null,
        instagram: null,
      },
    },
    title: "Double Wool Overcoat",
    brand: null,
    price: 310,
    size: null,
    colors: [],
    discount: 0,
    thumbnail:
      "/assets/images/products/Fashion/Clothes/16.DoubleWoolOvercoat.png",
    images: [
      "/assets/images/products/Fashion/Clothes/16.DoubleWoolOvercoat.png",
      "/assets/images/products/Fashion/Clothes/16.DoubleWoolOvercoat.png",
    ],
    categories: ["Women's Fashion"],
    status: null,
    reviews: [],
    rating: 5,
    for: {
      demo: "fashion-2",
      type: "featured-products",
    },
  },
  {
    id: "0fa9e8d4-2045-44d6-b0d0-cd4a79cd2afd",
    slug: "royal-black-suit-pant",
    shop: {
      id: "6d42cbe2-f293-464b-96ee-b97a43530aff",
      slug: "keyboard-kiosk",
      user: {
        id: "fdb4c202-a46a-49f6-b8e0-e5cfd5be1ea1",
        email: "Laron48@hotmail.com",
        phone: "(215) 892-6113 x97330",
        avatar:
          "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/88.jpg",
        password: "rmwl_8mmxHsFY3B",
        dateOfBirth: "1972-08-03T22:21:24.223Z",
        verified: true,
        name: {
          firstName: "Felicita",
          lastName: "Heathcote",
        },
      },
      email: "Karianne_Gleason35@hotmail.com",
      name: "Keyboard Kiosk",
      phone: "(613) 343-9004",
      address: "845 N. Stonybrook Ave. Tonawanda, NY 14210, Denmark",
      verified: false,
      coverPicture: "/assets/images/banners/banner-5.png",
      profilePicture: "/assets/images/faces/propic(4).png",
      socialLinks: {
        facebook: null,
        youtube: null,
        twitter: null,
        instagram: null,
      },
    },
    title: "Royal Black Suit Pant",
    brand: null,
    price: 1140,
    size: null,
    colors: [],
    discount: 0,
    thumbnail:
      "/assets/images/products/Fashion/Clothes/8.RoyalBlackSuitPant.png",
    images: [
      "/assets/images/products/Fashion/Clothes/8.RoyalBlackSuitPant.png",
      "/assets/images/products/Fashion/Clothes/8.RoyalBlackSuitPant.png",
    ],
    categories: ["Men's Fashion"],
    status: null,
    reviews: [],
    rating: 5,
    for: {
      demo: "fashion-2",
      type: "featured-products",
    },
  },
  {
    id: "dab58e83-5c28-4707-9a78-79aa42e6a602",
    slug: "blue-trousers",
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
    title: "Blue Trousers",
    brand: null,
    price: 180,
    size: null,
    colors: [],
    discount: 0,
    thumbnail: "/assets/images/products/Fashion/Clothes/14.BlueTrousers.png",
    images: [
      "/assets/images/products/Fashion/Clothes/14.BlueTrousers.png",
      "/assets/images/products/Fashion/Clothes/14.BlueTrousers.png",
    ],
    categories: ["Men's Fashion"],
    status: null,
    reviews: [],
    rating: 5,
    for: {
      demo: "fashion-2",
      type: "featured-products",
    },
  },
  {
    id: "17113fef-e238-4997-910d-68f6efe92772",
    slug: "women's-fashion",
    shop: {
      id: "c988e06d-fe79-4224-94c8-3e8926affa52",
      slug: "coveted-clicks",
      user: {
        id: "562ff1e0-e46a-4a31-9f6d-9b32e8b310ea",
        email: "Laverne_Torp@hotmail.com",
        phone: "(350) 603-8176 x7709",
        avatar:
          "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/882.jpg",
        password: "glgHqyEgs9Ed5EV",
        dateOfBirth: "1976-07-08T12:14:31.674Z",
        verified: true,
        name: {
          firstName: "Clara",
          lastName: "Stark",
        },
      },
      email: "Vivianne.Harber@hotmail.com",
      name: "Coveted Clicks",
      phone: "(613) 343-9004",
      address: "845 N. Stonybrook Ave. Tonawanda, NY 14210, Denmark",
      verified: false,
      coverPicture: "/assets/images/banners/banner-3.png",
      profilePicture: "/assets/images/faces/propic(2).png",
      socialLinks: {
        facebook: null,
        youtube: null,
        twitter: null,
        instagram: null,
      },
    },
    title: "Women's Fashion",
    brand: null,
    price: 140,
    size: null,
    colors: [],
    discount: 0,
    thumbnail:
      "/assets/images/products/Fashion/Clothes/24.OliveCasualSweater.png",
    images: [
      "/assets/images/products/Fashion/Clothes/24.OliveCasualSweater.png",
      "/assets/images/products/Fashion/Clothes/24.OliveCasualSweater.png",
    ],
    categories: ["Fashion"],
    status: null,
    reviews: [],
    rating: 5,
    for: {
      demo: "fashion-2",
      type: "featured-products",
    },
  },
  {
    id: "0c47b3df-37a9-45ca-9aed-af8e2eaebd86",
    slug: "gray-overcoat-women",
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
    title: "Gray Overcoat Women",
    brand: null,
    price: 110,
    size: null,
    colors: [],
    discount: 0,
    thumbnail:
      "/assets/images/products/Fashion/Clothes/20.GrayOvercoatWomen.png",
    images: [
      "/assets/images/products/Fashion/Clothes/20.GrayOvercoatWomen.png",
      "/assets/images/products/Fashion/Clothes/20.GrayOvercoatWomen.png",
    ],
    categories: ["Women's Fashion"],
    status: null,
    reviews: [],
    rating: 5,
    for: {
      demo: "fashion-2",
      type: "featured-products",
    },
  },
  {
    id: "1aad10db-29b9-488b-b1c9-3bf97f29f72a",
    slug: "women's-fashion",
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
    title: "Women's Fashion",
    brand: null,
    price: 140,
    size: null,
    colors: [],
    discount: 0,
    thumbnail:
      "/assets/images/products/Fashion/Clothes/24.OliveCasualSweater.png",
    images: [
      "/assets/images/products/Fashion/Clothes/24.OliveCasualSweater.png",
      "/assets/images/products/Fashion/Clothes/24.OliveCasualSweater.png",
    ],
    categories: ["Fashion"],
    status: null,
    reviews: [],
    rating: 5,
    for: {
      demo: "fashion-2",
      type: "featured-products",
    },
  },
];
export default function Home() {
  const arr = products.map((product) => (
    <Link href={`/product-details/black-sofa`}>
      <ProductCard key={product.id} product={product} />
    </Link>
  ));
  // <div >{arr.slice(0, 2)}</div>;
  return (
    <>
      {" TABS "}
      <div
        className="m-4"
        style={{ display: "flex", flexWrap: "wrap", justifyContent: "left" }}
      >
        {arr}
      </div>
    </>
  );
}
// style={{ display: "flex", flexWrap: "wrap", justifyContent: "center" }}

// <div className="m-4">{arr.slice(0, 2)}</div>;
// export default function Home() {
//   const images = [
//     {
//       src: "https://www.watchmojo.com/uploads/thumbs720/WM-Anime-Top10-Another-Most-Popular-Anime-On-The-Planet_X5C3K6-1080p30-2.jpg",
//       width: 600,
//       height: 400,
//     },
//     {
//       src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRJHGY2Lvr1ZS-saI1VAyU6b1YF82B_tsLAbA&s",
//       width: 500,
//       height: 500,
//     },
//     { src: "https://i.redd.it/vh8jgst6buxa1.jpg", width: 900, height: 600 },
//     { src: "https://i.redd.it/vh8jgst6buxa1.jpg", width: 700, height: 40 },
//     { src: "https://i.redd.it/vh8jgst6buxa1.jpg", width: 600, height: 300 },
//     {
//       src: "https://wegotthiscovered.com/wp-content/uploads/2022/06/Design-sem-nome-51.png",
//       width: 300,
//       height: 500,
//     },
//   ];

//   return (
//     <div className={styles.gallery}>
//       {images.map((image, index) => (
//         <div key={index} className={styles.galleryItem}>
//           <Image
//             src={image.src}
//             alt={`Gallery Image ${index + 1}`}
//             layout="responsive"
//             width={image.width}
//             height={image.height}
//             objectFit="cover"
//             unoptimized // This prop allows any image source
//           />
//         </div>
//       ))}
//     </div>
//   );
// }

// import {
//   Card,
//   CardHeader,
//   CardBody,
//   CardFooter,
//   Image,
//   Button,
// } from "@nextui-org/react";
// import Tabs from "@/comp/Tabs/Tabs";

// const tabs = [
//   {
//     id: "tab1",
//     label: "Tab 1",
//     content: <p>This is the content for Tab 1.</p>,
//   },
//   {
//     id: "tab2",
//     label: "Tab 2",
//     content: <p>This is the content for Tab 2.</p>,
//   },
//   {
//     id: "tab3",
//     label: "Tab 3",
//     content: <p>This is the content for Tab 3.</p>,
//   },
// ];

// export default function App() {
//   return (
//     <>
//       <Tabs />
//       <div className="gap-2 grid grid-cols-12 grid-rows-2 px-8">
//         <Card className="col-span-12 sm:col-span-4 h-[300px]">
//           <CardHeader className="absolute z-10 top-1 flex-col !items-start">
//             <p className="text-tiny text-white/60 uppercase font-bold">
//               What to watch
//             </p>
//             <h4 className="text-white font-medium text-large">
//               Stream the Acme event
//             </h4>
//           </CardHeader>
//           <Image
//             removeWrapper
//             alt="Card background"
//             className="z-0 w-full h-full object-cover"
//             src="https://nextui.org/images/card-example-4.jpeg"
//           />
//         </Card>
//         <Card className="col-span-12 sm:col-span-4 h-[300px]">
//           <CardHeader className="absolute z-10 top-1 flex-col !items-start">
//             <p className="text-tiny text-white/60 uppercase font-bold">
//               Plant a tree
//             </p>
//             <h4 className="text-white font-medium text-large">
//               Contribute to the planet
//             </h4>
//           </CardHeader>
//           <Image
//             removeWrapper
//             alt="Card background"
//             className="z-0 w-full h-full object-cover"
//             src="https://nextui.org/images/card-example-3.jpeg"
//           />
//         </Card>
//         <Card className="col-span-12 sm:col-span-4 h-[300px]">
//           <CardHeader className="absolute z-10 top-1 flex-col !items-start">
//             <p className="text-tiny text-white/60 uppercase font-bold">
//               Supercharged
//             </p>
//             <h4 className="text-white font-medium text-large">
//               Creates beauty like a beast
//             </h4>
//           </CardHeader>
//           <Image
//             removeWrapper
//             alt="Card background"
//             className="z-0 w-full h-full object-cover"
//             src="https://nextui.org/images/card-example-2.jpeg"
//           />
//         </Card>
//         <Card
//           isFooterBlurred
//           className="w-full h-[300px] col-span-12 sm:col-span-5"
//         >
//           <CardHeader className="absolute z-10 top-1 flex-col items-start">
//             <p className="text-tiny text-white/60 uppercase font-bold">New</p>
//             <h4 className="text-black font-medium text-2xl">Acme camera</h4>
//           </CardHeader>
//           <Image
//             removeWrapper
//             alt="Card example background"
//             className="z-0 w-full h-full scale-125 -translate-y-6 object-cover"
//             src="https://nextui.org/images/card-example-6.jpeg"
//           />
//           <CardFooter className="absolute bg-white/30 bottom-0 border-t-1 border-zinc-100/50 z-10 justify-between">
//             <div>
//               <p className="text-black text-tiny">Available soon.</p>
//               <p className="text-black text-tiny">Get notified.</p>
//             </div>
//             <Button
//               className="text-tiny"
//               color="primary"
//               radius="full"
//               size="sm"
//             >
//               Notify Me
//             </Button>
//           </CardFooter>
//         </Card>
//         <Card
//           isFooterBlurred
//           className="w-full h-[300px] col-span-12 sm:col-span-7"
//         >
//           <CardHeader className="absolute z-10 top-1 flex-col items-start">
//             <p className="text-tiny text-white/60 uppercase font-bold">
//               Your day your way
//             </p>
//             <h4 className="text-white/90 font-medium text-xl">
//               Your checklist for better sleep
//             </h4>
//           </CardHeader>
//           <Image
//             removeWrapper
//             alt="Relaxing app background"
//             className="z-0 w-full h-full object-cover"
//             src="https://nextui.org/images/card-example-5.jpeg"
//           />
//           <CardFooter className="absolute bg-black/40 bottom-0 z-10 border-t-1 border-default-600 dark:border-default-100">
//             <div className="flex flex-grow gap-2 items-center">
//               <Image
//                 alt="Breathing app icon"
//                 className="rounded-full w-10 h-11 bg-black"
//                 src="https://nextui.org/images/breathing-app-icon.jpeg"
//               />
//               <div className="flex flex-col">
//                 <p className="text-tiny text-white/60">Breathing App</p>
//                 <p className="text-tiny text-white/60">
//                   Get a good night's sleep.
//                 </p>
//               </div>
//             </div>
//             <Button radius="full" size="sm">
//               Get App
//             </Button>
//           </CardFooter>
//         </Card>
//       </div>
//     </>
//   );
// }
