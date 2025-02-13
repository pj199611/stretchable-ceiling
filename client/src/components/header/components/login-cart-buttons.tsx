"use client";
import { useState, useEffect } from "react";
import Badge from "@mui/material/Badge";
import IconButton from "@mui/material/IconButton";
// MUI ICON COMPONENT
import PersonOutline from "@mui/icons-material/PersonOutline";
// CUSTOM ICON COMPONENT
import ShoppingBagOutlined from "@/icons/ShoppingBagOutlined";
// GLOBAL CUSTOM HOOK
import useCart from "@/hooks/useCart";
import { Button } from "@mui/material";
import AccountMenu from "@/comp/AccountMenu/AccountMenu";
import useRole from "@/hooks/hooks/useRole";

// ==============================================================
interface Props {
  toggleDialog: () => void;
  toggleSidenav: () => void;
}
// ==============================================================

export default function LoginCartButtons({
  toggleDialog,
  toggleSidenav,
}: Props) {
  const { state } = useCart();
  const { token } = useRole();

  const [isLogin, setIsLogin] = useState<string | null>(null);

  useEffect(() => {
    // Only access localStorage in the client (browser)
    if (typeof window !== "undefined") {
      const storedData = localStorage.getItem("access_token");
      setIsLogin(storedData);
    }
  }, []);

  const ICON_COLOR = { color: "grey.600" };

  return (
    <div>
      {isLogin ? (
        <AccountMenu />
      ) : (
        <Button
          onClick={toggleDialog}
          style={{ textDecoration: "underline", fontSize: 16 }}
        >
          Login
        </Button>
      )}

      <Badge badgeContent={state.cart?.length} color="primary">
        <IconButton onClick={toggleSidenav}>
          <ShoppingBagOutlined sx={ICON_COLOR} />
        </IconButton>
      </Badge>
    </div>
  );
}
