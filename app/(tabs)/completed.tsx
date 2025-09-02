import Screen from "@/components/Screen";
import { CompletedService } from "@/components/ServiceCard";
import { Card } from "@/components/ui/Card";

export default function TabTwoScreen() {
  return (
    <Screen>
      {/* Card Completed */}
      <Card variant="completed">
        <CompletedService />
      </Card>

      {/* Card Completed */}
      <Card variant="completed">
        <CompletedService />
      </Card>
    </Screen>
  );
}
