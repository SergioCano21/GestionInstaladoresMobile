import { Colors } from "@/constants/Colors";
import { Text, View } from "react-native";
import { ClipboardClockIcon } from "./Icons";

export function EmptyActiveService() {
  return (
    <View className="flex-1 items-center justify-center my-8">
      <ClipboardClockIcon size={40} color={Colors.gray.default} />
      <Text className="text-lg mt-3 mb-1">No hay servicios asignados</Text>
    </View>
  );
}
export function EmptyCompletedService() {
  return (
    <View className="flex-1 items-center justify-center my-8">
      <ClipboardClockIcon size={40} color={Colors.gray.default} />
      <Text className="text-lg mt-3 mb-1">No hay servicios completados</Text>
    </View>
  );
}
export function EmptyCalendar() {
  return (
    <View className="items-center my-8">
      <ClipboardClockIcon size={40} color={Colors.gray.default} />
      <Text className="text-lg mt-3 mb-1">No hay horarios asignados</Text>
    </View>
  );
}
