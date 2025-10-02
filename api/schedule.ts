import { transformSchedule } from "@/services/dateTransformation";
import { scheduleToSection } from "@/services/scheduleFormat";
import { BlockerForm, Section } from "@/types/types";
import api from "./axios";

const API_SCHEDULES_URL = "/schedule";

export const apiGetSchedules = async (): Promise<Section[]> => {
  try {
    const response = await api.get(`${API_SCHEDULES_URL}`);
    const schedules = transformSchedule({ schedules: response.data.schedules });
    console.log("schedules");
    return scheduleToSection({ schedules });
  } catch (error: any) {
    throw new Error(
      error.response?.data.message || "Error al obtener los horarios"
    );
  }
};

export const apiAddBlocker = async (data: BlockerForm) => {
  try {
    await api.post(`${API_SCHEDULES_URL}`, data);
    console.log("add blocker");
  } catch (error: any) {
    throw new Error(
      error.response?.data.message || "Error al agregar bloqueo de horario"
    );
  }
};

export const apiDeleteBlocker = async (id: string) => {
  try {
    await api.delete(`${API_SCHEDULES_URL}/${id}`);
    console.log("delete blocker");
  } catch (error: any) {
    throw new Error(
      error.response?.data.message || "Error al eliminar bloqueo de horario"
    );
  }
};

export const apiEditBlocker = async (id: string, data: BlockerForm) => {
  try {
    console.log(data);
    await api.put(`${API_SCHEDULES_URL}/${id}`, data);
    console.log("edit blocker");
  } catch (error: any) {
    throw new Error(
      error.response?.data.message || "Error al editar bloqueo de horario"
    );
  }
};
