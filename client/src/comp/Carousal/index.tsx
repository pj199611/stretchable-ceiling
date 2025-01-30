import HeroCarousel from "./carousel";
import { Wrapper } from "./styles";
import Img1 from "@/images/3d-stretchable-fabric-ceiling-work.jpg";
import Img2 from "@/images/Page-1234-scaled-700x466.jpg";
import Img3 from "@/images/stretch-ceiling-1.webp";

export default async function Carousal() {
  const mainCarouselData = [
    {
      id: 1,
      title: "",
      subTitle: "",
      imgUrl:
        "https://www.nakshatratrades.com/images/newbanner/clipso-ceiling-designer-banner4.png",
      description: "",
      buttonLink: "",
    },
    {
      id: 2,
      title: "",
      subTitle: "",
      imgUrl:
        "https://arendlighting.com/wp-content/uploads/2020/01/sqf-khshsn.jpg",
      description: "",
      buttonText: "",
      buttonLink: "",
    },

    {
      id: 3,
      title: "Modern Furniture.",
      subTitle: "A Beautiful House",
      imgUrl: "https://www.definedesign.co.in/images/slider//1.jpg",
      description:
        "How employees, surely the a said drops. Bathroom expected that systems let place. Her safely been little. Enterprises flows films it a fly the of wasn't designer the her thought. Enterprises flows films it a fly the of wasn't designer.",
      buttonText: "",
      buttonLink: "",
    },
    {
      id: 4,
      title: "Modern Furniture.",
      subTitle: "A Beautiful House",
      imgUrl:
        "https://5.imimg.com/data5/SELLER/Default/2024/11/468471579/XR/RF/BV/150438258/pvc-top-stretch-ceiling-1000x1000.jpeg",
      description:
        "How employees, surely the a said drops. Bathroom expected that systems let place. Her safely been little. Enterprises flows films it a fly the of wasn't designer the her thought. Enterprises flows films it a fly the of wasn't designer.",
      buttonText: "",
      buttonLink: "",
    },
    {
      id: 5,
      title: "Modern Furniture.",
      subTitle: "A Beautiful House",
      imgUrl:
        "https://5.imimg.com/data5/SELLER/Default/2023/6/315776636/DF/OQ/HZ/25161696/pvc-stretch-ceiling.jpeg",
      description:
        "How employees, surely the a said drops. Bathroom expected that systems let place. Her safely been little. Enterprises flows films it a fly the of wasn't designer the her thought. Enterprises flows films it a fly the of wasn't designer.",
      buttonText: "",
      buttonLink: "",
    },
  ];

  return (
    <Wrapper id="carouselBox">
      <HeroCarousel mainCarouselData={mainCarouselData} />
    </Wrapper>
  );
}
