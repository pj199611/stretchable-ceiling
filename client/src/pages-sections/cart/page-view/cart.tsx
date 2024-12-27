"use client";

import Grid from "@mui/material/Grid";
import { useRouter } from "next/navigation";
import useCart from "@/hooks/useCart";
import CartItem from "../cart-item";
import CheckoutForm from "../checkout-form";
import Empty from "@/comp/Empty";

export default function CartPageView() {
  const router = useRouter();
  if (!localStorage.getItem("access_token")) {
    router.push("/login");
    return;
  }
  const { state } = useCart();

  if (!state.cart?.length) return <Empty />;
  return (
    <Grid container spacing={3}>
      {/* CART PRODUCT LIST */}
      <Grid item md={8} xs={12}>
        {state.cart?.map(({ name, id, price, qty, imgUrl, length, width }) => (
          <CartItem
            id={id}
            key={`${id}-${length}-${width}`}
            qty={qty}
            name={name}
            price={price}
            imgUrl={imgUrl}
            length={length}
            width={width}
          />
        ))}
      </Grid>

      {/* CHECKOUT FORM */}
      <Grid item md={4} xs={12}>
        <CheckoutForm />
      </Grid>
    </Grid>
  );
}
