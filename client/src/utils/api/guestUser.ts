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

// http://localhost:8000/api/users/subcategories/675ab13f256dd74b073a6690
export const getSubCategoryList = cache(async (categoryId: string) => {
  const response = await axios.get(`/users/subcategories/${categoryId}`);
  console.log(response);
  return response;
});

// http://localhost:8000/api/users/productClasses
export const getProductClasses = cache(async () => {
  const response = await axios.get("/users/productClasses");
  console.log(response);
  return response;
});

// http://localhost:8000/api/users/products
export const getAllProductList = cache(async () => {
  const response = await axios.get("/users/products");
  console.log(response);
  return response;
});

// http://localhost:8000/api/users/productsOfSubCategory?categoryId=675c3281910beeb25b774775&subCategoryId=675c3281910beeb25b77477c&class=sports
export const getClassProductList = cache(
  async ({
    categoryId = "675c3281910beeb25b774775",
    subCategoryId = "675c3281910beeb25b77477c",
    Class = "sports",
  }) => {
    const response = await axios.get(
      `/users/productsOfSubCategory?categoryId=${categoryId}&subCategoryId=${subCategoryId}&class=${Class}`
    );
    console.log(response);
    return response;
  }
);

// http://localhost:8000/api/users/productsOfSubCategoryDetails?categoryId=675c3281910beeb25b774772&subCategoryId=675c3281910beeb25b77477d&productId=675c3281910beeb25b774785
//localhost:8000/api/users/productsOfSubCategoryDetails?categoryId=675c3281910beeb25b774772&subCategoryId=675c3281910beeb25b77477d&productId=675c3281910beeb25b774785
export const getProductDetails = cache(
  async ({
    categoryId = "675c3281910beeb25b774772",
    subCategoryId = "675c3281910beeb25b77477d",
    productId = "675c3281910beeb25b774785",
  }) => {
    const response = await axios.get(
      `/users/productsOfSubCategoryDetails?categoryId=${categoryId}&subCategoryId=${subCategoryId}&productId=${productId}`
    );
    console.log(response);
    return response;
  }
);

// http://localhost:8000/api/users/dropdownData
export const getDropdownData = cache(async () => {
  const response = await axios.get("/users/dropdownData");
  console.log(response);
  return response;
});
