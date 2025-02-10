import { ReactNode } from "react";
import Button from "@mui/material/Button";
// GLOBAL CUSTOM COMPONENTS
import { H6, Paragraph, Span } from "@/components/Typography";
// STYLED COMPONENTS
import { BannerCardWrapper } from "./styles";
import { currency } from "@/lib";

// ==============================================================
interface Props {
  tag: string;
  title: string;
  ImageComponent: ReactNode;
}
// ==============================================================

export default function BannerCard({ ImageComponent, tag, title }: Props) {
  return (
    <BannerCardWrapper>
      {/* IMAGE COMPONENT */}
      {ImageComponent}

      <div className="content">
        <Paragraph
          fontWeight={600}
          // textTransform="uppercase"
          fontSize={{ sm: 24, xs: 20 }}
          color={"white"}
        >
          {tag}
        </Paragraph>

        <H6
          lineHeight={1}
          fontWeight={700}
          // textTransform="uppercase"
          fontSize={{ sm: 36, xs: 32 }}
          color={"white"}
        >
          {title}
        </H6>

        <Paragraph fontSize={18} mt={1} mb={3} color={"white"}>
          Start from{" "}
          <Span color="error.main" fontWeight={700}>
            {currency(599)}
          </Span>
        </Paragraph>

        <Button variant="contained" color="orange">
          Shop Now
        </Button>
      </div>
    </BannerCardWrapper>
  );
}
