import Image from "next/image";
// GLOBAL CUSTOM COMPONENTS
import { FlexBox } from "@/components/flex-box";
import { Paragraph } from "@/components/Typography";
import EmptyBag from "@/images/welcome.svg";

export default function EmptyCartView({
  img = EmptyBag,
  msg = "Your shopping bag is empty. Start shopping",
}) {
  return (
    <FlexBox
      alignItems="center"
      flexDirection="column"
      justifyContent="center"
      height="calc(100% - 74px)"
    >
      <Image width={300} height={300} alt="banner" src={img} />

      <Paragraph
        fontSize={15}
        mt={2}
        color="grey.600"
        textAlign="center"
        maxWidth={200}
      >
        {msg}
      </Paragraph>
    </FlexBox>
  );
}
