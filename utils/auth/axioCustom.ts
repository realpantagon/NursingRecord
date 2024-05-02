"use client";
import axios, { AxiosInstance, AxiosRequestConfig } from "axios";

const axiosCustom: AxiosInstance = axios.create({
  baseURL: "http://localhost:3000/api",
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
      // window.location.href = "/";
    }
    return Promise.reject(err);
  }
);

export default axiosCustom;
