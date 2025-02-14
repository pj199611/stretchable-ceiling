import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";

import { H3, Paragraph } from "@/components/Typography";

const videoObj = [
  {
    xsGrid: 12,
    lgGrid: 12,
    url: "https://ik.imagekit.io/nestandnookinterior/Our_Projects/Our_First_Project.mp4?updatedAt=1739472817312",
  },
];

export default async function VideoSection() {
  return (
    <Box bgcolor="grey.50" mt={1} pt={3} pb={1}>
      <Container>
        <Box mb={1} textAlign="center" justifyItems={"center"}>
          <H3 fontSize={{ sm: 30, xs: 27 }}>Our Projects</H3>
          <Paragraph color="grey.600" fontSize={{ sm: 16, xs: 14 }}>
            Check out some our Projects
          </Paragraph>
        </Box>

        <Grid container spacing={3} pt={3}>
          {videoObj.map((val, i) => (
            <Grid item xs={val.xsGrid} lg={val.lgGrid}>
              <video
                width="auto"
                height={400}
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
