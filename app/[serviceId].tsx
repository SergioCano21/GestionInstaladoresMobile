import Screen from "@/components/Screen";
import Badge from "@/components/ui/Badge";
import BottomActionBar from "@/components/ui/BottomActionBar";
import Card from "@/components/ui/Card";
import CardHeader from "@/components/ui/CardHeader";
import CardTitle from "@/components/ui/CardTitle";
import {
  ClockIcon,
  FileTextIcon,
  MapPinIcon,
  StoreIcon,
  UserIcon,
} from "@/components/ui/Icons";
import OverScrollBackground from "@/components/ui/OverScrollBackground";
import {
  CompletedSwipeButton,
  OnProcessSwipeButton,
  PendingSwipeButton,
} from "@/components/ui/SwipeButton";
import { Colors } from "@/constants/Colors";
import { Stack } from "expo-router";
import { useState } from "react";
import { Text, View } from "react-native";

const CARD_CONTENT_CLASSES = "gap-3";

export default function ServiceDetail() {
  const [scrollEnabled, setScrollEnabled] = useState(true);

  return (
    <>
      <Screen scrollEnabled={scrollEnabled}>
        <Stack.Screen options={{ headerTitle: "Detalles del Servicio" }} />
        {/* Información del Servicio */}
        <Card>
          <View className={CARD_CONTENT_CLASSES}>
            <CardHeader Icon={FileTextIcon}>
              Información del Servicio
            </CardHeader>
            <View className="flex-row items-center gap-2">
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
        <Card>
          <View className={CARD_CONTENT_CLASSES}>
            <CardHeader Icon={ClockIcon}>Horario</CardHeader>
            <View className="flex-row gap-2">
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
        <Card>
          <View className={CARD_CONTENT_CLASSES}>
            <CardHeader Icon={UserIcon}>Información del Cliente</CardHeader>
            <View>
              <DetailsTitle>Nombres</DetailsTitle>
              <DetailsInfo>Nombre del Cliente</DetailsInfo>
            </View>
            <View>
              <DetailsTitle>Teléfono</DetailsTitle>
              <DetailsInfo>9991988767</DetailsInfo>
            </View>
          </View>
        </Card>

        {/* Ubicación */}
        <Card>
          <View className={CARD_CONTENT_CLASSES}>
            <CardHeader Icon={MapPinIcon}>Ubicación</CardHeader>
            <View>
              <DetailsInfo>Ubicación completa del cliente</DetailsInfo>
            </View>
          </View>
        </Card>

        {/* Información de Tienda y Pago */}
        <Card>
          <View className={CARD_CONTENT_CLASSES}>
            <CardHeader Icon={StoreIcon}>
              Información de Tienda y Pago
            </CardHeader>
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

        {/* View to put the button on the bottom */}
        <View className="flex-1" />

        {/* Buttons section */}
        <BottomActionBar>
          <View className="flex-row justify-between mb-1">
            <CardTitle>Estado del Servicio</CardTitle>
            <Badge variant="pending">Pendiente</Badge>
          </View>
          {true && <OnProcessSwipeButton setScrollEnabled={setScrollEnabled} />}
          {true && <PendingSwipeButton setScrollEnabled={setScrollEnabled} />}
          {true && <CompletedSwipeButton setScrollEnabled={setScrollEnabled} />}

          {/* Extra bottom background */}
          <OverScrollBackground />
        </BottomActionBar>
      </Screen>
    </>
  );
}

function DetailsTitle({ children }: { children: React.ReactNode }) {
  return (
    <Text className="text-base" style={{ color: Colors.gray.dark }}>
      {children}
    </Text>
  );
}
function DetailsInfo({ children }: { children: React.ReactNode }) {
  return (
    <Text className="text-lg" style={{ color: Colors.black.default }}>
      {children}
    </Text>
  );
}
