import { Login } from "@/types/types";
import api from "./axios";

interface LoginResponse {
  error: boolean;
  message: string;
  token: string;
}

const API_INSTALLER_URL = "/installer";

export const api_login = async (credentials: Login): Promise<LoginResponse> => {
  try {
    const response = await api.post(`${API_INSTALLER_URL}/login`, credentials);
    return response.data;
  } catch (error: any) {
    throw new Error(
      error.response?.data.message || "Error al intentar iniciar sesión"
    );
  }
};
