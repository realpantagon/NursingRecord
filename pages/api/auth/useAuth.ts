import React, { useState } from "react";
import axios from "axios";
import { User } from "@/interface/user.interface";
import { Unprotected_api } from "../api.route";
import { useRouter } from "next/router";
import axiosCustom from "@/utils/auth/axioCustom";
function useAuth() {
	const [error, setError] = useState(true);

	const route = useRouter();
	async function signIn(username: string, password: string) {
		try {
			const response = await axiosCustom.post(Unprotected_api.signIn, {
				password,
				username,
			});
			// Check response status and handle accordingly
			if (response.status === 200) {
				console.log("Login success");

				localStorage.setItem("accessToken", response.data.data.access_token);
				localStorage.setItem("refreshToken", response.data.data.access_token);
				setError(false);
				route.push("/test");
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
			localStorage.removeItem("accessToken");
			localStorage.removeItem("refreshToken");
			console.log("Sign out success");
			setError(false); // Reset error state
			route.push("/");
		} catch (err) {
			setError(true);
			console.log("signOut error", err);
		}
	}

	return { signIn, signOut, error };
}

export default useAuth;
