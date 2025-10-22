import { transformServices } from "@/services/dateTransformation";
import { Service, Status } from "@/types/types";
import api from "./axios";

const API_SERVICES_URL = "/service";

export const apiGetServices = async (
  status: "active" | "completed"
): Promise<Service[]> => {
  try {
    const response = await api.get(`${API_SERVICES_URL}/${status}`);

    return transformServices({ services: response.data.services });
  } catch (error: any) {
    throw new Error(
      error.response?.data.message || "Error al obtener los servicios"
    );
  }
};

export const apiUpdateService = async ({
  id,
  status,
}: {
  id: string;
  status: Status;
}) => {
  try {
    await api.put(`${API_SERVICES_URL}/${id}`, { status });
  } catch (error: any) {
    throw new Error(
      error.response?.data.message || "Error al actualizar el servicio"
    );
  }
};
