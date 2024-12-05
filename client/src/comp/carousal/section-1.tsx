"use client";

import Grid from "@mui/material/Grid";
import Container from "@mui/material/Container";
import useTheme from "@mui/material/styles/useTheme";
// GLOBAL CUSTOM COMPONENTS
import LazyImage from "@/components/LazyImage";
import { Carousel } from "@/components/carousel";
import { H1, Paragraph } from "@/components/Typography";
import Link from "next/link";
// CUSTOM DATA MODEL
// import { GiftCarouselItem } from "models/Carousel.model";
// STYLED COMPONENTS
import { COMMON_DOT_STYLES } from "@/components/carousel/styles";
import {
  StyledBox,
  StyledGrid,
  ContentWrapper,
  GridItemTwo,
  CarouselButton,
} from "./styles";

// ==========================================================
type Props = { carouselData: any };
// ==========================================================

export default function Section1({ carouselData }: Props) {
  const { palette } = useTheme();

  return (
    <StyledBox id="carouselBox">
      <Container>
        <Carousel
          dots
          arrows={true}
          spaceBetween={0}
          slidesToShow={1}
          dotStyles={COMMON_DOT_STYLES}
          dotColor={palette.primary.main}
          arrowStyles={{
            boxShadow: 0,
            color: "primary.main",
            backgroundColor: "transparent",
          }}
        >
          {carouselData.map(
            ({ id, title, subTitle, buttonText, imgUrl, buttonLink }) => (
              <div key={id}>
                <StyledGrid container>
                  <Grid item md={6} sm={6} xs={12}>
                    <ContentWrapper>
                      <Paragraph color="primary.main">{title}</Paragraph>

                      <H1 maxWidth={600}>{subTitle}</H1>

                      <Link href={buttonLink}>
                        <CarouselButton disableElevation variant="contained">
                          {buttonText}
                        </CarouselButton>
                      </Link>
                    </ContentWrapper>
                  </Grid>

                  <GridItemTwo item md={6} sm={6} xs={12}>
                    <LazyImage
                      priority
                      alt={title}
                      width={600}
                      height={450}
                      src={imgUrl}
                    />
                  </GridItemTwo>
                </StyledGrid>
              </div>
            )
          )}
        </Carousel>
      </Container>
    </StyledBox>
  );
}
