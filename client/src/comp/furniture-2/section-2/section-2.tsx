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
            title="Furniture"
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
            tag="New"
            title="Lighting"
            ImageComponent={
              <LazyImage
                alt="Banner"
                src="https://ik.imagekit.io/nestandnookinterior/Stretchable%20Ceiling/3D%20Virtual%20Window.png?updatedAt=1739197741390"
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
