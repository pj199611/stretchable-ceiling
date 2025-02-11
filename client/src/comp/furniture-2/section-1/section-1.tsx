import Button from "@mui/material/Button";
import Container from "@mui/material/Container";
// GLOBAL CUSTOM COMPONENTS
import LazyImage from "@/components/LazyImage";
import { H2, Paragraph, Span } from "@/components/Typography";
// STYLED COMPONENT
import { RootStyle } from "./styles";
// IMPORT IMAGES
import { currency } from "@/lib";
import Link from "next/link";

export default function Section1() {
  return (
    <Container>
      <RootStyle>
        <LazyImage
          className="banner"
          alt="Stretchable-Ceiling"
          src="https://ik.imagekit.io/nestandnookinterior/Stretchable%20Ceiling/SC%20on%20Pillars.jpg?updatedAt=1739197654327"
          width={2000}
          height={450}
        />

        <div className="content">
          <Paragraph fontSize={28} fontWeight={600}>
            Check out multiple
          </Paragraph>
          <H2
            lineHeight={1}
            // textTransform="uppercase"
            fontSize={{ sm: 60, xs: 48 }}
          >
            Stretchable Ceiling
          </H2>
          <Paragraph fontSize={18} mt={1} mb={3}>
            Start from <Span fontWeight={700}>{currency(599)}</Span>
          </Paragraph>
          <Link href="/category">
            <Button variant="contained" color="orange" size="large">
              Check Categories
            </Button>
          </Link>
        </div>
      </RootStyle>
    </Container>
  );
}
