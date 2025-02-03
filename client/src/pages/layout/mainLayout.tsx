"use client";
import dynamic from "next/dynamic";

const ShopLayout1 = dynamic(() => import("@/comp/layout/ShopLayout1"), {
  ssr: false, // Disable SSR for this component
});

export default ShopLayout1;
