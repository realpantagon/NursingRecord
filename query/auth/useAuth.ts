import axiosCustom from "@/utils/auth/axioCustom";
import { useMutation, useQuery } from "@tanstack/react-query";
import { PROTECTED_API, UNPROTECTED_API } from "../api.route";
import { Login } from "./type";

export const useQueryCheckAuth = () => {
  const query = useQuery({
    queryKey: ["checkAuth"],
    queryFn: () =>
      axiosCustom
        .get(PROTECTED_API.CHECK_AUTH)
        .then((response) => response.data),
  });

  return query;
};

export const useMutationLogin = (body: Login) => {
  const mutation = useMutation({
    mutationFn: () =>
      axiosCustom
        .post(UNPROTECTED_API.LOGIN, body)
        .then((response) => response.data),
  });
  return mutation;
};
