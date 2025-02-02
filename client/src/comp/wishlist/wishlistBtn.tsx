"use client";
import Link from "next/link";
import { useState, useEffect } from "react";
import Badge from "@mui/material/Badge";
import IconButton from "@mui/material/IconButton";
import FavoriteBorder from "@mui/icons-material/FavoriteBorder";

import useCart from "@/hooks/useCart";

const ICON_COLOR = { color: "grey.600" };

export default function wishlistBtn({}) {
  const { state } = useCart();
  const [isLogin, setIsLogin] = useState<string | null>(null);

  useEffect(() => {
    // Only access localStorage in the client (browser)
    if (typeof window !== "undefined") {
      const storedData = localStorage.getItem("access_token");
      setIsLogin(storedData);
    }
  }, []);

  if (isLogin)
    return (
      <Link href="/wishlist">
        <Badge badgeContent={state.wishlist?.length} color="primary">
          <IconButton>
            <FavoriteBorder sx={ICON_COLOR} className="icon" fontSize="small" />
          </IconButton>
        </Badge>
      </Link>
    );
}

