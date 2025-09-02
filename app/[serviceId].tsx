import Screen from "@/components/Screen";
import Badge from "@/components/ui/Badge";
import { Card, CardTitle } from "@/components/ui/Card";
import { Colors } from "@/constants/Colors";
import { Stack, useLocalSearchParams } from "expo-router";
import { Text, View } from "react-native";

export default function ServiceDetail() {
  const { serviceId } = useLocalSearchParams();

  return (
    <Screen>
      <Stack.Screen
        options={{
          headerTitle: "Detalles del Servicio",
          headerTintColor: Colors.primary.default,
          headerTitleStyle: { fontSize: 17, fontWeight: "bold" },
          headerBackButtonDisplayMode: "minimal",
          headerShadowVisible: true, //Revisar sombra
        }}
      />
      {/* Información del Servicio */}
      <Card variant="normal">
        <View className="gap-2">
          <CardTitle>Información del Servicio</CardTitle>
          <View className="flex-row items-center">
            <View className="flex-1">
              <DetailsTitle>Folio</DetailsTitle>
              <DetailsInfo>#1234</DetailsInfo>
            </View>
            <View className="flex-1">
              <Badge variant="pending">Pendiente</Badge>
            </View>
          </View>
          <View className="flex-row items-center">
            <View className="">
              <DetailsTitle>Descripción</DetailsTitle>
              <DetailsInfo>
                Descripción detallada de lo que se tiene que hacer en el
                servicio. Incluye especificaciones técnicas de lo que se va a
                hacer y lo que se le vendió al cliente.
              </DetailsInfo>
            </View>
          </View>
          <View className="flex-row items-center">
            <View className="flex">
              <DetailsTitle>Cantidad</DetailsTitle>
              <DetailsInfo>2</DetailsInfo>
            </View>
          </View>
          <View className="flex-row items-center">
            <View className="flex">
              <DetailsTitle>Comentarios Adicionales</DetailsTitle>
              <DetailsInfo>Sin comentarios</DetailsInfo>
            </View>
          </View>
        </View>
      </Card>

      <Card variant="normal">
        <View className="gap-2">
          <CardTitle>Información del Cliente</CardTitle>
          <View className="flex-row items-center">
            <View className="flex">
              <DetailsTitle>Nombress</DetailsTitle>
              <DetailsInfo>Nombre del Cliente</DetailsInfo>
            </View>
          </View>
          <View className="flex-row items-center">
            <View className="flex">
              <DetailsTitle>Teléfono</DetailsTitle>
              <DetailsInfo>9991988767</DetailsInfo>
            </View>
          </View>
        </View>
      </Card>
    </Screen>
  );
}

function DetailsTitle({ children }: { children: React.ReactNode }) {
  return (
    <Text className="text-sm" style={{ color: Colors.gray.dark }}>
      {children}
    </Text>
  );
}
function DetailsInfo({ children }: { children: React.ReactNode }) {
  return (
    <Text className="text-base" style={{ color: Colors.gray.dark }}>
      {children}
    </Text>
  );
}
