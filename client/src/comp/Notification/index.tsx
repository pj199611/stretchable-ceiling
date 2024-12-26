"use client";
// import * as React from "react";
// import Button from "@mui/material/Button";
// import { SnackbarProvider, VariantType, useSnackbar } from "notistack";

// // function Notification() {}

// const Notification = ({
//   variant,
//   msg,
// }: {
//   variant: VariantType;
//   msg: string;
// }) => {
//   const { enqueueSnackbar } = useSnackbar();

//   const handleClickVariant = () => () => {
//     // variant could be success, error, warning, info, or default
//     enqueueSnackbar("This is a success message!", { variant });
//   };

//   return (
//     <SnackbarProvider maxSnack={3}>
//       {/* <React.Fragment> */}
//       <Button onClick={handleClickVariant}>ADFS {msg}</Button>
//       {/* </React.Fragment> */}
//     </SnackbarProvider>
//   );
// };

// export default Notification;

import { useEffect } from "react";
import Button from "@mui/material/Button";
import { SnackbarProvider, VariantType, useSnackbar } from "notistack";

function MyApp() {
  const { enqueueSnackbar } = useSnackbar();
  //   useEffect(() => {
  //     handleClickVariant("success");
  //   }, []);

  const handleClickVariant = (variant: VariantType) => () => {
    // variant could be success, error, warning, info, or default
    enqueueSnackbar("This is a success message!", { variant: "success" });
  };
  enqueueSnackbar("This is a ddfsdfsd message!", { variant: "success" });

  return (
    <>
      <Button onClick={handleClickVariant("success")}>
        Show success snackbar
      </Button>
    </>
  );
}

export default function IntegrationNotistack() {
  return (
    <SnackbarProvider maxSnack={3}>
      <MyApp />
    </SnackbarProvider>
  );
}
