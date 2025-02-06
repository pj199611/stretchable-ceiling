import axios from "@/utils/publicAxiosInstance";
// CUSTOM DATA MODEL
// import { IdParams } from "models/Common";
// import Address from "models/Address.model";

// http://localhost:8000/api/users/categories
export const getCategoryList = async () => {
  const response = await axios.get("/users/categories");
  console.log(response);
  return response;
};

// http://localhost:8000/api/users/subcategories/675ab13f256dd74b073a6690
export const getSubCategoryList = async (categoryId: string) => {
  const response = await axios.get(`/users/subcategories/${categoryId}`);
  console.log(response);
  return response;
};

// http://localhost:8000/api/users/productClasses
export const getProductClasses = async () => {
  const response = await axios.get("/users/productClasses");
  console.log(response);
  return response;
};

// http://localhost:8000/api/users/products
export const getAllProductList = async () => {
  const response = await axios.get("/users/products");
  console.log(response);
  return response;
};

// http://localhost:8000/api/users/productsOfSubCategory?categoryId=675c3281910beeb25b774775&subCategoryId=675c3281910beeb25b77477c&class=sports
export const getClassProductList = async ({
  categoryId = "675c3281910beeb25b774775",
  subCategoryId = "675c3281910beeb25b77477c",
  Class = "sports",
}) => {
  const response = await axios.get(
    `/users/productsOfSubCategory?categoryId=${categoryId}&subCategoryId=${subCategoryId}&class=${Class}`
  );
  console.log(response);
  return response;
};

// http://localhost:8000/api/users/productsOfSubCategoryDetails?categoryId=675c3281910beeb25b774772&subCategoryId=675c3281910beeb25b77477d&productId=675c3281910beeb25b774785
//localhost:8000/api/users/productsOfSubCategoryDetails?categoryId=675c3281910beeb25b774772&subCategoryId=675c3281910beeb25b77477d&productId=675c3281910beeb25b774785
export const getProductDetails = async ({
  categoryId = "675c3281910beeb25b774772",
  subCategoryId = "675c3281910beeb25b77477d",
  productId = "675c3281910beeb25b774785",
}) => {
  const response = await axios.get(
    `/users/productsOfSubCategoryDetails?categoryId=${categoryId}&subCategoryId=${subCategoryId}&productId=${productId}`
  );
  console.log(response);
  return response;
};

// http://localhost:8000/api/users/dropdownData
export const getDropdownData = async () => {
  const response = await axios.get("/users/dropdownData");
  console.log(response);
  return response;
};

// http://localhost:8000/api/users/calculateEstimatedAmount
export const getEstimateCost = async (payload: any) => {
  const response = await axios.post("/users/calculateEstimatedAmount", payload);
  return response;
};

// http://localhost:8000/api/users/location
export const getLocation = async () => {
  const response = await axios.get("/users/location");
  console.log(response);
  return response;
};

// http://localhost:8000/api/users/requestcallback
export const postCallbackRequest = async (payload: {
  name: string;
  phoneNumber: string | number;
  comment: string;
  mail: string;
}) => {
  const response = await axios.post("/users/requestcallback", payload);
  console.log(response);
  return response;
};
