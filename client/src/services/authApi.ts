import AxiosInstance from "@/utils/axiosInstance";
import axios from "axios";

// http://localhost:8000/api/auth/signup
export const register_me = async (formData: any) => {
  console.log(formData);
  try {
    const res = await fetch(`${process.env.BASE_URL}/auth/signup`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    });
    const data = res.json();
    console.log(data);
    return data;
  } catch (error) {
    console.log("error in register (service) => ", error);
  }
};

// http://localhost:8000/api/auth/login
export const login_me = async (formData: any) => {
  try {
    const res = await fetch(`${process.env.BASE_URL}/auth/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    });
    const data = res.json();
    return data;
  } catch (error) {
    console.log("error in login (service) => ", error);
  }
};

export const register_me_axios = async (formData: any) => {
  const response = await AxiosInstance.post("/auth/signup", formData);
  return response;
};

export const login_me_axios = async (formData: any) => {
  const response = await AxiosInstance.post("/auth/login", formData);
  return response;
};

export const forget_password = async (formData: any) => {
  console.log(process.env.BASE_URL);
  try {
    const res = await fetch(`${process.env.BASE_URL}/api/auth/forgetPassword`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    });
    const data = res.json();
    return data;
  } catch (error) {
    console.log("error in forget Password (service) => ", error);
  }
};

// http://localhost:8000/api/users/wishlist
export const getWishlist = async () => {
  const response = await AxiosInstance.get("/users/wishlist");
  return response;
};

// http://localhost:8000/api/users/wishlist/add
export const addToWishlist = async (payload) => {
  const response = await AxiosInstance.post("/users/wishlist/add", payload);
  return response;
};

// http://localhost:8000/api/users/wishlist/remove
export const delWishlist = async ({ productId }) => {
  const response = await AxiosInstance.delete(
    `/users/wishlist/remove?productId=${productId}`
  );
  return response;
};

// http://localhost:8000/api/users/wishlist/clear
export const clearWishlist = async () => {
  const response = await AxiosInstance.delete("/users/wishlist/remove");
  return response;
};

// http://localhost:8000/api/users/cart
export const getCart = async () => {
  const response = await AxiosInstance.get("/users/cart");
  return response;
};

// http://localhost:8000/api/users/cart/add
export const addToCart = async ({
  productId,
  quantity = 1,
  length = 1,
  width = 1,
}: {
  productId: string;
  quantity: number;
  length: number;
  width: number;
}) => {
  const payload = { productId, quantity, length, width };
  const response = await AxiosInstance.post("/users/cart/add", payload);
  return response;
};

// http://localhost:8000/api/users/cart/remove
export const delCart = async ({
  productId,
  length = 1,
  width = 1,
}: {
  productId: string;
  length: number;
  width: number;
}) => {
  const data = { productId, length, width };
  // const response = await AxiosInstance.delete("/users/cart/remove", payload); // NOT WORKING
  const accessToken = localStorage.getItem("access_token");
  const headers = {
    "Content-Type": "application/json",
    Authorization: `Bearer ${accessToken}`,
  };
  const response = await axios
    .delete("http://localhost:8000/api/users/cart/remove", { headers, data })
    .then((res) => console.log(res))
    .catch((err) => console.log(err));
  return response;
};

// http://localhost:8000/api/users/cart/clear
export const clearCart = async () => {
  const response = await AxiosInstance.delete("/users/cart/clear");
  return response;
};

// http://localhost:8000/api/users/user
export const getUser = async () => {
  const response = await AxiosInstance.get("/users/user");
  return response;
};
