import AxiosInstance from "@/utils/axiosInstance";

//localhost:8000/api/users/categories

export const getCategory = async () => {
  try {
    const res = await fetch(`${process.env.BASE_URL}/users/categories`, {
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

export const gettCategory = async () => {
  const response = await AxiosInstance.get("/users/categories");
  return response;
};

// export const getProducts = async (formData: any) => {
export const getProducts = async () => {
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
