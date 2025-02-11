"use client";

import UserListPage from "./userList";
import AdminLayout from "@/comp/AdminLayout";

export default function CallbackRequestPage() {
  return (
    <AdminLayout>
      <UserListPage />
    </AdminLayout>
  );
}
