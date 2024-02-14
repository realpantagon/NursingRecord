import axiosCustom from "@/utils/auth/axioCustom";
import { useMutation, useQuery } from "@tanstack/react-query";
import { PROTECTED_API } from "../api.route";
import { FieldChoice, UpsertFieldChoice } from "./type";



export const useQueryGetFieldChoiceByNdx = (ndxId:string) => {
	const query = useQuery({
		queryKey: ["getFieldChoice"],
		queryFn: () =>
			axiosCustom
				.get<FieldChoice>(PROTECTED_API.GET_FIELD_CHOICES_BY_NDX.replace("{ndx_id}", ndxId))
				.then((response) => response.data),
	});

	return query;
};

export const useMutationUpsertFieldChoice = (body: UpsertFieldChoice) => {
	const mutation = useMutation<UpsertFieldChoice>({
		mutationKey:["upsertFieldChoice"],
		mutationFn:()=>
			axiosCustom.put(PROTECTED_API.UPSERT_FIELD_CHOICE,body).then((response)=>response.data)
	})

	return mutation
}

export const useMutationDeleteFieldChoice = (id : string) => {
	const mutation = useMutation({
		mutationKey:["deleteFieldChoice"],
		mutationFn:()=>
			axiosCustom.put(PROTECTED_API.DELETE_FIELD_CHOICE.replace("{id}", id)).then((response)=>response.data)
	})

	return mutation
}
