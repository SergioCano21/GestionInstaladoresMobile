import Screen from "@/components/Screen";
import Badge from "@/components/ui/Badge";
import { Card, CardTitle } from "@/components/ui/Card";
import {
  ClockIcon,
  FileTextIcon,
  MapPinIcon,
  StoreIcon,
  UserIcon,
} from "@/components/ui/Icons";
import {
  CompletedSwipeButton,
  PendingSwipeButton,
} from "@/components/ui/SwipeButton";
import { Colors } from "@/constants/Colors";
import { Stack } from "expo-router";
import { useState } from "react";
import { Text, View } from "react-native";

export default function ServiceDetail() {
  const [scrollEnabled, setScrollEnabled] = useState(true);
  const COLOR = Colors.primary.default;
  const SIZE = 20;

  return (
    <>
      <Screen scrollEnabled={scrollEnabled}>
        <Stack.Screen options={{ headerTitle: "Detalles del Servicio" }} />
        {/* Información del Servicio */}
        <Card variant="normal">
          <View className="gap-3">
            <View className="flex-row gap-2 items-center">
              <FileTextIcon color={COLOR} size={SIZE} />
              <CardTitle>Información del Servicio</CardTitle>
            </View>
            <View className="flex-row items-center">
              <View className="flex-1">
                <DetailsTitle>Folio</DetailsTitle>
                <DetailsInfo>#1234</DetailsInfo>
              </View>
              <View className="flex-1">
                <Badge variant="pending">Pendiente</Badge>
              </View>
            </View>
            <View>
              <DetailsTitle>Descripción</DetailsTitle>
              <DetailsInfo>
                Descripción detallada de lo que se tiene que hacer en el
                servicio. Incluye especificaciones técnicas de lo que se va a
                hacer y lo que se le vendió al cliente.
              </DetailsInfo>
            </View>
            <View>
              <DetailsTitle>Cantidad</DetailsTitle>
              <DetailsInfo>2</DetailsInfo>
            </View>
            <View>
              <DetailsTitle>Comentarios Adicionales</DetailsTitle>
              <DetailsInfo>Sin comentarios</DetailsInfo>
            </View>
          </View>
        </Card>

        {/* Horario */}
        <Card variant="normal">
          <View className="gap-3">
            <View className="flex-row gap-2 items-center">
              <ClockIcon color={COLOR} size={SIZE} />
              <CardTitle>Horario</CardTitle>
            </View>
            <View className="flex-row items-center">
              <View className="flex-1">
                <DetailsTitle>Inicio</DetailsTitle>
                <DetailsInfo>9:00 AM</DetailsInfo>
              </View>
              <View className="flex-1">
                <DetailsTitle>Fin</DetailsTitle>
                <DetailsInfo>12:00 PM</DetailsInfo>
              </View>
            </View>
          </View>
        </Card>

        {/* Información del Cliente */}
        <Card variant="normal">
          <View className="gap-3">
            <View className="flex-row gap-2 items-center">
              <UserIcon color={COLOR} size={SIZE} />
              <CardTitle>Información del Cliente</CardTitle>
            </View>
            <View>
              <DetailsTitle>Nombress</DetailsTitle>
              <DetailsInfo>Nombre del Cliente</DetailsInfo>
            </View>
            <View>
              <DetailsTitle>Teléfono</DetailsTitle>
              <DetailsInfo>9991988767</DetailsInfo>
            </View>
          </View>
        </Card>

        {/* Ubicación */}
        <Card variant="normal">
          <View className="gap-3">
            <View className="flex-row gap-2 items-center">
              <MapPinIcon color={COLOR} size={SIZE} />
              <CardTitle>Ubicación</CardTitle>
            </View>
            <View>
              <DetailsInfo>Ubicación completa del cliente</DetailsInfo>
            </View>
          </View>
        </Card>

        {/* Información de Tienda y Pago */}
        <Card variant="normal">
          <View className="gap-3">
            <View className="flex-row gap-2 items-center">
              <StoreIcon color={COLOR} size={SIZE} />
              <CardTitle>Información de Tienda y Pago</CardTitle>
            </View>
            <View>
              <DetailsTitle>Tienda</DetailsTitle>
              <DetailsInfo>Nombre de la tienda</DetailsInfo>
            </View>
            <View>
              <DetailsTitle>Teléfono</DetailsTitle>
              <DetailsInfo>9991988767</DetailsInfo>
            </View>
            <View>
              <DetailsTitle>Ganancia del Servicio</DetailsTitle>
              <DetailsInfo>$850</DetailsInfo>
            </View>
          </View>
        </Card>

        {/* Buttons section */}
        <View className="bg-white px-4 border-t border-gray-100 py-6 -mx-4">
          <View className="flex-row justify-between mb-1">
            <Text
              className="text-lg font-semibold"
              style={{ color: Colors.black.default }}
            >
              Estado del Servicio
            </Text>
            <Badge variant="pending">Pendiente</Badge>
          </View>
          {true && <PendingSwipeButton setScrollEnabled={setScrollEnabled} />}
          {true && <CompletedSwipeButton setScrollEnabled={setScrollEnabled} />}
        </View>
      </Screen>
    </>
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
    <Text className="text-base" style={{ color: Colors.black.default }}>
      {children}
    </Text>
  );
}
