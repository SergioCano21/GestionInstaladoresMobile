import dayjs from "@/services/dayjsConfig";
import { Schedule, Service } from "@/types/types";

export const transformServices = ({
  services,
}: {
  services: Service[];
}): Service[] => {
  const userTZ = dayjs.tz.guess();

  return services.map((service) => {
    if (!service.schedule.startTime || !service.schedule.endTime)
      return service;

    return {
      ...service,
      schedule: {
        startTime: dayjs(service.schedule.startTime).tz(userTZ).format("HH:mm"),
        endTime: dayjs(service.schedule.endTime).tz(userTZ).format("HH:mm"),
      },
    };
  });
};

export const transformSchedule = ({
  schedules,
}: {
  schedules: Schedule[];
}): Schedule[] => {
  const userTZ = dayjs.tz.guess();

  return schedules.map((schedule) => {
    if (!schedule.startTime || !schedule.endTime) return schedule;

    return {
      ...schedule,
      startDate: dayjs.utc(schedule.startTime).tz(userTZ).format("YYYY-MM-DD"),
      endDate: dayjs.utc(schedule.endTime).tz(userTZ).format("YYYY-MM-DD"),
      startTime: dayjs.utc(schedule.startTime).tz(userTZ).format("HH:mm"),
      endTime: dayjs.utc(schedule.endTime).tz(userTZ).format("HH:mm"),
    };
  });
};
