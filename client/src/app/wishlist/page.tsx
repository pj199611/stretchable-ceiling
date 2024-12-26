"use client";

import { useEffect, useState } from "react";
import ProductCard from "@/comp/card/product-card-8/index";
import { getWishlist } from "@/services/authApi";
import useCart from "@/hooks/useCart";

const WishlistPage = () => {
  const { state, dispatch } = useCart();
  const [data, setData] = useState(state.wishlist);

  useEffect(() => {
    getWishlist()
      .then((res) => {
        setData(res?.wishlist);
        dispatch({ type: "UPDATE_WISHLIST", payload: res?.wishlist });
      })
      .catch((err) => setData([]));
  }, []);

  return (
    <>
      <div
        className="m-4"
        style={{ display: "flex", flexWrap: "wrap", justifyContent: "left" }}
      >
        {data?.length > 0 &&
          data.map((val) => <ProductCard key={val._id} product={val} />)}
      </div>
    </>
  );
};
export default WishlistPage;
