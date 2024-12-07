import type { Metadata } from "next";
import { LoginPageView } from "@/comp/sessions/page-view";

export const metadata: Metadata = {
  title: "Login - Nest and Nook Interior",
  description: `Nest and Nook Interior is a React Next.js E-commerce weblsite. Build SEO friendly Online store, delivery app and Multi vendor store`,
  authors: [{ name: "UI-LIB", url: "https://ui-lib.com" }],
  keywords: ["e-commerce", "e-commerce template", "next.js", "react"],
};

export default function Login() {
  return <LoginPageView />;
}
