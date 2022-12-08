import { useMutation, useQueryClient } from "react-query";
import { loginAPI } from "./service";

// ~@ hook to login user
export const useLogin = () => {
  const queryClient = useQueryClient();

  return useMutation((data) => loginAPI(data), {
    onSuccess: ({ data }) => {
      localStorage.setItem("userInfo", JSON.stringify(data));
      localStorage.setItem("token", data.token);
    },
  });
};
