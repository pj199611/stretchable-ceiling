import { ReactNode } from "react";
import Link from "next/link";
import Button from "@mui/material/Button";

import { H6, Paragraph, Span } from "@/components/Typography";
import { currency } from "@/lib";

import { BannerCardWrapper } from "./styles";

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
          Start from <Span fontWeight={700}>{currency(599)}</Span>
        </Paragraph>

        <Link href="/category">
          <Button variant="contained" color="orange">
            Check Categories
          </Button>
        </Link>
      </div>
    </BannerCardWrapper>
  );
}
