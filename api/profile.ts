import { Profile } from "@/types/types";
import api from "./axios";

const API_INSTALLER_URL = "/installer";

export const apiGetProfile = async (): Promise<Profile> => {
  try {
    const response = await api.get(`${API_INSTALLER_URL}/profile`);
    console.log("Profile");
    return response.data.installer;
  } catch (error: any) {
    throw new Error(
      error.response?.data.message || "Error al obtener información de perfil"
    );
  }
};
