import axiosCustom from "@/utils/axioCustom";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { PROTECTED_API } from "./api.route";
import { UpsertNdx } from "@/types/ndx";

export const useQueryNdxs = () => {
  const query = useQuery({
    queryKey: ["ndxs"],
    queryFn: () =>
      axiosCustom
        .get(PROTECTED_API.GET_NDXS)
        .then((response) => response.data.data),
  });

  return query;
};

export const useMutationUpsertNdx = (body: UpsertNdx) => {
  const queryClient = useQueryClient();
  const mutation = useMutation<UpsertNdx>({
    mutationFn: () =>
      axiosCustom
        .put(PROTECTED_API.UPSERT_NDX, body)
        .then((response) => response.data.data),
    onSuccess: async () =>
      await queryClient.invalidateQueries({ queryKey: ["ndxs"] }),
  });

  return mutation;
};
