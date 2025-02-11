import Grid from "@mui/material/Grid";
import Container from "@mui/material/Container";
// LOCAL CUSTOM COMPONENT
import BannerCard from "./banner-card";
// GLOBAL CUSTOM COMPONENT
import LazyImage from "@/components/LazyImage";
// IMPORT IMAGES

export default function Section2() {
  return (
    <Container>
      <Grid container spacing={3} pt={3}>
        <Grid item lg={7} md={6} xs={12}>
          <BannerCard
            tag="Modern"
            title="Luxury Ceiling"
            ImageComponent={
              <LazyImage
                alt="Banner"
                src="https://ik.imagekit.io/nestandnookinterior/Stretchable%20Ceiling/Lacquer%20Ceiling.jpg"
                width={2000}
                height={450}
              />
            }
          />
        </Grid>

        <Grid item lg={5} md={6} xs={12}>
          <BannerCard
            tag="3D"
            title="Wall Art"
            ImageComponent={
              <LazyImage
                alt="Banner"
                src="https://5.imimg.com/data5/SELLER/Default/2024/9/451142053/OW/WX/LX/140807546/3d-acrylic-led-wall-art-style-22-500x500.jpg"
                width={2000}
                height={450}
              />
            }
          />
        </Grid>
      </Grid>
    </Container>
  );
}
