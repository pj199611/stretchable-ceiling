import { cache } from "react";
import axios from "@/utils/publicAxiosInstance";
// CUSTOM DATA MODEL
// import { IdParams } from "models/Common";
// import Address from "models/Address.model";

// http://localhost:8000/api/users/categories
export const getCategoryList = cache(async () => {
  const response = await axios.get("/users/categories");
  console.log(response);
  return response;
});

// http://localhost:8000/api/users/subcategories
export const getSubCategoryList = cache(async (categoryId: string) => {
  const response = await axios.get(`/users/subcategories/${categoryId}`);
  console.log(response);
  return response;
});

export const getProductList = cache(async () => {
  const response = await axios.get("/admin/products");
  console.log(response);
  return response;
});

export const getProductDetails = cache(async (productId: string) => {
  const response = await axios.get(`admin/products/${productId}`);
  console.log(response);
  return response;
});
