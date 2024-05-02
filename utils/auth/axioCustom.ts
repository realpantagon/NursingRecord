"use client";
import axios, { AxiosInstance, AxiosRequestConfig } from "axios";
import { useRouter } from "next/navigation";

const baseURL = process.env.BACKEND_PROXY_URL;
const axiosCustom: AxiosInstance = axios.create({
  baseURL: baseURL,
  headers: {
    "Content-Type": "application/json",
  },
  withCredentials: true,
} as AxiosRequestConfig);

axiosCustom.interceptors.response.use(
  (res) => res,
  async (err) => {
    const router = useRouter();
    const status = err?.response?.status || null;
    if (status === 401) {
      router.push("/");
    }
    return Promise.reject(err);
  }
);

export default axiosCustom;
