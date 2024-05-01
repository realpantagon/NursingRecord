import axiosCustom from "@/utils/auth/axioCustom";
import { useQuery } from "@tanstack/react-query";
import { PROTECTED_API } from "./api.route";

export const useQueryGetMe = () => {
  const query = useQuery({
    queryKey: ["user"],
    queryFn: () =>
      axiosCustom
        .get(PROTECTED_API.GET_ME)
        .then((response) => response.data.data),
  });

  return query;
};
