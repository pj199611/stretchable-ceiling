import Link from "next/link";
import { Fragment, ReactNode } from "react";
import useTheme from "@mui/material/styles/useTheme";
import useMediaQuery from "@mui/material/useMediaQuery";
import clsx from "clsx";
import Image from "next/image";
import Logo from "@/images/Final.svg";
// LOCAL CUSTOM HOOKS
import useHeader from "./hooks/use-header";
// GLOBAL CUSTOM COMPONENTS
import LazyImage from "@/components/LazyImage";
import FlexBox from "@/components/flex-box/flex-box";
// LOCAL CUSTOM COMPONENTS
import MobileHeader from "./components/mobile-header";
import DialogDrawer from "./components/dialog-drawer";
import CategoriesMenu from "./components/categories-menu";
import LoginCartButtons from "./components/login-cart-buttons";
import WishlistBtn from "@/comp/wishlist/wishlistBtn";

// STYLED COMPONENTS
import { HeaderWrapper, StyledContainer } from "./styles";
import MenuList from "@/comp/menu-list";
// ==============================================================
interface Props {
  isFixed?: boolean;
  className?: string;
  midSlot: ReactNode;
}
// ==============================================================

export default function Header({ isFixed, className, midSlot }: Props) {
  const theme = useTheme();
  const downMd = useMediaQuery(theme.breakpoints.down(1150));
  const { dialogOpen, sidenavOpen, toggleDialog, toggleSidenav } = useHeader();

  const CONTENT_FOR_LARGE_DEVICE = (
    <Fragment>
      {/* LEFT CONTENT - LOGO AND CATEGORY */}
      <FlexBox minWidth={100} alignItems="center">
        {/* <Link href="/"> */}
        <div style={{ display: "flex" }}>
          <div style={{ paddingTop: 72, textAlign: "center" }}>
            <h2>Nest and Nook </h2>
            <h2>Interior </h2>
          </div>
          <Image
            src={Logo}
            alt="logo"
            width={200}
            height={200}
            style={{ objectFit: "contain", margin: "0 -64px" }}
          />
        </div>
        {/* </Link> */}

        {/* SHOW DROP DOWN CATEGORY BUTTON WHEN HEADER FIXED */}
        {/* {isFixed ? <CategoriesMenu /> : null} */}
      </FlexBox>
      {/* SEARCH FORM | NAVIGATION */}
      {midSlot}
      {/* MEnu-List */}
      {/* <MenuList /> */}
      <FlexBox minWidth={100} alignItems="center">
        <Link href="/">
          <span style={{ margin: "0 4px" }}>Home</span>
        </Link>
        <Link href="/category">
          <span style={{ margin: "0 4px" }}>Category</span>
        </Link>
        <Link href="/orders">
          <span style={{ margin: "0 4px" }}>Orders</span>
        </Link>

        {/* <Wishlist /> */}
        <WishlistBtn />
        {/* LOGIN AND CART BUTTON */}
        <LoginCartButtons
          toggleDialog={toggleDialog}
          toggleSidenav={toggleSidenav}
        />
      </FlexBox>
      {/* LOGIN FORM DIALOG AND CART SIDE BAR  */}
      <DialogDrawer
        dialogOpen={dialogOpen}
        sidenavOpen={sidenavOpen}
        toggleDialog={toggleDialog}
        toggleSidenav={toggleSidenav}
      />
    </Fragment>
  );

  return (
    <HeaderWrapper className={clsx(className)}>
      <StyledContainer>
        {downMd ? <MobileHeader /> : CONTENT_FOR_LARGE_DEVICE}
      </StyledContainer>
    </HeaderWrapper>
  );
}
