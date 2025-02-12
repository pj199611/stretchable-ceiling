import HeroCarousel from "./carousel";
import { Wrapper } from "./styles";

export default async function Carousal() {
  const mainCarouselData = [
    {
      id: 1,
      title: "Printed",
      subTitle: "Stretchable Ceiling",
      imgUrl:
        "https://ik.imagekit.io/nestandnookinterior/Stretchable%20Ceiling/Printed.jpg",
      description: "",
      buttonLink: "",
    },
    {
      id: 2,
      title: "Fibre Optics",
      subTitle: "Stretchable Ceiling",
      imgUrl:
        "https://ik.imagekit.io/nestandnookinterior/Stretchable%20Ceiling/Fibre%20Optics.jpg",
      description: "",
      buttonText: "",
      buttonLink: "",
    },
    {
      id: 3,
      title: "Multi Dimension",
      subTitle: "Stretchable Ceiling",
      imgUrl: "https://www.definedesign.co.in/images/slider//1.jpg",
      description: "",
      buttonText: "",
      buttonLink: "",
    },
    {
      id: 4,
      title: "SC Tiles",
      subTitle: "Stretchable Ceiling",
      imgUrl:
        "https://ik.imagekit.io/nestandnookinterior/Stretchable%20Ceiling/SC%20Tiles.jpg",
      description: "",
      buttonText: "",
      buttonLink: "",
    },
    {
      id: 5,
      title: "Dome Shaped",
      subTitle: "Stretchable Ceiling",
      imgUrl:
        "https://ik.imagekit.io/nestandnookinterior/Stretchable%20Ceiling/Dome%20Shaped.png",
      description: "",
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
