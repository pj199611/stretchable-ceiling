import Grid from "@mui/material/Grid";
import Container from "@mui/material/Container";
import BannerCard from "./banner-card";
import { NavLink3 } from "@/components/nav-link";
import { H4, H5, Paragraph } from "@/components/Typography";

export default function SubCategoryCard({
  name,
  description,
  price,
  priceDetails = "per sq feet",
  imageUrl,
}: any) {
  return (
    <div>
      <BannerCard imageFull flex={1} img={imageUrl} maxHeight={640}>
        <H4 fontSize={20} lineHeight={1.2} mb={2}>
          {name}
        </H4>
        <Paragraph fontSize={13} letterSpacing={1.2}>
          {description}
        </Paragraph>
        <H5 fontSize={18}>{`₹ ${price} ${priceDetails}`}</H5>
      </BannerCard>
    </div>
  );
}
