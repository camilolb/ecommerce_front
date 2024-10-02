// services/auth.ts
import api from "./api";

export interface LoginData {
  email: string;
  password: string;
}

export interface RegisterData {
  firstName: string;
  lastName: string;
  role: string;
  email: string;
  password: string;
}

export const login = async (data: LoginData) => {
  const response = await api.post("/auth/login", data);
  return response.data;
};

export const register = async (data: RegisterData) => {
  const response = await api.post("/auth/register", data);
  return response.data;
};
