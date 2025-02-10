"use client";

import CategoryForm from "./createCategoryForm";
import PageWrapper from "@/comp/pageWrapper";
import useCurrentRole from "@/comp/AdminLayout/useCurrentRole";

export default function CreateCategoryPageView() {
  const { role } = useCurrentRole();
  if (role !== "admin") return null;

  return (
    <div style={{ marginLeft: 16, marginRight: 16 }}>
      <PageWrapper title="Create Category">
        <CategoryForm />
      </PageWrapper>
    </div>
  );
}
