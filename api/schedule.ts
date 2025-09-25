import { transformSchedule } from "@/services/dateTransformation";
import { Schedule, Section } from "@/types/types";
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

const scheduleToSection = ({
  schedules,
}: {
  schedules: Schedule[];
}): Section[] => {
  const grouped: Record<string, Schedule[]> = schedules.reduce(
    (accumulator, current) => {
      accumulator[current.date] = accumulator[current.date] || [];
      accumulator[current.date].push(current);
      return accumulator;
    },
    {} as Record<string, Schedule[]>
  );

  const sections = Object.entries(grouped).map((section) => ({
    title: section[0],
    data: section[1],
  }));

  return sections;
};
