import { Login, LoginResponse } from "@/types/types";
import api from "./axios";

const API_INSTALLER_URL = "/installer";

export const apiLogin = async (credentials: Login): Promise<LoginResponse> => {
  try {
    const response = await api.post(`${API_INSTALLER_URL}/login`, credentials);
    return response.data;
  } catch (error: any) {
    throw new Error(
      error.response?.data.message || "Error al intentar iniciar sesión"
    );
  }
};
