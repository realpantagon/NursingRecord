import axiosCustom from "@/utils/auth/axioCustom";
import { useMutation, useQuery } from "@tanstack/react-query";
import { PROTECTED_API } from "../api.route";
import { FieldCategory, UpsertFieldCategory } from "./type";



export const useQueryGetFieldCategories = () => {
	const query = useQuery({
		queryKey: ["getFieldCategories"],
		queryFn: () =>
			axiosCustom
				.get<FieldCategory>(PROTECTED_API.GET_FIELD_CATEGORIES)
				.then((response) => response.data),
	});

	return query;
};

export const useMutationUpsertFieldCategory = (body: UpsertFieldCategory) => {
	const mutation = useMutation<UpsertFieldCategory>({
		mutationKey:["upsertFieldCategory"],
		mutationFn:()=>
			axiosCustom.put(PROTECTED_API.UPSERT_FIELD_CATEGORY,body).then((response)=>response.data)
	})

	return mutation
}
