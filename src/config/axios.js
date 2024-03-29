import axios from "axios";

import toastMes from "./toastify";
import { HEADER } from "@/utils/constants";

const axiosInstance = axios.create({
  // eslint-disable-next-line no-undef
  baseURL: import.meta.env.VITE_BE_URL,
  timeout: 1000 * 5,
  withCredentials: true,
  headers: {
    "Content-type": "application/json",
  },
});

axiosInstance.interceptors.request.use(
  function (config) {
    // Do something before request is sent
    const token = JSON.parse(window.localStorage.getItem("user"))?.state?.token;
    config.headers = {
      Authorization: `Bearer ${token}`,
    };
    return config;
  },
  function (error) {
    // Do something with request error
    return Promise.reject(error);
  }
);

// Add a response interceptor
axiosInstance.interceptors.response.use(
  function (response) {
    // Any status code that lie within the range of 2xx cause this function to trigger
    // Do something with response data
    return response.data;
  },
  function (error) {
    // Any status codes that falls outside the range of 2xx cause this function to trigger
    // Do something with response error
    toastMes("error", error?.response?.data?.message);
    return Promise.reject(error);
  }
);

export default axiosInstance;
