import { useState, useEffect } from "react";
import { UNPROTECTED_API, PROTECTED_API } from "../api.route";
import axiosCustom from "@/utils/auth/axioCustom";
import { useRouter } from "next/router";
import { useAuthStore, UserType } from "@/utils/auth/authStore";
import { useLocalStorage } from "usehooks-ts";
import { set } from "zod";

function useAuth() {
	const [accessToken, setAccessToken] = useLocalStorage("accessToken", "");
	const [refreshToken, setRefreshToken] = useLocalStorage("refreshToken", "");
	const [user, setUser, isLoading, setIsLoading] = useAuthStore((state) => [
		state.user,
		state.setUser,
		state.isLoading,
		state.setIsLoading,
	]);

	const bootstrapAsync = async () => {
		setIsLoading(true);
		try {
			const res = await axiosCustom.get(PROTECTED_API.GET_USERS);
			if (res.data) {
				const userData: UserType = res.data.data;
				// console.log("userData", userData);
				setUser({
					username: userData.username,
					role: userData.role,
					first_name: userData.first_name,
					last_name: userData.last_name,
					ID: userData.ID,
				});
			}
		} catch (error) {
		} finally {
			setIsLoading(false);
		}
	};

	useEffect(() => {
		if (!user && refreshToken && accessToken) {
			bootstrapAsync();
		}
	}, []);

	useEffect(() => {
		console.log("user", user);
	}, [user]);

	const [error, setError] = useState(true);
	const router = useRouter();
	async function signIn(
		username: string,
		password: string,
		onSuccess: () => void,
		onError: () => void
	) {
		setIsLoading(true);
		try {
			const response = await axiosCustom.post(UNPROTECTED_API.signIn, {
				password,
				username,
			});

			setAccessToken(response.data.data.access_token);
			setRefreshToken(response.data.data.refresh_token);
			setUser(response.data.user);
			onSuccess();
			setError(false);
			router.push("/home");
		} catch (err) {
			onError();
			console.log("signIn error", err);
		} finally {
			setIsLoading(false);
		}
	}

	async function signOut() {
		setAccessToken("");
		setRefreshToken("");
		setIsLoading(false);
		setUser(null);
		router.push("/");
	}

	return { signIn, signOut, error, isLoading, user };
}

export default useAuth;
