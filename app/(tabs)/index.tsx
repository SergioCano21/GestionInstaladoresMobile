import Screen from "@/components/Screen";
import { ActiveService } from "@/components/ServiceCard";
import Badge from "@/components/ui/Badge";
import { Card } from "@/components/ui/Card";
import { Link } from "expo-router";
import { TouchableOpacity } from "react-native";

export default function ActiveServices() {
  return (
    <Screen>
      <Badge variant="active">3 servicios</Badge>
      {/* Card */}
      <Link href={`/123`} asChild>
        <TouchableOpacity activeOpacity={0.7}>
          <Card variant="active">
            <ActiveService />
          </Card>
        </TouchableOpacity>
      </Link>

      {/* Card 2 */}
      <Link href={`/123`} asChild>
        <TouchableOpacity activeOpacity={0.7}>
          <Card variant="active">
            <ActiveService />
          </Card>
        </TouchableOpacity>
      </Link>
    </Screen>
  );
}
