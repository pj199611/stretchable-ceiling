import Image from "next/image";
import Link from "next/link";
import { NextUIProvider } from "@nextui-org/react";
import { CssBaseline } from "@mui/material";
import Breadcrumbs from "@/comp/Breadcrumb/Breadcrumb";
import Header from "@/comp/Navbar/App";
export default function Home() {
  const SignOut = () => {
    localStorage.removeItem("access_token");
  };

  return (
    <>
      <NextUIProvider>
        <CssBaseline />
        <Breadcrumbs />
      </NextUIProvider>
    </>
  );
}
