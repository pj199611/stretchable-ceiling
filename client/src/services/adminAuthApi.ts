import AxiosInstance from "@/utils/axiosInstance";
import axios from "axios";

// http://localhost:8000/api/admin/categories
export const getCategoryList = async (noStore = false) => {
  const headers = noStore ? { "Cache-Control": "no-store" } : {};
  const response = await AxiosInstance.get("/admin/categories", { headers });
  return response;
};

// http://localhost:8000/api/admin/subcategories
export const getSubCategoryList = async (categoryId: string = "") => {
  const response = await AxiosInstance.get(
    `/admin/subcategories/${categoryId}`
  );
  return response;
};

// http://localhost:8000/api/admin/categories
export const addCategory = async (payload) => {
  const response = await AxiosInstance.post("/admin/categories", payload);
  return response;
};
// http://localhost:8000/api/admin/subcategories
export const addSubCategory = async (payload) => {
  const response = await AxiosInstance.post("/admin/subcategories", payload);
  return response;
};

// http://localhost:8000/api/admin/products
export const addProduct = async (formData: any) => {
  const accessToken = localStorage.getItem("access_token");
  const response = await axios
    .post(process.env.BASE_URL + "/admin/products", formData, {
      headers: {
        "Content-Type": "multipart/form-data",
        Authorization: `Bearer ${accessToken}`,
      },
    })
    .then((res) => {
      return res.data;
    })
    .catch((err) => {
      if (err?.response?.data?.error) return Promise.reject(err);
    });
  return response;
};
