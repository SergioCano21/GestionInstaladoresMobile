import NoticeCard from "@/components/NoticeCard";
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
import {
  InputArrayText,
  InputDate,
  InputText,
  InputTextArea,
  Label,
} from "@/components/ui/Inputs";
import OverScrollBackground from "@/components/ui/OverScrollBackground";
import { useFormData } from "@/provider/FormProvider";
import { InstalledProduct } from "@/types/types";
import { Stack, useRouter } from "expo-router";
import { useEffect, useState } from "react";
import { View } from "react-native";

const CARD_CONTENT_CLASSES = "gap-3";
const INPUT_CONTENT_CLASSES = "gap-1";

export default function ServiceInfo() {
  const router = useRouter();
  const { data, setData } = useFormData();
  const [canContinue, setCanContinue] = useState(false);

  const goToClientInfo = () => {
    router.push("./client-info");
  };

  const updateProductInfo = (
    field: keyof InstalledProduct,
    value: string | number
  ) => {
    setData((prev) => {
      const products = [...prev.installedProduct];

      if (!products[0]) {
        products[0] = {};
      }

      products[0] = {
        ...products[0],
        [field]: value,
      };

      return {
        ...prev,
        installedProduct: products,
      };
    });
  };

  useEffect(() => {
    const isValid =
      data.startTime &&
      data.endTime &&
      data.installerName &&
      data.recommendations &&
      data.installedProduct.length > 0 &&
      data.installedProduct.every(
        (product) =>
          product.installedProduct &&
          product.installedIn &&
          product.quantity &&
          product.specification
      );

    setCanContinue(Boolean(isValid));
  }, [data]);

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
              <InputDate
                name={"startTime"}
                setValue={setData}
                value={data.startTime ?? null}
              />
            </View>
            <View className={`flex-1 ${INPUT_CONTENT_CLASSES}`}>
              <Label>Fecha Final *</Label>
              <InputDate
                name={"endTime"}
                setValue={setData}
                value={data.endTime ?? null}
              />
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
            <InputText
              name={"installerName"}
              setValue={setData}
              value={data.installerName}
              placeholder="Nombre de quien realizó la instalación"
            />
          </View>
        </View>
      </Card>

      {/* Información del Producto */}
      <Card>
        <View className={CARD_CONTENT_CLASSES}>
          <CardHeader Icon={PackageIcon}>Información del Producto</CardHeader>
          <View className={INPUT_CONTENT_CLASSES}>
            <Label>Producto Instalado *</Label>
            <InputArrayText
              name={"installedProduct"}
              setValue={updateProductInfo}
              value={data.installedProduct[0].installedProduct}
              placeholder="Ej. Aire acondicionado, ventilador de techo, etc."
            />
          </View>
          <View className={INPUT_CONTENT_CLASSES}>
            <Label>Donde se Instaló *</Label>
            <InputArrayText
              name={"installedIn"}
              setValue={updateProductInfo}
              value={data.installedProduct[0].installedIn}
              placeholder="Ej. Sala principal, comedor, etc."
            />
          </View>
          <View className={INPUT_CONTENT_CLASSES}>
            <Label>Cantidad *</Label>
            <InputArrayText
              name={"quantity"}
              type="number"
              setValue={updateProductInfo}
              value={data.installedProduct[0].quantity}
              placeholder="Cantidad de unidades instaladas"
            />
          </View>
          <View className={INPUT_CONTENT_CLASSES}>
            <Label>Especificación del Producto *</Label>
            <InputArrayText
              name={"specification"}
              setValue={updateProductInfo}
              value={data.installedProduct[0].specification}
              placeholder="Ej. Modelo o Marca"
            />
          </View>
          <View className={INPUT_CONTENT_CLASSES}>
            <Label>Número de Serie (si aplica)</Label>
            <InputArrayText
              name={"serialNumber"}
              setValue={updateProductInfo}
              value={data.installedProduct[0].serialNumber}
              placeholder="Número de serie del producto"
            />
          </View>
        </View>
      </Card>

      {/* Recomendaciones */}
      <Card>
        <View className={CARD_CONTENT_CLASSES}>
          <CardHeader Icon={WrenchIcon}>Recomendaciones</CardHeader>
          <View className={INPUT_CONTENT_CLASSES}>
            <Label>Recomendaciones de Uso *</Label>
            <InputTextArea
              name={"recommendations"}
              value={data.recommendations}
              setValue={setData}
              placeholder="Recomendaciones para el uso y mantenimiento del producto instalado..."
            />
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
        {canContinue ? (
          <PrimaryButton onPress={goToClientInfo}>Continuar</PrimaryButton>
        ) : (
          <DisabledButton>Continuar</DisabledButton>
        )}

        {/* Extra bottom background */}
        <OverScrollBackground />
      </BottomActionBar>
    </Screen>
  );
}
