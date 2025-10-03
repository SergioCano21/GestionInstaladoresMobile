import NoticeCard from "@/components/NoticeCard";
import Screen from "@/components/Screen";
import BottomActionBar from "@/components/ui/BottomActionBar";
import { DisabledButton, PrimaryButton } from "@/components/ui/Buttons";
import Card from "@/components/ui/Card";
import CardHeader from "@/components/ui/CardHeader";
import {
  MailIcon,
  MessageSquareIcon,
  UserCheckIcon,
  UserIcon,
} from "@/components/ui/Icons";
import { InputText, InputTextArea, Label } from "@/components/ui/Inputs";
import OverScrollBackground from "@/components/ui/OverScrollBackground";
import { Colors } from "@/constants/Colors";
import { useFormData } from "@/provider/FormProvider";
import { Stack, useRouter } from "expo-router";
import { useEffect, useState } from "react";
import { Switch, Text, View } from "react-native";

const CARD_CONTENT_CLASSES = "gap-3";
const INPUT_CONTENT_CLASSES = "gap-1";

export default function ClientInfo() {
  const router = useRouter();
  const { data, setData } = useFormData();
  const [isClient, setIsClient] = useState(true);
  const [canContinue, setCanContinue] = useState(false);

  const goToClientSignature = () => {
    router.push("./client-signature");
  };

  useEffect(() => {
    const isValid =
      data.clientEmail &&
      data.clientComments &&
      (isClient || (data.secondaryClientName && data.relationshipWithClient));

    setCanContinue(Boolean(isValid));
  }, [data, isClient]);

  return (
    <Screen>
      <Stack.Screen options={{ headerTitle: "Información del Cliente" }} />

      {/* Client Email */}
      <Card>
        <View className={CARD_CONTENT_CLASSES}>
          <CardHeader Icon={MailIcon}>Correo electrónico</CardHeader>
          <View className={INPUT_CONTENT_CLASSES}>
            <Label>Correo electrónico *</Label>
            <InputText
              type="email"
              name={"clientEmail"}
              setValue={setData}
              value={data.clientEmail}
              placeholder="example@gmail.com"
            />
          </View>
        </View>
      </Card>

      {/* Client Experience */}
      <Card>
        <View className={CARD_CONTENT_CLASSES}>
          <CardHeader Icon={MessageSquareIcon}>
            Experiencia del Cliente
          </CardHeader>
          <View className={INPUT_CONTENT_CLASSES}>
            <Label>Comentarios sobre su experiencia con el servicio *</Label>
            <InputTextArea
              name={"clientComments"}
              setValue={setData}
              value={data.clientComments}
              placeholder="Describe tu experiencia con el servicio de instalación. ¿Alguna sugerencia?"
            />
          </View>
        </View>
      </Card>

      {/* Identity Confirmation */}
      <Card>
        <View className={CARD_CONTENT_CLASSES}>
          <CardHeader Icon={UserCheckIcon}>
            Verificación de Identidad
          </CardHeader>
          <View className="py-3 px-3 leading-5 text-lg bg-gray-100 rounded-md text-gray-900 border-2 border-gray-100 justify-center">
            <Text className="text-gray-700">
              <Text className="font-bold">Cliente registrado: </Text>
              {data.clientName}
            </Text>
          </View>
          <View className="flex-row items-center gap-3">
            <Switch
              value={isClient}
              onValueChange={() => setIsClient((prev) => !prev)}
              trackColor={{ true: Colors.black.default }}
              style={{ transform: [{ scaleX: 0.9 }, { scaleY: 0.9 }] }}
            />
            <Label>Soy {data.clientName} (el cliente registrado)</Label>
          </View>

          {/* Client relationship with registered client */}
          {!isClient && (
            <Card variant="yellow">
              <View className={CARD_CONTENT_CLASSES}>
                <View className={INPUT_CONTENT_CLASSES}>
                  <Label>Su nombre completo *</Label>
                  <InputText
                    name={"secondaryClientName"}
                    setValue={setData}
                    value={data.secondaryClientName}
                    placeholder="Nombre completo"
                  />
                </View>
                <View className={INPUT_CONTENT_CLASSES}>
                  <Label>Cuál es su relación con {data.clientName} *</Label>
                  <InputText
                    name={"relationshipWithClient"}
                    setValue={setData}
                    value={data.relationshipWithClient}
                    placeholder="Ej. Esposo/a, Hijo/a, Inquilino/a, etc."
                  />
                </View>
              </View>
            </Card>
          )}
        </View>
      </Card>

      {/* Important Info */}
      <NoticeCard
        Icon={UserIcon}
        title="Información Importante"
        content="Sus comentarios y evaluación nos ayudan a mantener la calidad de nuestros servicios."
      />

      {/* View to put the button on the bottom */}
      <View className="flex-1" />

      {/* Button continue */}
      <BottomActionBar>
        {canContinue ? (
          <PrimaryButton onPress={goToClientSignature}>Continuar</PrimaryButton>
        ) : (
          <DisabledButton>Continuar</DisabledButton>
        )}

        {/* Extra bottom background */}
        <OverScrollBackground />
      </BottomActionBar>
    </Screen>
  );
}
