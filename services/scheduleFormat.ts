import { Schedule, Section } from "@/types/types";

export const scheduleToSection = ({
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
