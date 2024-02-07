import axiosInstance from "@/config/axios";

export const registerApi = async (payload) => {
  return await axiosInstance({
    method: "POST",
    url: "/register",
    data: payload,
  });
};
export const loginApi = async (payload) => {
  return await axiosInstance({
    method: "POST",
    url: "/signin",
    data: payload,
  });
};
