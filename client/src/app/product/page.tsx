// // pages/index.js
// import Image from "next/image";
// import styles from "@/comp/gallery/Home.module.css";

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

import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Image,
  Button,
} from "@nextui-org/react";
import Tabs from "@/comp/Tabs/Tabs";

const tabs = [
  {
    id: "tab1",
    label: "Tab 1",
    content: <p>This is the content for Tab 1.</p>,
  },
  {
    id: "tab2",
    label: "Tab 2",
    content: <p>This is the content for Tab 2.</p>,
  },
  {
    id: "tab3",
    label: "Tab 3",
    content: <p>This is the content for Tab 3.</p>,
  },
];

export default function App() {
  return (
    <>
      <Tabs />
      <div className="gap-2 grid grid-cols-12 grid-rows-2 px-8">
        <Card className="col-span-12 sm:col-span-4 h-[300px]">
          <CardHeader className="absolute z-10 top-1 flex-col !items-start">
            <p className="text-tiny text-white/60 uppercase font-bold">
              What to watch
            </p>
            <h4 className="text-white font-medium text-large">
              Stream the Acme event
            </h4>
          </CardHeader>
          <Image
            removeWrapper
            alt="Card background"
            className="z-0 w-full h-full object-cover"
            src="https://nextui.org/images/card-example-4.jpeg"
          />
        </Card>
        <Card className="col-span-12 sm:col-span-4 h-[300px]">
          <CardHeader className="absolute z-10 top-1 flex-col !items-start">
            <p className="text-tiny text-white/60 uppercase font-bold">
              Plant a tree
            </p>
            <h4 className="text-white font-medium text-large">
              Contribute to the planet
            </h4>
          </CardHeader>
          <Image
            removeWrapper
            alt="Card background"
            className="z-0 w-full h-full object-cover"
            src="https://nextui.org/images/card-example-3.jpeg"
          />
        </Card>
        <Card className="col-span-12 sm:col-span-4 h-[300px]">
          <CardHeader className="absolute z-10 top-1 flex-col !items-start">
            <p className="text-tiny text-white/60 uppercase font-bold">
              Supercharged
            </p>
            <h4 className="text-white font-medium text-large">
              Creates beauty like a beast
            </h4>
          </CardHeader>
          <Image
            removeWrapper
            alt="Card background"
            className="z-0 w-full h-full object-cover"
            src="https://nextui.org/images/card-example-2.jpeg"
          />
        </Card>
        <Card
          isFooterBlurred
          className="w-full h-[300px] col-span-12 sm:col-span-5"
        >
          <CardHeader className="absolute z-10 top-1 flex-col items-start">
            <p className="text-tiny text-white/60 uppercase font-bold">New</p>
            <h4 className="text-black font-medium text-2xl">Acme camera</h4>
          </CardHeader>
          <Image
            removeWrapper
            alt="Card example background"
            className="z-0 w-full h-full scale-125 -translate-y-6 object-cover"
            src="https://nextui.org/images/card-example-6.jpeg"
          />
          <CardFooter className="absolute bg-white/30 bottom-0 border-t-1 border-zinc-100/50 z-10 justify-between">
            <div>
              <p className="text-black text-tiny">Available soon.</p>
              <p className="text-black text-tiny">Get notified.</p>
            </div>
            <Button
              className="text-tiny"
              color="primary"
              radius="full"
              size="sm"
            >
              Notify Me
            </Button>
          </CardFooter>
        </Card>
        <Card
          isFooterBlurred
          className="w-full h-[300px] col-span-12 sm:col-span-7"
        >
          <CardHeader className="absolute z-10 top-1 flex-col items-start">
            <p className="text-tiny text-white/60 uppercase font-bold">
              Your day your way
            </p>
            <h4 className="text-white/90 font-medium text-xl">
              Your checklist for better sleep
            </h4>
          </CardHeader>
          <Image
            removeWrapper
            alt="Relaxing app background"
            className="z-0 w-full h-full object-cover"
            src="https://nextui.org/images/card-example-5.jpeg"
          />
          <CardFooter className="absolute bg-black/40 bottom-0 z-10 border-t-1 border-default-600 dark:border-default-100">
            <div className="flex flex-grow gap-2 items-center">
              <Image
                alt="Breathing app icon"
                className="rounded-full w-10 h-11 bg-black"
                src="https://nextui.org/images/breathing-app-icon.jpeg"
              />
              <div className="flex flex-col">
                <p className="text-tiny text-white/60">Breathing App</p>
                <p className="text-tiny text-white/60">
                  Get a good night's sleep.
                </p>
              </div>
            </div>
            <Button radius="full" size="sm">
              Get App
            </Button>
          </CardFooter>
        </Card>
      </div>
    </>
  );
}
