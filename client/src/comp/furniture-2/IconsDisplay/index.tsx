import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Image from "next/image";

const iconsObj = [
  "https://dreamsolfactory.com/wp-content/uploads/elementor/thumbs/360_F_882389887_PWiFW0VpbBC1KGhd21LMRrQ3Y1aAm9eT-removebg-preview-qzxzzs3gmfnjk4akjo81ox3hkb0g1auhz2pcuml7nk.png",
  "https://dreamsolfactory.com/wp-content/uploads/elementor/thumbs/20227975-vector-24-7-support-gold-sign-label-template-removebg-preview-qzy0h0gxx38ser9fx4dtekjpmm2p5j9ccd9tl91dkw.png",
  "https://dreamsolfactory.com/wp-content/uploads/elementor/thumbs/logos-removebg-preview-1-qys7f16kdg74ftm0mnuw97dcpy5q14jxogrch177r4.png",
  "https://dreamsolfactory.com/wp-content/uploads/elementor/thumbs/21-years-guarantee-stamp-icon-260nw-1811776165__1_-removebg-preview-1-1-qzxzysdleqanaxqgc8s8263yznwhwswp65wwm42680.png",
  "https://dreamsolfactory.com/wp-content/uploads/elementor/thumbs/ISO-certification-scaled-1-qyxcaprywpbqzzuz449g45zhyz56a85kf1e6fyr3eo.webp",
  "https://dreamsolfactory.com/wp-content/uploads/elementor/thumbs/360_F_450708764_BCemcEy8PZFTUDKfwz3fbXMQ8t8xhBsU-removebg-preview-r012z9o9976cd6mgp8t2x66nzzrc09npmwm3u0fsw0.png",
];

export default async function IconsDisplay() {
  return (
    <Box bgcolor="grey.50" pb={10}>
      <Container>
        {/* <Box mb={5} textAlign="center" justifyItems={"center"}>
          <H3 fontSize={{ sm: 30, xs: 27 }}>Video Section</H3>
          {/* <Paragraph color="grey.600" fontSize={{ sm: 16, xs: 14 }}>
            Some of our videos
          </Paragraph> */}
        {/* </Box> */}
        <Grid container spacing={3} pt={3}>
          {iconsObj.map((val, i) => {
            return (
              <Grid item lg={2} md={3} sm={4} xs={6}>
                <Image
                  key={`icons-${i}`}
                  src={val}
                  width={170}
                  height={170}
                  alt="IconImage"
                  objectFit="contain"
                />
              </Grid>
            );
          })}
        </Grid>
      </Container>
    </Box>
  );
}
