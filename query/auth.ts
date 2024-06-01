import { useMutation, useQuery } from "@tanstack/react-query";
import { toastRef } from "@/app/components/toast/Toast";
import { PROTECTED_API, UNPROTECTED_API } from "./api.route";
import { Login } from "@/types/auth";
import axiosCustom from "@/utils/axioCustom";
import { createToast } from "@/utils/toast";

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
	const showSuccess = () => createToast("success", "Success", "เข้าสู้ระบบสำเร็จ");
	const showError = () => createToast("error", "Error", "เกิดข้อผิดพลาดในการเข้าสู่ระบบ");
	
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
	const showSuccess = () => createToast("success", "Success", "ออกจากระบบสำเร็จ");
	const showError = () => createToast("error", "Error", "เกิดข้อผิดพลาดในการออกจากระบบ");

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
