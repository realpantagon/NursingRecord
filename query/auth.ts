import { useMutation, useQuery } from "@tanstack/react-query";
import { toastRef } from "@/app/components/toast/Toast";
import { PROTECTED_API, UNPROTECTED_API } from "./api.route";
import { Login } from "@/types/auth";
import axiosCustom from "@/utils/axioCustom";

export const useQueryCheckAuth = () => {
	const query = useQuery({
		queryKey: ["checkAuth"],
		queryFn: () =>
			axiosCustom
				.get(PROTECTED_API.CHECK_AUTH)
				.then((response) => response.data.data),
	});

	return query;
};

export const useMutationLogin = () => {
	const showSuccess = () => {
		toastRef.current?.show({
			severity: "success",
			summary: "Success",
			detail: "Login Successful",
			life: 3000,
		});
	};

	const showError = () => {
		toastRef.current?.show({
			severity: "error",
			summary: "Error",
			detail: "Login Fail",
			life: 3000,
		});
	};

	const mutation = useMutation({
		mutationFn: async (body: Login) => {
			const response = await axiosCustom.post(UNPROTECTED_API.LOGIN, body);
			return response.data;
		},
		onSuccess: () => {
			showSuccess();
		},
		onError: () => showError(),
	});

	return mutation;
};

export const useMutationLogout = () => {
	const showSuccess = () => {
		toastRef.current?.show({
			severity: "success",
			summary: "Success",
			detail: "Logout Successful",
			life: 3000,
		});
	};

	const showError = () => {
		toastRef.current?.show({
			severity: "error",
			summary: "Error",
			detail: "Logout Fail",
			life: 3000,
		});
	};

	const mutation = useMutation({
		mutationFn: async () => {
			const response = await axiosCustom.post(UNPROTECTED_API.LOGOUT);
			return response.data;
		},
		onSuccess: () => {
			showSuccess();
		},
		onError: () => showError(),
	});

	return mutation;
};
