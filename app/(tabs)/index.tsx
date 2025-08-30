import Screen from "@/components/Screen";
import { ServiceCard } from "@/components/ui/Card";
import { Colors } from "@/constants/Colors";
import { Link } from "expo-router";
import { Pressable, Text } from "react-native";

export default function ActiveServices() {
  return (
    <Screen>
      <Link href={`/${123}`}>Link para otro lado</Link>
      <Text
        className="py-1 px-3 mb-4 text-sm rounded-lg self-start"
        style={{
          backgroundColor: Colors.primary.background,
          color: Colors.primary.default,
        }}
      >
        5 servicios
      </Text>
      {/* Card */}
      <Link href={`/${123}`} asChild>
        <Pressable>
          <ServiceCard type="active" />
        </Pressable>
      </Link>

      {/* Card 2 */}
      <ServiceCard type="active" />
    </Screen>
  );
}
