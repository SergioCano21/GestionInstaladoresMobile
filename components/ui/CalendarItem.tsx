import { Colors } from "@/constants/Colors";
import { Schedule } from "@/types/types";
import { Text, TouchableOpacity, View } from "react-native";
import { ClockIcon, MapPinIcon } from "./Icons";

const SIZE = 16;
const COLOR = Colors.gray.dark;

export default function CalendarItem({ data }: { data: Schedule }) {
  if (data.type === "Service") return <ItemData data={data} />;
  if (data.type === "Block") return <ItemDataBlocker data={data} />;
  return null;
}

function ItemData({ data }: { data: Schedule }) {
  return (
    <TouchableOpacity
      className="flex-1 p-4 bg-white border-t border-gray-200"
      activeOpacity={0.7}
    >
      <View className="flex-row items-center justify-between">
        <Text className="font-medium text-lg">#{data.folio}</Text>
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
          {data.address}
        </Text>
      </View>
    </TouchableOpacity>
  );
}

function ItemDataBlocker({ data }: { data: Schedule }) {
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
