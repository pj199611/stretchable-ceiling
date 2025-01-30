import HeroCarousel from "./carousel";
import { Wrapper } from "./styles";
import Img1 from "@/images/3d-stretchable-fabric-ceiling-work.jpg";
import Img2 from "@/images/Page-1234-scaled-700x466.jpg";
import Img3 from "@/images/stretch-ceiling-1.webp";

export default async function Carousal() {
  const mainCarouselData = [
    {
      id: 1,
      title: "Modern Furniture.",
      subTitle: "A Beautiful House_",
      imgUrl:
        "https://i0.wp.com/picjumbo.com/wp-content/uploads/beautiful-fall-waterfall-free-image.jpeg?w=600&quality=80",
      description:
        "How employees, surely the a said drops. Bathroom expected that systems let place. Her safely been little. Enterprises flows films it a fly the of wasn't designer the her thought. Enterprises flows films it a fly the of wasn't designer.",
      buttonText: "Check Category",
      buttonLink: "/category",
    },
    {
      id: 2,
      title: "Modern Furniture.",
      subTitle: "A Beautiful House_",
      imgUrl: Img2,
      description:
        "How employees, surely the a said drops. Bathroom expected that systems let place. Her safely been little. Enterprises flows films it a fly the of wasn't designer the her thought. Enterprises flows films it a fly the of wasn't designer.",
      buttonText: "Shop Now",
      buttonLink: "#",
    },
    {
      id: 3,
      title: "Modern Furniture.",
      subTitle: "A Beautiful House_",
      imgUrl: Img3,
      description:
        "How employees, surely the a said drops. Bathroom expected that systems let place. Her safely been little. Enterprises flows films it a fly the of wasn't designer the her thought. Enterprises flows films it a fly the of wasn't designer.",
      buttonText: "Shop Now",
      buttonLink: "#",
    },
  ];

  return (
    <Wrapper id="carouselBox">
      <HeroCarousel mainCarouselData={mainCarouselData} />
    </Wrapper>
  );
}
