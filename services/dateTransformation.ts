import { Schedule, Service } from "@/types/types";
import dayjs from "dayjs";
import timezone from "dayjs/plugin/timezone";
import utc from "dayjs/plugin/utc";

dayjs.extend(utc);
dayjs.extend(timezone);

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
        startTime: dayjs
          .utc(service.schedule.startTime)
          .tz(userTZ)
          .format("HH:mm"),
        endTime: dayjs.utc(service.schedule.endTime).tz(userTZ).format("HH:mm"),
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
      date: dayjs.utc(schedule.startTime).tz(userTZ).format("YYYY-MM-DD"),
      startTime: dayjs.utc(schedule.startTime).tz(userTZ).format("HH:mm"),
      endTime: dayjs.utc(schedule.endTime).tz(userTZ).format("HH:mm"),
    };
  });
};
