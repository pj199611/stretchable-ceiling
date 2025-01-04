import Image from "next/image";
// GLOBAL CUSTOM COMPONENTS
import { FlexBox } from "@/components/flex-box";
import { Paragraph } from "@/components/Typography";
import EmptyBag from "@/images/welcome.svg";

type Props = {
  img?: any;
  msg?: string;
  imgProps?: any;
};

export default function Empty({
  img = EmptyBag,
  msg = "Your shopping bag is empty. Start shopping",
  imgProps,
}: Props) {
  return (
    <FlexBox
      alignItems="center"
      flexDirection="column"
      justifyContent="center"
      height="calc(100% - 74px)"
    >
      <Image
        width={300}
        height={300}
        {...imgProps}
        alt="banner"
        src={img}
        loading="lazy"
      />

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
