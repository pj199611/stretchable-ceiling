import axios from "axios";

// Axios Interceptor Instance
const AxiosInstance = axios.create({
  baseURL: process.env.BASE_URL,
  headers: {
    "Content-Type": "application/json",
  },
  timeout: 20000, // request timeout
});

AxiosInstance.interceptors.request.use(
  (config) => {
    return config;
  },
  (error) => {
    // Handle request errors here
    return Promise.reject(error);
  }
);

// Axios Interceptor: Response Method
AxiosInstance.interceptors.response.use(
  (response) => {
    // Can be modified response
    console.log("instance", response);
    return response.data;
  },
  (error) => {
    // Handle response errors here
    console.log({ error });
    return error?.response?.data;
  }
);

export default AxiosInstance;
