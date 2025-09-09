import Screen from "@/components/Screen";
import BottomActionBar from "@/components/ui/BottomActionBar";
import {
  SmallButton,
  DisabledButton,
  PrimaryButton,
} from "@/components/ui/Buttons";
import Card from "@/components/ui/Card";
import CardHeader from "@/components/ui/CardHeader";
import CardTitle from "@/components/ui/CardTitle";
import { FileSignatureIcon, RotateCcwIcon } from "@/components/ui/Icons";
import OverScrollBackground from "@/components/ui/OverScrollBackground";
import { Stack } from "expo-router";
import { useRef, useState } from "react";
import { View, Text } from "react-native";
import SignatureCanvas from "react-native-signature-canvas";

export default function ClientSignature() {
  const [scrollEnabled, setScrollEnabled] = useState(true);
  const [canContinue, setCanContinue] = useState(false);
  const signatureRef = useRef<any>(null);

  const getCurrentDate = () => {
    const now = new Date();
    return now.toLocaleDateString("es-MX", {
      year: "numeric",
      month: "long",
      day: "numeric",
      hour: "2-digit",
      minute: "2-digit",
    });
  };

  const handleSignature = () => {
    console.log("Tiene algo");
  };
  const handleClear = () => {
    signatureRef.current?.clearSignature();
    setCanContinue(false);
  };

  return (
    <Screen scrollEnabled={scrollEnabled}>
      <Stack.Screen options={{ headerTitle: "Aceptación de Servicio" }} />

      {/* Information of the Service */}
      <Card>
        <View className="gap-3 items-center">
          <CardTitle>Confirmación de Término de Servicio</CardTitle>
          <Text className="text-gray-600">
            <Text className="font-bold">Cliente registrado:</Text> NOMBRE
            CLIENTE
          </Text>
          <Text className="text-gray-600">
            <Text className="font-bold">Fecha:</Text> {getCurrentDate()}
          </Text>
          <Text className="text-gray-600">
            <Text className="font-bold">Folio de Servicio:</Text> #1234
          </Text>
        </View>
      </Card>

      {/* Confirmation */}
      <Card variant="green">
        <View className=" gap-2">
          <Text className="text-green-900 font-medium text-lg">
            Al firmar, usted confirma que:
          </Text>
          <Text className="text-green-800 text-base">
            {"\u2022"} El servicio fue completado satisfactoriamente{"\n"}
            {"\u2022"} Los productos fueron instalados correctamente{"\n"}
            {"\u2022"} Está conforme con el trabajo realizado
          </Text>
        </View>
      </Card>

      {/* Signature */}
      <Card>
        <View className="gap-3">
          <View className="flex-row justify-between">
            <CardHeader Icon={FileSignatureIcon}>Firma</CardHeader>
            <SmallButton onPress={handleClear}>
              <View className="flex-row gap-2 items-center">
                <RotateCcwIcon color={"#4b5563"} size={14} />
                <Text className="text-base text-gray-600 text-center">
                  Limpiar
                </Text>
              </View>
            </SmallButton>
          </View>
          <Card variant="dashed-gray">
            <View className="w-full h-64 rounded-lg overflow-hidden bg-white">
              <SignatureCanvas
                ref={signatureRef}
                onOK={handleSignature}
                onBegin={() => {
                  setScrollEnabled(false);
                  setCanContinue(true);
                }}
                onEnd={() => setScrollEnabled(true)}
              />
            </View>
          </Card>
        </View>
      </Card>

      {/* View to put the button on the bottom */}
      <View className="flex-1" />

      {/* Button continue */}
      <BottomActionBar>
        {canContinue ? (
          <PrimaryButton onPress={() => signatureRef.current?.readSignature()}>
            Finalizar Servicio
          </PrimaryButton>
        ) : (
          <DisabledButton>Finalizar Servicio</DisabledButton>
        )}

        {/* Extra bottom background */}
        <OverScrollBackground />
      </BottomActionBar>
    </Screen>
  );
}
