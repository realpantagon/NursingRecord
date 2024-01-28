"use client";
import axios, { AxiosInstance, AxiosRequestConfig } from "axios";
import { useRouter } from "next/router";
const axiosCustom: AxiosInstance = axios.create({
	baseURL: process.env.BACKEND_PROXY_URL,
	headers: {
		"Content-Type": "application/json",
	},
} as AxiosRequestConfig);

// const setTokenHeader = async () => {
// 	const accessToken = await localStorage.getItem("accessToken");
// 	if (accessToken) {
// 		axiosCustom.defaults.headers.common["X-Token"] = accessToken;
// 	} else {
// 		console.warn("Access token is not available.");
// 	}
// };

// // Call the setTokenHeader function to set the X-Token header
// setTokenHeader().catch((error) => {
// 	console.error("Error setting X-Token header:", error);
// });

axiosCustom.interceptors.request.use(async (config) => {
	const accessToken = localStorage.getItem("accessToken");
	const router = useRouter();

	if (accessToken) {
		config.headers.Authorization = `Bearer ${accessToken}`;
	} else {
		console.log("no token");
		router.push("/");
	}
	return config;
});

export default axiosCustom;
