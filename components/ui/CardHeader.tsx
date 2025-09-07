import { Colors } from "@/constants/Colors";
import { View } from "react-native";
import CardTitle from "./CardTitle";

export default function CardHeader({
  children,
  Icon,
  color = Colors.primary.default,
  size = 20,
}: {
  children: React.ReactNode;
  Icon: React.ComponentType<{ color: string; size: number }>;
  color?: string;
  size?: number;
}) {
  return (
    <View className="flex-row gap-2 items-center">
      <Icon color={color} size={size} />
      <CardTitle>{children}</CardTitle>
    </View>
  );
}
