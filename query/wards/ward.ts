import { useMutation, useQuery } from "@tanstack/react-query";
import axiosCustom from "@/utils/auth/axioCustom";
import { PROTECTED_API } from "../api.route";
import { UpsertWard, Ward} from "./type";

export const useQueryWards = () => {
	const query = useQuery<Ward[]>({
		queryKey: ["getWards"],
		queryFn: () =>
			axiosCustom
				.get<Ward[]>(PROTECTED_API.GET_WARDS)
				.then((response) => response.data),
	});

	return query;
};

export const useMutationUpsertWard = (body: UpsertWard) => {
	const mutation = useMutation<UpsertWard>({
		mutationKey:["upsertWard"],
		mutationFn:()=>
			axiosCustom.put(PROTECTED_API.UPSERT_WARD,body).then((response)=>response.data)
	})

	return mutation
}

export const useMutationDeleteWard = (id:string) => {
	const mutation = useMutation<Ward[]>({
		mutationKey: ["deleteWard"],
		mutationFn: () =>
			axiosCustom
				.get<Ward[]>(PROTECTED_API.DELETE_WARD.replace("id" , id))
				.then((response) => response.data),
	});

	return mutation;
};