import Screen from "@/components/Screen";
import { ServiceCard } from "@/components/ui/Card";
import { Colors } from "@/constants/Colors";
import { Text } from "react-native";

export default function TabTwoScreen() {
  return (
    <Screen>
      <Text
        className="py-1 px-3 mb-4 text-sm rounded-lg self-start"
        style={{
          backgroundColor: Colors.green.background,
          color: Colors.green.default,
        }}
      >
        3 servicios
      </Text>

      {/* Card Completed */}
      <ServiceCard type="completed" />

      <ServiceCard type="completed" />
    </Screen>
  );
}
