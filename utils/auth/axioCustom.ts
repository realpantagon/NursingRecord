"use client";
import { PROTECTED_API } from "@/pages/api/api.route";
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
	const accessToken = safelyParseJSON(localStorage.getItem("accessToken"));

	if (accessToken) {
		config.headers.Authorization = `Bearer ${accessToken}`;
	}
	return config;
});

axiosCustom.interceptors.response.use(
	(response) => response,
	async (error) => {
		const originalRequest = error.config as AxiosRequestConfig & {
			_retry?: boolean;
		};

		if (error.response.status === 401 && !originalRequest._retry) {
			originalRequest._retry = true;
			const refreshToken = safelyParseJSON(
				localStorage.getItem("refreshToken")
			);

			if (refreshToken) {
				try {
					const { data } = await axios.post<{
						accessToken: string;
					}>(PROTECTED_API.REFRESH_TOKEN, undefined, {
						headers: {
							"Content-Type": "application/json",
							Authorization: "Bearer " + refreshToken,
						},
					});

					localStorage.setItem("accessToken", JSON.stringify(data.accessToken));

					// try to execute the request again
					return axiosCustom(originalRequest);
				} catch (error) {
					/** remove refresh token */

					localStorage.removeItem("refreshToken");
					localStorage.removeItem("accessToken");
				}
			}
		}
		return Promise.reject(error);
	}
);

function safelyParseJSON(json: string | null) {
	let parsed;
	if (!json) return null;

	try {
		parsed = JSON.parse(json);
	} catch (e) {}

	return parsed; // Could be undefined!
}

export default axiosCustom;
