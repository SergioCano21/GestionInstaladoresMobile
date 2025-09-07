import Screen from "@/components/Screen";
import BottomActionBar from "@/components/ui/BottomActionBar";
import { DisabledButton, PrimaryButton } from "@/components/ui/Buttons";
import Card from "@/components/ui/Card";
import CardHeader from "@/components/ui/CardHeader";
import {
  CalendarIcon,
  PackageIcon,
  UserIcon,
  WrenchIcon,
} from "@/components/ui/Icons";
import OverScrollBackground from "@/components/ui/OverScrollBackground";
import { Colors } from "@/constants/Colors";
import { Stack } from "expo-router";
import { View, Text, TextInput } from "react-native";

const CARD_CONTENT_CLASSES = "gap-3";
const INPUT_CONTENT_CLASSES = "gap-1";

export default function ServiceInfo() {
  return (
    <Screen>
      <Stack.Screen options={{ headerTitle: "Información del Servicio" }} />

      {/* Fecha del Sevicio */}
      <Card>
        <View className={CARD_CONTENT_CLASSES}>
          <CardHeader Icon={CalendarIcon}>Fecha del Servicio</CardHeader>
          <View className="flex-row gap-2">
            <View className="flex-1 gap-1">
              <Label>Fecha de Inicio *</Label>
            </View>
            <View className="flex-1">
              <Label>Fecha Final *</Label>
            </View>
          </View>
        </View>
      </Card>

      {/* Información del Instalador */}
      <Card>
        <View className={CARD_CONTENT_CLASSES}>
          <CardHeader Icon={UserIcon}>Información del Instalador</CardHeader>
          <View className={INPUT_CONTENT_CLASSES}>
            <Label>Nombre del Instalador *</Label>
            <Input placeholder="Nombre de quien realizó la instalación" />
          </View>
        </View>
      </Card>

      {/* Información del Producto */}
      <Card>
        <View className={CARD_CONTENT_CLASSES}>
          <CardHeader Icon={PackageIcon}>Información del Producto</CardHeader>
          <View>
            <Label>Producto Instalado *</Label>
            <Input placeholder="Ej. Aire acondicionado, ventilador de techo, etc." />
          </View>
          <View>
            <Label>Donde se Instaló *</Label>
            <Input placeholder="Ej. Sala principal, comedor, etc." />
          </View>
          <View>
            <Label>Cantidad *</Label>
          </View>
          <View>
            <Label>Especificación del Producto *</Label>
            <Input placeholder="Ej. Modelo o Marca" />
          </View>
          <View>
            <Label>Número de Serie (si aplica)</Label>
            <Input placeholder="Número de serie del producto" />
          </View>
        </View>
      </Card>

      {/* Recomendaciones */}
      <Card>
        <View className={CARD_CONTENT_CLASSES}>
          <CardHeader Icon={WrenchIcon}>Recomendaciones</CardHeader>
          <View>
            <Label>Recomendaciones de Uso</Label>
          </View>
        </View>
      </Card>

      {/* View to put the button on the bottom */}
      <View className="flex-1" />

      {/* Button continue */}
      <BottomActionBar>
        {true ? (
          <DisabledButton>Continuar</DisabledButton>
        ) : (
          <PrimaryButton onPress={() => null}>Continuar</PrimaryButton>
        )}

        {/* Extra bottom background */}
        <OverScrollBackground />
      </BottomActionBar>
    </Screen>
  );
}

function Label({ children }: { children: React.ReactNode }) {
  return (
    <Text
      className="font-medium text-base"
      style={{ color: Colors.black.default }}
    >
      {children}
    </Text>
  );
}
function Input({ placeholder }: { placeholder: string }) {
  return (
    <TextInput
      className="h-12 px-3 text-lg bg-gray-100 rounded-md text-gray-900 border-2 border-gray-100 focus:border-gray-500"
      style={{
        lineHeight: 20,
      }}
      placeholder={placeholder}
      placeholderTextColor={"#6b7280"}
    />
  );
}
