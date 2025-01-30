"use client";

import * as React from "react";
import Button from "@mui/material/Button";
import { SnackbarProvider, VariantType, useSnackbar } from "notistack";

function MyApp() {
  const { enqueueSnackbar } = useSnackbar();

  const handleClickVariant = (variant: VariantType) => () => {
    // variant could be success, error, warning, info, or default
    enqueueSnackbar("This is a success message!", { variant });
  };

  return (
    <React.Fragment>
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <Button onClick={handleClickVariant("error")}>
        Show success snackbar
      </Button>
    </React.Fragment>
  );
}

export default function IntegrationNotistack() {
  return (
    <>
      <SnackbarProvider
        maxSnack={3}
        autoHideDuration={3000}
        anchorOrigin={{ vertical: "top", horizontal: "right" }}
      >
        <MyApp />
      </SnackbarProvider>
    </>
  );
}
