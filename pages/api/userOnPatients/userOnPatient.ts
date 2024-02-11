import { useMutation, useQuery } from "@tanstack/react-query";
import axiosCustom from "@/utils/auth/axioCustom";
import { PROTECTED_API } from "../api.route";
import { CreateUserOnPatient, UserOnPatient } from "./type";

export const useQueryUserOnPatient = (userId:string) => {
	const query = useQuery<UserOnPatient[]>({
		queryKey: ["getUserOnPatient"],
		queryFn: () =>
			axiosCustom
				.get<UserOnPatient[]>(PROTECTED_API.GET_RECORDS.replace("user_id" , userId))
				.then((response) => response.data),
	});

	return query;
};

export const useMutationCreateUserOnPatient = (body: CreateUserOnPatient) => {
	const mutation = useMutation<CreateUserOnPatient>({
		mutationKey:["createUserOnPatient"],
		mutationFn:()=>
			axiosCustom.post(PROTECTED_API.UPSERT_RECORD,body).then((response)=>response.data)
	})

	return mutation
}

export const useMutationDeleteUserOnPatient = (userId:string , patientId:string) => {
	const mutation = useMutation<UserOnPatient[]>({
		mutationKey: ["deleteUserOnPatient"],
		mutationFn: () =>
			axiosCustom
				.get<UserOnPatient[]>(PROTECTED_API.DELETE_RECORD.replace("user_id" , userId).replace("patient_id",patientId))
				.then((response) => response.data),
	});

	return mutation;
};