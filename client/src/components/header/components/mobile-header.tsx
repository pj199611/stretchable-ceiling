import Link from "next/link";
import { Fragment } from "react";
import Box from "@mui/material/Box";
import Badge from "@mui/material/Badge";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
// MUI ICON COMPONENT
import Clear from "@mui/icons-material/Clear";
import Logo from "@/images/Final.svg";
import Image from "next/image";

// CUSTOM ICON COMPONENTS
import Icon from "@/icons";
// LOCAL CUSTOM COMPONENTS
import DialogDrawer from "./dialog-drawer";
// GLOBAL CUSTOM COMPONENTS
// import Image from "@/components/BazaarImage";
import { Paragraph } from "@/components/Typography";
import LoginCartButtons from "./login-cart-buttons";
import WishlistBtn from "@/comp/wishlist/wishlistBtn";
// import { SearchInput } from "@/components/search-box";
import { MobileMenu } from "@/components/navbar/mobile-menu";
import { FlexBetween, FlexBox } from "@/components/flex-box";
// GLOBAL CUSTOM HOOK
import useCart from "@/hooks/useCart";
// LOCAL CUSTOM HOOK
import useHeader from "../hooks/use-header";

export default function MobileHeader() {
  const { state } = useCart();
  const {
    dialogOpen,
    sidenavOpen,
    // searchBarOpen,
    toggleDialog,
    // toggleSearchBar,
    toggleSidenav,
  } = useHeader();

  const ICON_STYLE = { color: "grey.600", fontSize: 20 };

  return (
    <Fragment>
      <FlexBetween width="100%">
        {/* LEFT CONTENT - NAVIGATION ICON BUTTON */}
        <FlexBox justifyContent="start">
          <MobileMenu />
        </FlexBox>

        {/* MIDDLE CONTENT - LOGO */}
        <FlexBox justifyContent="center" flex={2}>
          <Link href="/">
            <Image height={100} src={Logo} alt="Nest&Nook" />
          </Link>
        </FlexBox>

        {/* RIGHT CONTENT - Wishlist, LOGIN, CART */}
        <FlexBox justifyContent="end" flex={1}>
          <WishlistBtn />
          <LoginCartButtons
            toggleDialog={toggleDialog}
            toggleSidenav={toggleSidenav}
          />
        </FlexBox>
      </FlexBetween>

      {/* SEARCH FORM DRAWER */}
      {/* <Drawer
        open={searchBarOpen}
        anchor="top"
        onClose={toggleSearchBar}
        sx={{ zIndex: 9999 }}
      >
        <Box width="auto" padding={2} height="100vh">
          <FlexBetween mb={1}>
            <Paragraph>Search Items</Paragraph>

            <IconButton onClick={toggleSearchBar}>
              <Clear />
            </IconButton>
          </FlexBetween>

        //  CATEGORY BASED SEARCH FORM 
          <SearchInput /> 
        </Box>
      </Drawer> */}

      {/* LOGIN FORM DIALOG AND CART SIDE BAR  */}
      <DialogDrawer
        dialogOpen={dialogOpen}
        sidenavOpen={sidenavOpen}
        toggleDialog={toggleDialog}
        toggleSidenav={toggleSidenav}
      />
    </Fragment>
  );
}
