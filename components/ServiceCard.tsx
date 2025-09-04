import { Colors } from "@/constants/Colors";
import { Text, View } from "react-native";
import Badge from "./ui/Badge";
import { CardHighlight, CardTitle } from "./ui/Card";
import {
  CalendarIcon,
  ChevronRightIcon,
  CircleCheckIcon,
  ClockIcon,
  MapPinIcon,
} from "./ui/Icons";

export function ActiveService() {
  return (
    <>
      <View className="flex-row items-center justify-between mb-3">
        <View className="flex-row items-center gap-3">
          <Badge variant="pending">Pendiente</Badge>
          <CardHighlight>#1234</CardHighlight>
        </View>
        <ChevronRightIcon color={Colors.gray.default} size={22} />
      </View>
      <CardTitle>Nombre Cliente</CardTitle>
      <View className="mt-1">
        <InfoRow icon="clock">9:00AM - 12:00PM</InfoRow>
        <InfoRow icon="map-pin">Dirección Completa del Cliente 3300</InfoRow>
      </View>
    </>
  );
}

export function CompletedService() {
  return (
    <>
      <View className="flex-row items-center justify-between mb-3">
        <View className="flex-row items-center gap-3">
          <CircleCheckIcon color={Colors.green.medium} size={20} />
          <CardHighlight>#1234</CardHighlight>
          <Badge variant="completed">Completado</Badge>
        </View>
      </View>
      <CardTitle>Nombre Cliente</CardTitle>
      <View className="mt-1">
        <InfoRow icon="calendar">15 Enero 2025</InfoRow>
        <InfoRow icon="map-pin">Dirección Completa del Cliente 3300</InfoRow>
        <View className="flex-row items-center justify-between mt-1">
          <Text className="text-base" style={{ color: Colors.gray.dark }}>
            Ganancia:
          </Text>
          <Text
            className="text-xl font-bold"
            style={{ color: Colors.green.medium }}
          >
            $650
          </Text>
        </View>
      </View>
    </>
  );
}

function InfoRow({
  icon,
  children,
}: {
  icon: "map-pin" | "clock" | "calendar";
  children: React.ReactNode;
}) {
  const SIZE = 16;
  const COLOR = Colors.gray.dark;
  const iconComponent = {
    "map-pin": <MapPinIcon color={COLOR} size={SIZE} />,
    clock: <ClockIcon color={COLOR} size={SIZE} />,
    calendar: <CalendarIcon color={COLOR} size={SIZE} />,
  }[icon];

  return (
    <View className="flex-row items-center gap-2">
      {iconComponent}
      <Text className="text-base" style={{ color: COLOR }}>
        {children}
      </Text>
    </View>
  );
}
