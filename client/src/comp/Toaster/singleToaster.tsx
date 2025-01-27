"use client";

import * as React from "react";
import Snackbar, { SnackbarCloseReason } from "@mui/material/Snackbar";
import Alert from "@mui/material/Alert";
import Slide from "@mui/material/Slide";

export default function CustomizedSnackbars({
  openNow = false,
  severity = "success",
  variant = "filled",
  msg = "Custom msg",
}) {
  const [open, setOpen] = React.useState(openNow);

  const handleClick = () => {
    setOpen(true);
  };

  const handleClose = (
    event?: React.SyntheticEvent | Event,
    reason?: SnackbarCloseReason
  ) => {
    if (reason === "clickaway") {
      return;
    }
    setOpen(false);
  };

  return (
    <div style={{ zIndex: 10000 }}>
      {/* <Button onClick={handleClick}>Open Snackbar</Button> */}
      <Snackbar
        anchorOrigin={{ vertical: "top", horizontal: "right" }}
        open={open}
        autoHideDuration={3000}
        onClose={handleClose}
        TransitionComponent={Slide}
      >
        <Alert
          onClose={handleClose}
          severity={severity}
          variant={variant}
          sx={{ width: "100%" }}
        >
          {msg}
        </Alert>
      </Snackbar>
    </div>
  );
}
