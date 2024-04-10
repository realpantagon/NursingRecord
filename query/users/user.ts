import axiosCustom from "@/utils/auth/axioCustom";
import { useQuery } from "@tanstack/react-query";
import { User } from "./type";
import { PROTECTED_API } from "../api.route";

export const useQueryGetMe = () => {
  const query = useQuery({
    queryKey: ["user"],
    queryFn: () =>
      axiosCustom
        .get<User>(PROTECTED_API.GET_ME)
        .then((response) => response.data),
  });

  return query;
};
