import { Colors } from "@/constants/Colors";
import { Text, View } from "react-native";
import {
  CalendarIcon,
  ChevronRightIcon,
  CircleCheckIcon,
  ClockIcon,
  MapPinIcon,
} from "./Icons";

export function ServiceCard({ type }: { type: "active" | "completed" }) {
  return (
    <Card type={type}>
      {type === "active" ? <ActiveService /> : <CompletedService />}
    </Card>
  );
}

export function Card({
  children,
  type,
}: {
  children: React.ReactNode;
  type: "active" | "completed" | "normal";
}) {
  const borderClass = type !== "normal" ? "border-l-4" : "";
  return (
    <View
      className={`p-5 rounded-xl mb-4 ${borderClass}`}
      style={{
        backgroundColor: Colors.white.default,
        borderLeftColor:
          type === "active"
            ? Colors.primary.default
            : type === "completed"
              ? Colors.green.medium
              : undefined,
      }}
    >
      {children}
    </View>
  );
}

export function ActiveService() {
  return (
    <>
      <View className="flex-row items-center justify-between mb-3">
        <View className="flex-row items-center gap-3">
          <Text
            className="py-1 px-3 text-sm rounded-lg self-start font-semibold"
            style={{
              backgroundColor: Colors.gray.light,
              color: Colors.gray.dark,
            }}
          >
            Pendiente
          </Text>
          <Text
            className="text-xl font-bold"
            style={{ color: Colors.primary.default }}
          >
            #1234
          </Text>
        </View>
        <ChevronRightIcon color={Colors.gray.default} size={22} />
      </View>
      <View className="mb-1">
        <Text
          className="text-lg font-semibold"
          style={{ color: Colors.black.default }}
        >
          Nombre Del Cliente
        </Text>
      </View>
      <View className="flex-row items-center gap-2">
        <ClockIcon color={Colors.gray.dark} size={16} />
        <Text className="text-base" style={{ color: Colors.gray.dark }}>
          9:00AM - 12:00PM
        </Text>
      </View>
      <View className="flex-row items-center gap-2">
        <MapPinIcon color={Colors.gray.dark} size={16} />
        <Text className="text-base" style={{ color: Colors.gray.dark }}>
          Dirección Completa del Cliente 3300
        </Text>
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
          <Text
            className="text-xl font-bold"
            style={{ color: Colors.primary.default }}
          >
            #1234
          </Text>
          <Text
            className="py-1 px-3 text-sm rounded-lg self-start font-semibold"
            style={{
              backgroundColor: Colors.green.background,
              color: Colors.green.default,
            }}
          >
            Completado
          </Text>
        </View>
      </View>
      <View className="mb-1">
        <Text
          className="text-lg font-semibold"
          style={{ color: Colors.black.default }}
        >
          Nombre Del Cliente
        </Text>
      </View>
      <View className="flex-row items-center gap-2">
        <CalendarIcon color={Colors.gray.dark} size={16} />
        <Text className="text-base" style={{ color: Colors.gray.dark }}>
          15 Enero 2025
        </Text>
      </View>
      <View className="flex-row items-center gap-2">
        <MapPinIcon color={Colors.gray.dark} size={16} />
        <Text className="text-base" style={{ color: Colors.gray.dark }}>
          Dirección Completa del Cliente 3300
        </Text>
      </View>
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
    </>
  );
}
