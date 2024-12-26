import AxiosInstance from "@/utils/axiosInstance";

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
export const delWishlist = async (payload) => {
  const response = await AxiosInstance.delete(
    "/users/wishlist/remove",
    payload
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
export const addToCart = async () => {
  const response = await AxiosInstance.post("/users/cart/add");
  return response;
};

// http://localhost:8000/api/users/cart/remove
export const delCart = async () => {
  const response = await AxiosInstance.delete("/users/cart/remove");
  return response;
};

// http://localhost:8000/api/users/cart/clear
export const clearCart = async () => {
  const response = await AxiosInstance.delete("/users/cart/remove");
  return response;
};
