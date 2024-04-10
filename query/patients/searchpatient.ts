import { useMutation } from "@tanstack/react-query";
import { SearchPatient } from "./type";
import axiosCustom from "@/utils/auth/axioCustom";
import { PROTECTED_API } from "../api.route";

export const useQuerySearchPatients = () => {
  const mutation = useMutation({
    mutationKey: ["searchPatient"],
    mutationFn: (body: SearchPatient) =>
      axiosCustom
        .post(PROTECTED_API.SEARCH_PATIENTS, body)
        .then((response) => response.data.data),
  });
  return mutation;
};
