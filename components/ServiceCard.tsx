import { Colors } from "@/constants/Colors";
import { Service } from "@/types/types";
import { Text, View } from "react-native";
import Badge from "./ui/Badge";
import Card from "./ui/Card";
import CardTitle from "./ui/CardTitle";
import CardHighlight from "./ui/CardTitleHighlight";
import {
  CalendarIcon,
  ChevronRightIcon,
  CircleCheckIcon,
  ClockIcon,
  MapPinIcon,
} from "./ui/Icons";

export function ServiceCard({
  service,
  type,
}: {
  service: Service;
  type: "active" | "completed";
}) {
  return (
    <Card variant={type}>
      {type === "active" ? (
        <ActiveService service={service} />
      ) : (
        <CompletedService service={service} />
      )}
    </Card>
  );
}

function ActiveService({ service }: { service: Service }) {
  return (
    <>
      <View className="flex-row items-center justify-between mb-3">
        <View className="flex-row items-center gap-3">
          {service.status === "To Do" ? (
            <Badge variant="todo">Pendiente</Badge>
          ) : (
            <Badge variant="doing">En Proceso</Badge>
          )}
          <CardHighlight>#{service.folio}</CardHighlight>
        </View>
        <ChevronRightIcon color={Colors.gray.default} size={22} />
      </View>
      <CardTitle>{service.client}</CardTitle>
      <View className="mt-1">
        <InfoRow icon="clock">
          {service.schedule.startTime && service.schedule.endTime
            ? `${service.schedule.startTime} - ${service.schedule.endTime}`
            : `Sin Asignar`}
        </InfoRow>
        <InfoRow icon="map-pin">{service.address}</InfoRow>
      </View>
    </>
  );
}

function CompletedService({ service }: { service: Service }) {
  return (
    <>
      <View className="flex-row items-center justify-between mb-3">
        <View className="flex-row items-center gap-3">
          <CircleCheckIcon color={Colors.green.medium} size={20} />
          <CardHighlight>#{service.folio}</CardHighlight>
          <Badge variant="done">Completado</Badge>
        </View>
      </View>
      <CardTitle>{service.client}</CardTitle>
      <View className="mt-1">
        <InfoRow icon="calendar">
          {" "}
          {service.schedule.startTime && service.schedule.endTime
            ? `${service.schedule.startTime} - ${service.schedule.endTime}`
            : `Sin Asignar`}
        </InfoRow>
        <InfoRow icon="map-pin">{service.address}</InfoRow>
        <View className="flex-row items-center justify-between mt-1">
          <Text className="text-base" style={{ color: Colors.gray.dark }}>
            Ganancia:
          </Text>
          <Text
            className="text-xl font-bold"
            style={{ color: Colors.green.medium }}
          >
            ${service.totals.installerPayment}
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
