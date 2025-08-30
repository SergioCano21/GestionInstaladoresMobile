import Screen from "@/components/Screen";
import { Stack, useLocalSearchParams } from "expo-router";
import { Text } from "react-native";

export default function ServiceDetail() {
  const { serviceId } = useLocalSearchParams();

  return (
    <Screen>
      <Stack.Screen
        options={{
          headerTitle: "Detalles del Servicio",
        }}
      />
      <Text>Detalles del servicio {serviceId}</Text>
    </Screen>
  );
}
