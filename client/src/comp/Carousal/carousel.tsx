"use client";

import Container from "@mui/material/Container";
import useTheme from "@mui/material/styles/useTheme";
import { Carousel } from "@/components/carousel";
import { H1, H6, Paragraph } from "@/components/Typography";
import { StyledButton, ContentWrapper } from "./styles";
import { COMMON_DOT_STYLES } from "@/components/carousel/styles";
import Image from "next/image";
import Link from "next/link";
import LazyImage from "@/components/LazyImage";

// =============================================================================
type Props = { mainCarouselData: any };
// =============================================================================

export default function HeroCarousel({ mainCarouselData }: Props) {
  const { palette } = useTheme();

  return (
    <Carousel
      dots
      arrows={true}
      slidesToShow={1}
      spaceBetween={0}
      dotStyles={COMMON_DOT_STYLES}
      dotColor={palette.primary.main}
    >
      {mainCarouselData.map((item) => (
        <div key={item.id}>
          <div style={{ zIndex: 5, position: "fixed", maxWidth: "80vw" }}>
            <Container>
              <div className="carousel-content">
                <H6>{item.subTitle}</H6>
                <H1 lineHeight={1} fontSize={60} py={2}>
                  {item.title}
                </H1>

                <Paragraph color="white.700" mb={5}>
                  {item.description}
                </Paragraph>

                {item.buttonText && (
                  <Link href={item.buttonLink}>
                    <StyledButton color="primary" variant="contained">
                      {item.buttonText}
                    </StyledButton>
                  </Link>
                )}
              </div>
            </Container>
          </div>

          <div style={{ zIndex: 1 }}>
            <LazyImage
              className="banner"
              alt="Stretchable-Ceiling"
              src={item.imgUrl}
              width={2000}
              height={600}
              // fill={false}
              style={{ objectFit: "cover" }}
            />
            {/* <Image
                src={item.imgUrl}
                alt={"Image"}
                width={2000}
                height={760}
                 objectFit="fill"
                className="rounded-xl transition-all duration-500 ease-in-out cursor-pointer"
              /> */}
          </div>
        </div>
      ))}
    </Carousel>
  );
}
