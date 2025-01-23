"use client";
import ShoppingBag from "@mui/icons-material/ShoppingBag";
import Link from "next/link";
import Button from "@mui/material/Button";

import OrderSummery from "../order-summery";
import OrderProgress from "../order-progress";
import OrderedProducts from "../ordered-products";
import PageTitle from "@/comp/PageTitle/Title";

export default function OrderDetailsPageView({ order }) {
  if (!order)
    return (
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: 250,
        }}
      >
        <Link href="/orders">
          <Button variant="contained" color="orange" size="large">
            Go to Orders
          </Button>
        </Link>
      </div>
    );

  return (
    <>
      {/* TITLE HEADER AREA */}
      <PageTitle Icon={ShoppingBag} title="Order Details" />

      {/* ORDER PROGRESS AREA */}
      {/* <OrderProgress /> */}

      {/* ORDERED PRODUCT LIST */}
      <OrderedProducts order={order} />

      {/* SHIPPING AND ORDER SUMMERY */}
      <OrderSummery order={order} />
    </>
  );
}
