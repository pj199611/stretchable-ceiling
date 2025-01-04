"use client";

import { Fragment, useState, useEffect } from "react";
import ShoppingBag from "@mui/icons-material/ShoppingBag";

import OrderRow from "../order-row";
import Pagination from "../../pagination";
import DashboardHeader from "../../dashboard-header";
import { getOrders } from "@/services/authApi";
import useCart from "@/hooks/useCart";
import Empty from "@/comp/Empty";
import CircularLoader from "@/comp/Loader/CircularLoader";
import NoOrder from "@/images/noOrderFound.jpeg";

export default function OrdersPageView() {
  const { state, dispatch } = useCart();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    getOrders()
      .then((res) => {
        dispatch({ type: "ASSIGN_ORDERS", payload: res?.orders });
      })
      .finally(() => setIsLoading(false));
  }, []);

  if (isLoading) return <CircularLoader />;

  return state?.orders?.length > 0 ? (
    <Fragment>
      {/* TITLE */}
      <DashboardHeader Icon={ShoppingBag} title="My Orders" />

      {/* ORDER LIST */}
      {state?.orders?.map((order) => (
        <OrderRow order={order} key={order._id} />
      ))}

      {/* ORDERS PAGINATION */}
      {/* <Pagination count={5} onChange={(data) => console.log(data)} /> */}
    </Fragment>
  ) : (
    <Empty img={NoOrder} msg="" imgProps={{ width: 400 }} />
  );
}
