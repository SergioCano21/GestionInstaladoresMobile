import { View, Text } from "react-native";
import { Colors } from "@/constants/Colors";
import Card from "./ui/Card";

export default function NoticeCard({
  Icon,
  color = Colors.white.default,
  size = 20,
  title,
  content,
}: {
  Icon: React.ComponentType<{ color: string; size: number }>;
  color?: string;
  size?: number;
  title: string;
  content: string;
}) {
  return (
    <Card variant="blue">
      <View className="flex-row gap-2">
        <View className="bg-blue-500 w-10 h-10 rounded-full justify-center items-center">
          <Icon color={color} size={size} />
        </View>
        <View className="flex-1">
          <Text className="text-blue-900 font-medium text-lg">{title}</Text>
          <Text className="text-blue-800 text-base">{content}</Text>
        </View>
      </View>
    </Card>
  );
}
