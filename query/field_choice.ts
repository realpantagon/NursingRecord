import { CreateFieldChoice, UpdateFieldChoice} from "@/types/field_choice";
import axiosCustom from "@/utils/axioCustom";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { PROTECTED_API } from "./api.route";

export const useQueryGetFieldChoicesByNdx = (ndxId: string) => {
  const query = useQuery({
    queryKey: ["fieldChoices", ndxId],
    queryFn: () =>
      axiosCustom
        .get(PROTECTED_API.GET_FIELD_CHOICES_BY_NDX.replace("{ndx_id}", ndxId))
        .then((response) => response.data.data),
  });

  return query;
};

export const useMutationCreateFieldChoice = () => {
  const queryClient = useQueryClient();
  const mutation = useMutation({
    mutationFn: (body: CreateFieldChoice) =>
      axiosCustom
        .put(PROTECTED_API.CREATE_FIELD_CHOICE, body)
        .then((response) => response.data.data),
    onSuccess: async () =>
      await queryClient.invalidateQueries({ queryKey: ["fieldChoices"] }),
  });

  return mutation;
};

export const useMutationUpdateFieldChoice = () => {
  const queryClient = useQueryClient();
  const mutation = useMutation({
    mutationFn: (body: UpdateFieldChoice) =>
      axiosCustom
        .put(PROTECTED_API.UPDATE_FIELD_CHOICE, body)
        .then((response) => response.data.data),
    onSuccess: async () =>
      await queryClient.invalidateQueries({ queryKey: ["fieldChoices"] }),
  });

  return mutation;
};

export const useMutationDeleteFieldChoice = (id: string) => {
  const mutation = useMutation({
    mutationFn: () =>
      axiosCustom
        .put(PROTECTED_API.DELETE_FIELD_CHOICE.replace("{id}", id))
        .then((response) => response.data.data),
  });

  return mutation;
};
