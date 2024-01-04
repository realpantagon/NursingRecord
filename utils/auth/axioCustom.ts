import axios, { AxiosInstance, AxiosRequestConfig } from "axios";

const axiosCustom: AxiosInstance = axios.create({
	timeout: 2000, // Set your timeout (if needed)
	headers: {
		"My-Custom-Header": "custom-header",
	},
} as AxiosRequestConfig);

axiosCustom.interceptors.request.use(async (config) => {
	const accessToken = localStorage.getItem("accessToken");

	if (accessToken) {
		config.headers.Authorization = `Bearer ${accessToken}`;
	}
	return config;
});

export default axiosCustom;
