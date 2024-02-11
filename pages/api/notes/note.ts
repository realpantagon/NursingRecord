import { useMutation, useQuery } from "@tanstack/react-query";
import axiosCustom from "@/utils/auth/axioCustom";
import { PROTECTED_API } from "../api.route";
import { Note, UpsertNote } from "./type";

export const useQueryNotes = (id:string) => {
	const query = useQuery<Note[]>({
		queryKey: ["getNote"],
		queryFn: () =>
			axiosCustom
				.get<Note[]>(PROTECTED_API.GET_NOTES.replace("id" , id))
				.then((response) => response.data),
	});

	return query;
};
export const useQueryNotesByPatientId = (patientId:string) => {
	const query = useQuery<Note[]>({
		queryKey: ["getNoteByPatient"],
		queryFn: () =>
			axiosCustom
				.get<Note[]>(PROTECTED_API.GET_NOTES_BY_PATIENT.replace("patient_id" , patientId))
				.then((response) => response.data),
	});

	return query;
};
export const useMutationUpsertNote = (body: UpsertNote) => {
	const mutation = useMutation<UpsertNote>({
		mutationKey:["upsertNote"],
		mutationFn:()=>
			axiosCustom.put(PROTECTED_API.UPSERT_NOTE,body).then((response)=>response.data)
	})

	return mutation
}

export const useMutationDeleteNote = (id:string) => {
	const mutation = useMutation<Note[]>({
		mutationKey: ["deletetNote"],
		mutationFn: () =>
			axiosCustom
				.get<Note[]>(PROTECTED_API.DELETE_NOTE.replace("id" , id))
				.then((response) => response.data),
	});

	return mutation;
};