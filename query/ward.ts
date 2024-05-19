import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import axiosCustom from "@/utils/axioCustom";
import { PROTECTED_API } from "./api.route";
import { UpsertWard } from "@/types/ward";
import { toastRef } from "@/app/components/toast/Toast";
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

// export const useMutationUpsertWard = (body: UpsertWard) => {
// 	const queryClient = useQueryClient();
// 	const mutation = useMutation({
// 		mutationKey: ["upsertWard"],
// 		mutationFn: () =>
// 			axiosCustom
// 				.put(PROTECTED_API.UPSERT_WARD, body)
// 				.then((response) => response.data.data),
// 		onSuccess: async () =>
// 			await queryClient.invalidateQueries({ queryKey: ["wards"] }),
// 	});

// 	return mutation;
// };

export const useMutationUpsertWard = () => {
	const queryClient = useQueryClient();
	const showSuccess = () => {
		toastRef.current?.show({
			severity: "success",
			summary: "Success",
			detail: "เพิ่มกลุ่มโรคสำเร็จแล้ว",
			life: 3000,
		});
	};

	const showError = () => {
		toastRef.current?.show({
			severity: "error",
			summary: "Error",
			detail: "เกิดข้อผิดพลาดในการสร้างกลุ่มโรค",
			life: 3000,
		});
	};
	const mutation = useMutation({
		mutationKey: ["upsertWard"],
		mutationFn: async (body: UpsertWard) => {
			const response = await axiosCustom.put(PROTECTED_API.UPSERT_WARD, body);
			return response.data;
		},
		onSuccess: () => {
			showSuccess();
		},
		onError: () => showError(),
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
