import { Fragment } from "react";
import Link from "next/link";
// import AppStore from "./app-store";
import { Paragraph } from "@/components/Typography";
import Logo from "@/comp/Logo/Logo";
import { FlexBox } from "@/components/flex-box";

export default function LogoSection() {
  return (
    <Fragment>
      <FlexBox flexDirection={"column"} alignItems={"center"}>
        <Link href="/">
          <Logo width={"auto"} imgStyle={{ margin: -40 }} />
        </Link>

        <Paragraph mb={2.5} color="grey.500">
          Welcome to Nest and Nook Interior
        </Paragraph>
      </FlexBox>
      {/* <AppStore /> */}
    </Fragment>
  );
}
