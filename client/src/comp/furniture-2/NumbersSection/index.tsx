import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Container from "@mui/material/Container";

import { H3, Paragraph } from "@/components/Typography";
import { FlexBox } from "@/components/flex-box";
import Counter from "@/comp/Counter";

const numberObj = [
  { name: "#Nest&NookHomes", number: 40 },
  { name: "Designers", number: 20 },
  { name: "Cities", number: 3 },
];

export default async function VideoSection() {
  return (
    <Box mt={8} pt={3} pb={12}>
      <Container>
        <Box mb={5} textAlign="center" justifyItems={"center"}>
          <H3 fontSize={{ sm: 30, xs: 27 }}>Numbers Section</H3>
          <Paragraph color="grey.600" fontSize={{ sm: 16, xs: 14 }}>
            Let our numbers do the talking!
          </Paragraph>
        </Box>

        <Box bgcolor="grey.200" style={{ borderRadius: "3%" }}>
          <Container>
            <Grid container spacing={3} pt={8} pb={8} justifyContent={"center"}>
              {numberObj.map((val, i) => (
                <Grid item lg={3} sm={6} xs={12} key={`number-${i}`}>
                  <FlexBox alignItems={"center"} flexDirection={"column"}>
                    <h1>
                      <Counter target={val.number} suffix="+" />
                    </h1>
                    <br />
                    <h3>{val.name}</h3>
                  </FlexBox>
                </Grid>
              ))}
            </Grid>
          </Container>
        </Box>
      </Container>
    </Box>
  );
}
