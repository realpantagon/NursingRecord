import axiosCustom from "@/utils/auth/axioCustom";
import { useMutation, useQuery } from "@tanstack/react-query";
import { PROTECTED_API, UNPROTECTED_API } from "../api.route";
import { Login } from "./type";
import { toastRef } from "@/component/toast/toast";

export const useQueryCheckAuth = () => {
  const query = useQuery({
    queryKey: ["checkAuth"],
    queryFn: () =>
      axiosCustom
        .get(PROTECTED_API.CHECK_AUTH)
        .then((response) => response.data.data),
  });

  return query;
};

export const useMutationLogin = () => {
  const showSuccess = () => {
    if (toastRef.current) {
      toastRef.current?.show({
        severity: "success",
        summary: "Success",
        detail: "Login Successful",
        life: 3000,
      });
    }
  };

  const showError = () => {
    if (toastRef.current) {
      toastRef.current?.show({
        severity: "error",
        summary: "Error",
        detail: "Login Fail",
        life: 3000,
      });
    }
  };
  const mutation = useMutation({
    mutationFn: async (body: Login) => {
      const response = await axiosCustom.post(UNPROTECTED_API.LOGIN, body);
      return response.data.data;
    },
    onSuccess: () => {
      showSuccess();
      window.location.href = "/home";
    },
    onError: () => showError(),
  });

  return mutation;
};
