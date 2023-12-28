import axios from "axios";
import { useRouter } from "next/router";
const axiosCustom = axios.create({
	baseURL: process.env.BACKEND_PROXY_URL,
	timeout: 5000,
	headers: {
		"Content-Type": "application/json",
		// Add any additional headers you need
	},
});

axiosCustom.interceptors.request.use(
	(config) => {
		const token = localStorage.getItem("accessToken"); // Get the access token from local storage
		if (token) {
			config.headers["Authorization"] = `Bearer ${token}`;
		}
		return config;
	},
	(error) => {
		return Promise.reject(error);
	}
);

axiosCustom.interceptors.response.use(
	(response) => {
		return response;
	},
	async (error) => {
		const originalRequest = error.config;

		// Handle token expiration or unauthorized access
		if (error.response.status === 401) {
			const refreshToken = localStorage.getItem("refreshToken"); // Get the refresh token from local storage
			if (refreshToken) {
				// Call your API to refresh the access token using the refresh token
				const response = await axiosCustom.post("/refresh-token", {
					refreshToken,
				});
				if (response.data.accessToken) {
					localStorage.setItem("accessToken", response.data.accessToken); // Update the access token
					originalRequest.headers[
						"Authorization"
					] = `Bearer ${response.data.accessToken}`;
					return axiosCustom(originalRequest); // Retry the original request
				} else {
					// If refresh fails, redirect to login page
					const router = useRouter();
					router.push("/");
					return Promise.reject(error);
				}
			} else {
				// If no refresh token, redirect to login page
				const router = useRouter();
				router.push("/");
				return Promise.reject(error);
			}
		}
		return Promise.reject(error);
	}
);
export default axiosCustom;
