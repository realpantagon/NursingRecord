import axiosCustom from "@/utils/auth/axioCustom";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { PROTECTED_API } from "../api.route";
import { FieldCategory, UpsertFieldCategory } from "./type";

export const useQueryGetFieldCategories = () => {
  const query = useQuery({
    queryKey: ["fieldCategories"],
    queryFn: () =>
      axiosCustom
        .get<FieldCategory>(PROTECTED_API.GET_FIELD_CATEGORIES)
        .then((response) => response.data),
  });

  return query;
};

export const useMutationUpsertFieldCategory = (body: UpsertFieldCategory) => {
  const queryClient = useQueryClient();
  const mutation = useMutation<UpsertFieldCategory>({
    mutationFn: () =>
      axiosCustom
        .put(PROTECTED_API.UPSERT_FIELD_CATEGORY, body)
        .then((response) => response.data),
    onSuccess: () =>
      queryClient.invalidateQueries({ queryKey: ["fieldCategories"] }),
  });

  return mutation;
};
