import axiosCustom from "@/utils/axioCustom";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { PROTECTED_API } from "./api.route";
import { CreateFieldCategory, UpdateFieldCategory } from "@/types/field_category";

export const useQueryGetFieldCategories = () => {
  const query = useQuery({
    queryKey: ["fieldCategories"],
    queryFn: () =>
      axiosCustom
        .get(PROTECTED_API.GET_FIELD_CATEGORIES)
        .then((response) => response.data.data),
  });

  return query;
};

export const useMutationCreateFieldCategory = () => {
  const queryClient = useQueryClient();
  const mutation = useMutation({
    mutationFn: (body: CreateFieldCategory) =>
      axiosCustom
        .put(PROTECTED_API.CREATE_FIELD_CATEGORY, body)
        .then((response) => response.data.data),
    onSuccess: async () =>
      await queryClient.invalidateQueries({ queryKey: ["fieldCategories"] }),
  });

  return mutation;
};

export const useMutationUpdateFieldCategory = () => {
  const queryClient = useQueryClient();
  const mutation = useMutation({
    mutationFn: (body: UpdateFieldCategory) =>
      axiosCustom
        .put(PROTECTED_API.UPDATE_FIELD_CATEGORY, body)
        .then((response) => response.data.data),
    onSuccess: async () =>
      await queryClient.invalidateQueries({ queryKey: ["fieldCategories"] }),
  });

  return mutation;
};
