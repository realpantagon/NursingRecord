import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import axiosCustom from "@/utils/axioCustom";
import { PROTECTED_API } from "./api.route";
import { UpsertNote } from "@/types/note";

export const useQueryNote = (id: number) => {
  const query = useQuery({
    queryKey: ["note"],
    queryFn: () =>
      axiosCustom
        .get(PROTECTED_API.GET_NOTES.replace("id", id.toString()))
        .then((response) => response.data.data),
  });

  return query;
};

export const useQueryNotesByPatientId = (patientId: string) => {
  const query = useQuery({
    queryKey: ["notes"],
    queryFn: () =>
      axiosCustom
        .get(
          PROTECTED_API.GET_NOTES_BY_PATIENT.replace("{patient_id}", patientId)
        )
        .then((response) => response.data.data),
  });

  return query;
};

export const useMutationCreateNote = () => {
  const queryClient = useQueryClient();
  const mutation = useMutation({
    mutationFn: (body: UpsertNote) =>
      axiosCustom
        .put(PROTECTED_API.CREATE_NOTE, body)
        .then((response) => response.data.data),
    onSuccess: async () =>
      await queryClient.invalidateQueries({ queryKey: ["notes"] }),
  });

  return mutation;
};

export const useMutationUpdateNote = () => {
  const queryClient = useQueryClient();
  const mutation = useMutation({
    mutationFn: (body: UpsertNote) =>
      axiosCustom
        .put(PROTECTED_API.UPDATE_NOTE, body)
        .then((response) => response.data.data),
    onSuccess: async () =>
      await queryClient.invalidateQueries({ queryKey: ["note"] }),
  });

  return mutation;
};

export const useMutationDeleteNote = (id: number) => {
  const queryClient = useQueryClient();
  const mutation = useMutation({
    mutationFn: () =>
      axiosCustom
        .delete(PROTECTED_API.DELETE_NOTE.replace("id", id.toString()))
        .then((response) => response.data.data),
    onSuccess: async () =>
      await queryClient.invalidateQueries({ queryKey: ["notes"] }),
  });

  return mutation;
};
