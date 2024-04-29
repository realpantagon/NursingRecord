"use client";
import axios, { AxiosInstance, AxiosRequestConfig } from "axios";

const baseAPI = process.env.BACKEND_PROXY_URL;
const axiosCustom: AxiosInstance = axios.create({
  baseURL: baseAPI,
  headers: {
    "Content-Type": "application/json",
  },
  withCredentials: true,
} as AxiosRequestConfig);

axiosCustom.interceptors.response.use(
  (res) => res,
  async (err) => {
    const status = err?.response?.status || null;
    if (status === 401) {
      window.location.href = "/";
    }
    return Promise.reject(err);
  }
);

export default axiosCustom;
