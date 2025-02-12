import { Metadata } from "next";
import UserListPage from "@/comp/Admin/usersList";

export const metadata: Metadata = {
  title: "User List - Nest and Nook",
  keywords: ["e-commerce", "user list"],
};

export default function ProductCreate() {
  return <UserListPage />;
}
