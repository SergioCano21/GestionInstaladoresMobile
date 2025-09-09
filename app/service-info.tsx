import Screen from "@/components/Screen";
import BottomActionBar from "@/components/ui/BottomActionBar";
import { DisabledButton, PrimaryButton } from "@/components/ui/Buttons";
import Card from "@/components/ui/Card";
import CardHeader from "@/components/ui/CardHeader";
import {
  CalendarIcon,
  FileTextIcon,
  PackageIcon,
  UserIcon,
  WrenchIcon,
} from "@/components/ui/Icons";
import OverScrollBackground from "@/components/ui/OverScrollBackground";
import { Stack, useRouter } from "expo-router";
import { View } from "react-native";
import {
  InputNumber,
  InputText,
  Label,
  InputTime,
  InputTextArea,
} from "@/components/ui/Inputs";
import NoticeCard from "@/components/NoticeCard";

const CARD_CONTENT_CLASSES = "gap-3";
const INPUT_CONTENT_CLASSES = "gap-1";

export default function ServiceInfo() {
  const router = useRouter();

  const goToClientInfo = () => {
    router.push("/client-info");
  };

  return (
    <Screen>
      <Stack.Screen options={{ headerTitle: "Información del Servicio" }} />

      {/* Fecha del Sevicio */}
      <Card>
        <View className={CARD_CONTENT_CLASSES}>
          <CardHeader Icon={CalendarIcon}>Fecha del Servicio</CardHeader>
          <View className="flex-row gap-4">
            <View className={`flex-1 ${INPUT_CONTENT_CLASSES}`}>
              <Label>Fecha de Inicio *</Label>
              <InputTime />
            </View>
            <View className={`flex-1 ${INPUT_CONTENT_CLASSES}`}>
              <Label>Fecha Final *</Label>
              <InputTime />
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
            <InputText placeholder="Nombre de quien realizó la instalación" />
          </View>
        </View>
      </Card>

      {/* Información del Producto */}
      <Card>
        <View className={CARD_CONTENT_CLASSES}>
          <CardHeader Icon={PackageIcon}>Información del Producto</CardHeader>
          <View className={INPUT_CONTENT_CLASSES}>
            <Label>Producto Instalado *</Label>
            <InputText placeholder="Ej. Aire acondicionado, ventilador de techo, etc." />
          </View>
          <View className={INPUT_CONTENT_CLASSES}>
            <Label>Donde se Instaló *</Label>
            <InputText placeholder="Ej. Sala principal, comedor, etc." />
          </View>
          <View className={INPUT_CONTENT_CLASSES}>
            <Label>Cantidad *</Label>
            <InputNumber placeholder="Cantidad de unidades instaladas" />
          </View>
          <View className={INPUT_CONTENT_CLASSES}>
            <Label>Especificación del Producto *</Label>
            <InputText placeholder="Ej. Modelo o Marca" />
          </View>
          <View className={INPUT_CONTENT_CLASSES}>
            <Label>Número de Serie (si aplica)</Label>
            <InputText placeholder="Número de serie del producto" />
          </View>
        </View>
      </Card>

      {/* Recomendaciones */}
      <Card>
        <View className={CARD_CONTENT_CLASSES}>
          <CardHeader Icon={WrenchIcon}>Recomendaciones</CardHeader>
          <View className={INPUT_CONTENT_CLASSES}>
            <Label>Recomendaciones de Uso</Label>
            <InputTextArea placeholder="Recomendaciones para el uso y mantenimiento del producto instalado..." />
          </View>
        </View>
      </Card>

      <NoticeCard
        Icon={FileTextIcon}
        title="Campos Requeridos"
        content="Los campos marcados con (*) son obligatorios para completar el registro del servicio."
      />

      {/* View to put the button on the bottom */}
      <View className="flex-1" />

      {/* Button continue */}
      <BottomActionBar>
        {false ? (
          <DisabledButton>Continuar</DisabledButton>
        ) : (
          <PrimaryButton onPress={goToClientInfo}>Continuar</PrimaryButton>
        )}

        {/* Extra bottom background */}
        <OverScrollBackground />
      </BottomActionBar>
    </Screen>
  );
}
