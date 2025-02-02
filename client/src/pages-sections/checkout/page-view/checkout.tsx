"use client";

import Grid from "@mui/material/Grid";
import { useRouter } from "next/navigation";

// LOCAL CUSTOM COMPONENTS
import { CheckoutForm } from "../checkout-form";
import { CheckoutSummary } from "../checkout-summery";

export default function CheckoutPageView() {
  const router = useRouter();
  if (!localStorage.getItem("access_token")) {
    router.push("/login");
    return;
  }

  return (
    <Grid container flexWrap="wrap-reverse" spacing={3}>
      <Grid item lg={8} md={8} xs={12}>
        <CheckoutForm />
      </Grid>

      <Grid item lg={4} md={4} xs={12}>
        <CheckoutSummary />
      </Grid>
    </Grid>
  );
}
