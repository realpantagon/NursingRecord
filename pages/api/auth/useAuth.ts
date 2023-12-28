import React, { useState } from "react";
import axios from "axios";
import { User } from "@/interface/user.interface";
import { Unprotected_api } from "../api.route";
function useAuth() {
	const [error, setError] = useState(true);

	async function signIn(username: string, password: string) {
		try {
			const response = await axios.post(Unprotected_api.signIn, {
				password,
				username,
			});
			// Check response status and handle accordingly
			if (response.status === 200) {
				console.log("Login success");

				localStorage.setItem("accessToken", response.data.data.access_token);
				localStorage.setItem("refreshToken", response.data.data.access_token);
				setError(false);
			} else {
				setError(true);
				console.log("Authentication failed");
			}
		} catch (err) {
			console.log("signIn error", err);
		}
	}
	return { signIn, error };
}

export default useAuth;
