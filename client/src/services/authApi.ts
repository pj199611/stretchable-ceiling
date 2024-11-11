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

// http://localhost:8000/api/admin/products
export const getProducts = async (formData: any) => {
  try {
    const res = await fetch(`${process.env.BASE_URL}/admin/products`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });
    const data = res.json();
    return data;
  } catch (error) {
    console.log("error in forget Password (service) => ", error);
  }
};
