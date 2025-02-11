import Box from "@mui/material/Box";
import Container from "@mui/material/Container";

import { H3, Paragraph } from "@/components/Typography";
import { FlexRowCenter } from "@/components/flex-box";

const videoObj = [
  {
    width: 300,
    height: 500,
    url: "https://ik.imagekit.io/nestandnookinterior/Stretchable%20Ceiling/Tree_Video.mp4?updatedAt=1739304857744",
    style: { margin: 8 },
  },
  {
    width: 300,
    height: 610,
    url: "https://ik.imagekit.io/nestandnookinterior/Stretchable%20Ceiling/Car.mp4?updatedAt=1739306098021",
    style: { margin: 8, marginTop: -110 },
  },
  {
    width: 700,
    height: 590,
    url: "https://ik.imagekit.io/nestandnookinterior/Stretchable%20Ceiling/Stretch%20ceilings%20with%20ART%20Print%20_%20Full%20backlight%20ceilings%20_%20Ceilings%20for%20roo_Full-HD.mp4?updatedAt=1739306100909",
    style: { margin: 8, marginTop: -100 },
  },
];

export default async function VideoSection() {
  return (
    <Box bgcolor="grey.50" mt={8} pt={3} pb={10}>
      <Container>
        <Box mb={5} textAlign="center" justifyItems={"center"}>
          <H3 fontSize={{ sm: 30, xs: 27 }}>Video Section</H3>
          {/* <Paragraph color="grey.600" fontSize={{ sm: 16, xs: 14 }}>
            Some of our videos
          </Paragraph> */}
        </Box>

        <FlexRowCenter>
          {videoObj.map((val, i) => {
            return (
              <div style={val.style}>
                <video
                  key={i}
                  width={val.width}
                  height={val.height}
                  controls
                  loop
                  autoPlay
                  muted
                >
                  <source src={val.url} type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              </div>
            );
          })}
        </FlexRowCenter>
      </Container>
    </Box>
  );
}
