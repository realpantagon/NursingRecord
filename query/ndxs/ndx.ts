import axiosCustom from "@/utils/auth/axioCustom";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { PROTECTED_API } from "../api.route";
import { Ndx, UpsertNdx } from "./type";

export const useQueryGetNdxs = () => {
  const query = useQuery({
    queryKey: ["ndxs"],
    queryFn: () =>
      axiosCustom
        .get<Ndx[]>(PROTECTED_API.GET_NDXS)
        .then((response) => response.data),
  });

  return query;
};

export const useMutationUpsertNdx = (body: UpsertNdx) => {
  const queryClient = useQueryClient();
  const mutation = useMutation<UpsertNdx>({
    mutationFn: () =>
      axiosCustom
        .put(PROTECTED_API.UPSERT_NDX, body)
        .then((response) => response.data),
    onSuccess: () => queryClient.invalidateQueries({ queryKey: ["ndxs"] }),
  });

  return mutation;
};
