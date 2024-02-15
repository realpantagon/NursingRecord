import { useState } from "react";
import { UNPROTECTED_API } from "../api.route";
import axiosCustom from "@/utils/auth/axioCustom";
import { useRouter } from "next/router";
function useAuth() {
	const [error, setError] = useState(true);
	const router = useRouter();
	async function signIn(username: string, password: string) {
		try {
			const response = await axiosCustom.post(UNPROTECTED_API.signIn, {
				password,
				username,
			});
			// Check response status and handle accordingly
			if (response.status === 200) {
				console.log(response);

				// localStorage.setItem("accessToken", response.data.data.access_token);
				// localStorage.setItem("refreshToken", response.data.data.access_token);
				// axiosCustom.defaults.headers.common["X-Token"] =
				// 	response.data.data.access_token;
				setError(false);
				router.push("/home");
			} else {
				setError(true);
				console.log("Authentication failed");
			}
		} catch (err) {
			console.log("signIn error", err);
		}
	}

	async function signOut() {
		try {
			// Perform any cleanup tasks, e.g., invalidate the token on the server-side if required
			// Remove tokens from local storage
			// localStorage.removeItem("accessToken");
			// localStorage.removeItem("refreshToken");
			router.push("/");
			console.log("Sign out success");
			setError(false); // Reset error state
		} catch (err) {
			setError(true);
			console.log("signOut error", err);
		}
	}

	return { signIn, signOut, error };
}

export default useAuth;
