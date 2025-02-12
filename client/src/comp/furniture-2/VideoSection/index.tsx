import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";

import { H3, Paragraph } from "@/components/Typography";

const videoObj = [
  {
    xsGrid: 5,
    lgGrid: 2,
    url: "https://ik.imagekit.io/nestandnookinterior/Stretchable%20Ceiling/Tree_Video.mp4?updatedAt=1739304857744",
  },
  {
    xsGrid: 7,
    lgGrid: 3,
    url: "https://ik.imagekit.io/nestandnookinterior/Stretchable%20Ceiling/Car.mp4?updatedAt=1739306098021",
  },
  {
    xsGrid: 12,
    lgGrid: 7,
    height: 590,
    url: "https://ik.imagekit.io/nestandnookinterior/Stretchable%20Ceiling/Stretch%20ceilings%20with%20ART%20Print%20_%20Full%20backlight%20ceilings%20_%20Ceilings%20for%20roo_Full-HD.mp4?updatedAt=1739306100909",
  },
];

export default async function VideoSection() {
  return (
    <Box bgcolor="grey.50" mt={8} pt={3} pb={10}>
      <Container>
        <Box mb={5} textAlign="center" justifyItems={"center"}>
          <H3 fontSize={{ sm: 30, xs: 27 }}>Video Section</H3>
          <Paragraph color="grey.600" fontSize={{ sm: 16, xs: 14 }}>
            Check out some of our videos
          </Paragraph>
        </Box>

        <Grid container spacing={3} pt={3}>
          {videoObj.map((val, i) => (
            <Grid item xs={val.xsGrid} lg={val.lgGrid}>
              <video
                width="auto"
                height="auto"
                controls
                loop
                autoPlay
                muted
                style={{ display: "block", width: "100%" }}
              >
                <source src={val.url} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
}
