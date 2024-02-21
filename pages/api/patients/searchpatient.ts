import { useMutation, useQuery } from "@tanstack/react-query";
import { SearchPatient, Patient, UpsertPatient, PPResponse } from "./type";
import axiosCustom from "@/utils/auth/axioCustom";
import { PROTECTED_API } from "../api.route";

export const useQuerySearchPatients = (body: SearchPatient) => {
	const query = useQuery<Patient[]>({
		queryKey: ["searchPatient"],
		queryFn: () =>
			axiosCustom
				.post(PROTECTED_API.SEARCH_PATIENTS, body)
				.then(({data}) => data.data),
	});
	return query;
};

export const useMutationUpsertPatient = (body: UpsertPatient) => {
	const mutation = useMutation<UpsertPatient>({
		mutationKey:["upsertPatient"],
		mutationFn:()=>
			axiosCustom.put(PROTECTED_API.UPSERT_PATIENT,body).then((response)=>response.data)
	})

	return mutation
}
