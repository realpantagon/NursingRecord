import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import axiosCustom from "@/utils/auth/axioCustom";
import { PROTECTED_API } from "../api.route";
import { Record, UpsertRecord } from "./type";

export const useQueryRecord = (id: string) => {
  const query = useQuery({
    queryKey: ["record"],
    queryFn: () =>
      axiosCustom
        .get<Record>(PROTECTED_API.GET_RECORDS.replace("id", id))
        .then((response) => response.data.data),
  });

  return query;
};
export const useQueryRecordsByPatientId = (patientId: string) => {
  const query = useQuery({
    queryKey: ["records"],
    queryFn: () =>
      axiosCustom
        .get<Record[]>(
          PROTECTED_API.GET_RECORDS_BY_PATIENT.replace("patient_id", patientId)
        )
        .then((response) => response.data.data),
  });

  return query;
};

export const useMutationUpsertRecord = (body: UpsertRecord) => {
  const queryClient = useQueryClient();
  const mutation = useMutation({
    mutationFn: () =>
      axiosCustom
        .put(PROTECTED_API.UPSERT_RECORD, body)
        .then((response) => response.data.data),
    onSuccess: async () =>
      await queryClient.invalidateQueries({ queryKey: ["record"] }),
  });

  return mutation;
};

export const useMutationDeleteRecord = (id: string) => {
  const queryClient = useQueryClient();
  const mutation = useMutation({
    mutationFn: () =>
      axiosCustom
        .delete(PROTECTED_API.DELETE_RECORD.replace("id", id))
        .then((response) => response.data.data),
    onSuccess: async () =>
      await queryClient.invalidateQueries({ queryKey: ["record"] }),
  });

  return mutation;
};
