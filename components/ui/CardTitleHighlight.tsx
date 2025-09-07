import { Colors } from "@/constants/Colors";
import { Text } from "react-native";

export default function CardHighlight({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <Text
      className="text-xl font-bold"
      style={{ color: Colors.primary.default }}
    >
      {children}
    </Text>
  );
}
