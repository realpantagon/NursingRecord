import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import axiosCustom from "@/utils/axioCustom";
import { PROTECTED_API } from "./api.route";
import { UpsertRecord } from "@/types/focusChart";

export const useQueryRecord = (id: number) => {
  const query = useQuery({
    queryKey: ["record"],
    queryFn: () =>
      axiosCustom
        .get(PROTECTED_API.GET_RECORDS.replace("id", id.toString()))
        .then((response) => response.data.data),
  });

  return query;
};

export const useQueryRecordsByPatientId = (patientId: string) => {
  const query = useQuery({
    queryKey: ["records"],
    queryFn: () =>
      axiosCustom
        .get(
          PROTECTED_API.GET_RECORDS_BY_PATIENT.replace(
            "{patient_id}",
            patientId
          )
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

export const useMutationDeleteRecord = (id: number) => {
  const queryClient = useQueryClient();
  const mutation = useMutation({
    mutationFn: () =>
      axiosCustom
        .delete(PROTECTED_API.DELETE_RECORD.replace("id", id.toString()))
        .then((response) => response.data.data),
    onSuccess: async () =>
      await queryClient.invalidateQueries({ queryKey: ["record"] }),
  });

  return mutation;
};
