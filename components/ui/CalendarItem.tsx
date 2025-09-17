import { TouchableOpacity, View, Text } from "react-native";
import { CalendarXIcon, ClockIcon, MapPinIcon } from "./Icons";
import { Colors } from "@/constants/Colors";

const SIZE = 16;
const COLOR = Colors.gray.dark;

type ItemDataType = {
  type: "Service";
  service: {
    folio: number;
    status: "To Do" | "Doing" | "Done" | "Canceled";
    address: string;
  };
  startTime: string;
  endTime: string;
};
type ItemDataBlockerType = {
  type: "Blocker";
  startTime: string;
  endTime: string;
  description?: string;
};

export default function CalendarItem({
  data,
}: {
  data: ItemDataType | ItemDataBlockerType;
}) {
  if (data.type === "Service") return <ItemData data={data} />;
  if (data.type === "Blocker") return <ItemDataBlocker data={data} />;
  return null;
}

export function EmptyCalendarItem() {
  return (
    <View className="items-center my-8">
      <CalendarXIcon size={40} color={Colors.gray.default} />
      <Text className="text-lg mt-3 mb-1">No hay servicios asignados</Text>
    </View>
  );
}

function ItemData({ data }: { data: ItemDataType }) {
  return (
    <TouchableOpacity
      className="flex-1 p-4 bg-white border-t border-gray-200"
      activeOpacity={0.7}
    >
      <View className="flex-row items-center justify-between">
        <Text className="font-medium text-lg">#{data.service.folio}</Text>
        <View className="w-3 h-3 bg-[#f96302] rounded-full" />
      </View>
      <View className="flex-row items-center gap-2">
        <ClockIcon color={COLOR} size={SIZE} />
        <Text className="text-base" style={{ color: COLOR }}>
          {data.startTime} - {data.endTime}
        </Text>
      </View>
      <View className="flex-row items-center gap-2">
        <MapPinIcon color={COLOR} size={SIZE} />
        <Text className="text-base" style={{ color: COLOR }}>
          {data.service.address}
        </Text>
      </View>
    </TouchableOpacity>
  );
}

function ItemDataBlocker({ data }: { data: ItemDataBlockerType }) {
  return (
    <View className="flex-1 p-4 bg-gray-100 border-t border-gray-200">
      <Text className="font-medium text-lg">Horario Bloqueado</Text>
      <View className="flex-row items-center gap-2">
        <ClockIcon color={COLOR} size={SIZE} />
        <Text className="text-base" style={{ color: COLOR }}>
          {data.startTime} - {data.endTime}
        </Text>
      </View>
      {data.description && (
        <Text className="text-base" style={{ color: COLOR }}>
          {data.description}
        </Text>
      )}
    </View>
  );
}
