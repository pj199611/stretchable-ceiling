import { PropsWithChildren } from "react";
import AuthLayout from "@/comp/sessions/layout";

export default function Layout({ children }: PropsWithChildren) {
  return <AuthLayout>{children}</AuthLayout>;
}
