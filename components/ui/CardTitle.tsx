import { Colors } from "@/constants/Colors";
import { Text } from "react-native";

export default function CardTitle({ children }: { children: React.ReactNode }) {
  return (
    <Text
      className="text-lg font-semibold"
      style={{ color: Colors.black.default }}
    >
      {children}
    </Text>
  );
}
