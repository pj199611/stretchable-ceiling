import { Fragment } from "react";
import Dialog from "@mui/material/Dialog";
import Drawer from "@mui/material/Drawer";
import { Theme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";
// LOGIN FORM
import { LoginPageView } from "@/comp/sessions/page-view";
// GLOBAL CUSTOM COMPONENTS
import { MiniCart } from "@/components/mini-cart";
// LOGIN PAGE SECTIONS
import { Wrapper } from "@/comp/sessions/styles";
import LogoWithTitle from "@/comp/sessions/components/logo-title";
import LoginBottom from "@/comp/sessions/components/login-bottom";
import SocialButtons from "@/comp/sessions/components/social-buttons";

// ==============================================================
interface Props {
  dialogOpen: boolean;
  sidenavOpen: boolean;
  toggleDialog: () => void;
  toggleSidenav: () => void;
}
// ==============================================================

export default function DialogDrawer(props: Props) {
  const { dialogOpen, sidenavOpen, toggleDialog, toggleSidenav } = props;

  const isMobile = useMediaQuery((theme: Theme) =>
    theme.breakpoints.down("xs")
  );

  return (
    <Fragment>
      <Dialog
        scroll="body"
        open={dialogOpen}
        fullWidth={isMobile}
        onClose={toggleDialog}
        sx={{ zIndex: 9999 }}
      >
        <Wrapper>
          <LogoWithTitle />
          <LoginPageView closeDialog={toggleDialog} />
          {/* <SocialButtons /> */}
          <LoginBottom toggleDialog={toggleDialog} />
        </Wrapper>
      </Dialog>

      <Drawer
        open={sidenavOpen}
        anchor="right"
        onClose={toggleSidenav}
        sx={{ zIndex: 9999 }}
      >
        <MiniCart toggleSidenav={toggleSidenav} />
      </Drawer>
    </Fragment>
  );
}
