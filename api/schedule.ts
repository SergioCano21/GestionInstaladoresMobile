import { transformSchedule } from "@/services/dateTransformation";
import { scheduleToSection } from "@/services/scheduleFormat";
import { AddBlockerForm, Section } from "@/types/types";
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

export const apiAddBlocker = async (data: AddBlockerForm) => {
  try {
    await api.post(`${API_SCHEDULES_URL}`, data);
    console.log("add blocker");
  } catch (error: any) {
    throw new Error(
      error.response?.data.message || "Error al agregar bloqueo de horario"
    );
  }
};
