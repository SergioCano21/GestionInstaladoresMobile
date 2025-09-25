import { ActivityIndicator, View } from "react-native";

export default function LoadingSpinner({
  color = "#999999",
  size = "small",
}: {
  color?: string;
  size?: "small" | "large";
}) {
  return (
    <View className="flex-1 items-center justify-center">
      <ActivityIndicator color={color} size={size} />
    </View>
  );
}
