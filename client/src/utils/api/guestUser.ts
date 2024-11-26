import { cache } from "react";
import axios from "@/utils/axiosInstance";
// CUSTOM DATA MODEL
// import { IdParams } from "models/Common";
// import Address from "models/Address.model";

// http://localhost:8000/api/users/categories
export const getCategoryList = cache(async () => {
  const response = await axios.get("/api/users/categories");
  console.log(response);
  return response;
});
