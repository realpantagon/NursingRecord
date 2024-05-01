import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import axiosCustom from "@/utils/auth/axioCustom";
import { PROTECTED_API } from "../api.route";
import { UpsertWard } from "./type";

export const useQueryWards = () => {
  const query = useQuery({
    queryKey: ["wards"],
    queryFn: () =>
      axiosCustom
        .get(PROTECTED_API.GET_WARDS)
        .then((response) => response.data.data),
  });

  return query;
};

export const useMutationUpsertWard = (body: UpsertWard) => {
  const queryClient = useQueryClient();
  const mutation = useMutation({
    mutationKey: ["upsertWard"],
    mutationFn: () =>
      axiosCustom
        .put(PROTECTED_API.UPSERT_WARD, body)
        .then((response) => response.data.data),
    onSuccess: async () =>
      await queryClient.invalidateQueries({ queryKey: ["wards"] }),
  });

  return mutation;
};

export const useMutationDeleteWard = (id: string) => {
  const queryClient = useQueryClient();
  const mutation = useMutation({
    mutationKey: ["deleteWard"],
    mutationFn: () =>
      axiosCustom
        .get(PROTECTED_API.DELETE_WARD.replace("id", id))
        .then((response) => response.data.data),
    onSuccess: async () =>
      await queryClient.invalidateQueries({ queryKey: ["wards"] }),
  });

  return mutation;
};
