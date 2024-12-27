"use client";

import { useEffect, useState } from "react";
import Button from "@mui/material/Button";
import ProductCard from "@/comp/card/product-card-8/index";
import { getWishlist, clearWishlist } from "@/services/authApi";
import useCart from "@/hooks/useCart";
import NoWishlist from "@/images/no-wishlist.png";
import Empty from "@/comp/Empty";

const WishlistPage = () => {
  const { state, dispatch } = useCart();

  useEffect(() => {
    getWishlist().then((res) => {
      dispatch({ type: "ASSIGN_WISHLIST", payload: res?.wishlist });
    });
  }, []);

  const handleClearWishlist = async () => {
    await clearWishlist().then((res) =>
      dispatch({ type: "ASSIGN_WISHLIST", payload: [] })
    );
  };

  if (!state.wishlist?.length) return <Empty img={NoWishlist} msg="" />;

  return (
    <>
      <Button
        fullWidth
        color="primary"
        variant="outlined"
        sx={{
          mb: "0.75rem",
          height: 30,
          float: "right",
          width: 180,
          right: 200,
        }}
        onClick={handleClearWishlist}
      >
        Clear Wishlist
      </Button>
      <div
        className="m-4"
        style={{ display: "flex", flexWrap: "wrap", justifyContent: "left" }}
      >
        {state.wishlist?.length > 0 &&
          state.wishlist.map((val) => (
            <ProductCard key={val._id} product={val} />
          ))}
      </div>
    </>
  );
};
export default WishlistPage;
