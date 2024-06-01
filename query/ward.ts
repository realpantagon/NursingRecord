import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import axiosCustom from "@/utils/axioCustom";
import { PROTECTED_API } from "./api.route";
import { CreateWardBody, UpdateWardBody } from "@/types/ward";
import { createToast } from "@/utils/toast";

export const useQueryWards = () => {
	const query = useQuery({
		queryKey: ["wards"],
		queryFn: async () =>
			await axiosCustom
				.get(PROTECTED_API.GET_WARDS)
				.then((response) => response.data.data),
	});

	return query;
};

export const useMutationCreateWard = () => {
	const queryClient = useQueryClient();
	const showSuccess = () => createToast("success", "Success", "เพิ่มกลุ่มโรคสำเร็จแล้ว");
	const showError = () =>  createToast("error", "Error", "เกิดข้อผิดพลาดในการสร้างกลุ่มโรค");

	const mutation = useMutation({
		mutationKey: ["createWard"],
		mutationFn: (body: CreateWardBody) =>
			axiosCustom
				.post(PROTECTED_API.CREATE_WARD, body)
				.then((response) => response.data.data),
		onSuccess: async () =>{
			showSuccess();
			await queryClient.invalidateQueries({ queryKey: ["wards"] })
		},
		onError: () => showError(),
	});

	return mutation;
};

export const useMutationUpdateWard = () => {
	const queryClient = useQueryClient();
	const showSuccess = () => createToast("success", "Success", "แก้ไขกลุ่มโรคสำเร็จแล้ว");
	const showError = () => createToast("error", "Error", "เกิดข้อผิดพลาดในการแก้ไขกลุ่มโรค");

	const mutation = useMutation({
		mutationKey: ["updateWard"],
		mutationFn: async(body: UpdateWardBody) => {
			return await axiosCustom
				.put(PROTECTED_API.UPDATE_WARD, body)
				.then((response) => response.data.data);
		},
		onSuccess: async () => {
			showSuccess();
			await queryClient.invalidateQueries({ queryKey: ["wards"] });
		},
		onError: () => {
			showError();
		},
	});

	return mutation;
};
export const useMutationDeleteWard = (id: string) => {
	const queryClient = useQueryClient();
	const mutation = useMutation({
		mutationKey: ["deleteWard"],
		mutationFn: () =>
			axiosCustom
				.get(PROTECTED_API.DELETE_WARD.replace("id", id))
				.then((response) => response.data.data),
		onSuccess: async () =>
			await queryClient.invalidateQueries({ queryKey: ["wards"] }),
	});

	return mutation;
};
