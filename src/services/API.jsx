import axios from "axios";

const API = axios.create({
  baseURL: "https://ishpay-backend-098e4fc9cb44.herokuapp.com",
});

API.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("jwtToken");
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export default API;
