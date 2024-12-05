import axios from "axios";

// Axios Interceptor Instance
const AxiosInstance = axios.create({
  baseURL: process.env.BASE_URL,
  headers: {
    "Content-Type": "application/json",
    // Authorization: `Bearer ${localStorage.getItem("access_token")}`,
  },
  timeout: 20000, // request timeout
});

AxiosInstance.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("token");
    const accessToken = JSON.parse(token);

    config.headers = {
      ...config.headers,
      "Content-Type": "application/json",
    };

    // If token is present, add it to request's Authorization Header
    if (accessToken) {
      // if (config.headers) config.headers.token = accessToken;
      config.headers["Authorization"] = "bearer " + accessToken;
    }

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
