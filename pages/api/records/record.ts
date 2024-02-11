import { useMutation, useQuery } from "@tanstack/react-query";
import axiosCustom from "@/utils/auth/axioCustom";
import { PROTECTED_API } from "../api.route";
import { Record, UpsertRecord } from "./type";

export const useQueryRecords = (id:string) => {
	const query = useQuery<Record[]>({
		queryKey: ["getRecord"],
		queryFn: () =>
			axiosCustom
				.get<Record[]>(PROTECTED_API.GET_RECORDS.replace("id" , id))
				.then((response) => response.data),
	});

	return query;
};
export const useQueryRecordsByPatientId = (patientId:string) => {
	const query = useQuery<Record[]>({
		queryKey: ["getRecordByPatient"],
		queryFn: () =>
			axiosCustom
				.get<Record[]>(PROTECTED_API.GET_RECORDS_BY_PATIENT.replace("patient_id" , patientId))
				.then((response) => response.data),
	});

	return query;
};
export const useMutationUpsertRecord = (body: UpsertRecord) => {
	const mutation = useMutation<UpsertRecord>({
		mutationKey:["upsertRecord"],
		mutationFn:()=>
			axiosCustom.put(PROTECTED_API.UPSERT_RECORD,body).then((response)=>response.data)
	})

	return mutation
}

export const useMutationDeleteRecord = (id:string) => {
	const mutation = useMutation<Record[]>({
		mutationKey: ["deleteRecord"],
		mutationFn: () =>
			axiosCustom
				.get<Record[]>(PROTECTED_API.DELETE_RECORD.replace("id" , id))
				.then((response) => response.data),
	});

	return mutation;
};