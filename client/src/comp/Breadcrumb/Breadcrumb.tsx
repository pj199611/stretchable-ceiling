// "use client";

import { Breadcrumbs, BreadcrumbItem } from "@nextui-org/react";
import HomeIcon from "./HomeIcon";

export default function App() {
  const colors: string[] = [
    "foreground",
    "primary",
    "secondary",
    "success",
    "warning",
    "danger",
  ];
  // color={colors[0]}
  // size={"lg"} underline="hover"
  return (
    <Breadcrumbs>
      <BreadcrumbItem startContent={<HomeIcon />} href="/category">
        Category
      </BreadcrumbItem>

      <BreadcrumbItem startContent={<HomeIcon />} href="/subcategory">
        Sub Category
      </BreadcrumbItem>
      <BreadcrumbItem startContent={<HomeIcon />} href="/product">
        Product
      </BreadcrumbItem>
      <BreadcrumbItem startContent={<HomeIcon />} href="/productid">
        Product Details
      </BreadcrumbItem>
    </Breadcrumbs>
  );
}
