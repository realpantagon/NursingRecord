"use client";
import axios, { AxiosInstance, AxiosRequestConfig } from "axios";
import { useEffect } from "react";
const baseAPI = process.env.BACKEND_PROXY_URL;
const axiosCustom: AxiosInstance = axios.create({
	baseURL: baseAPI,
	headers: {
		"Content-Type": "application/json",
	},
	withCredentials: true,
} as AxiosRequestConfig);

axiosCustom.interceptors.request.use(async (config) => {
	return config;
});

export default axiosCustom;
