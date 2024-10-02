// hooks/useAuth.ts
import { useMutation } from "@tanstack/react-query";
import { useDispatch } from "react-redux";
import { setToken } from "../store/reducers/authSlice";
import { login, LoginData } from "../services/login";

export const useLogin = () => {
  const dispatch = useDispatch();

  return useMutation({
    mutationFn: (data: LoginData) => login(data),
    onSuccess: (data) => {
      dispatch(setToken(data.token));
    },
    onError: (error) => {
      console.error("Login failed:", error);
    },
  });
};
