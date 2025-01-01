import { Metadata } from "next";
import { ProfilePageView } from "@/pages-sections/customer-dashboard/profile/page-view";
// API FUNCTIONS
import api from "@/utils/__api__/users";

export const metadata: Metadata = {
  title: "Profile - Nest n Nook",
  description: `Nest and Nook Interior Is a place to create creative and express ideas at our places.`,
  authors: [{ name: "UI-LIB", url: "https://ui-lib.com" }],
  keywords: ["e-commerce", "e-commerce template", "next.js", "react"],
};

export default async function Profile() {
  // const user = await api.getUser();
  // return <ProfilePageView user={user} />;
}
