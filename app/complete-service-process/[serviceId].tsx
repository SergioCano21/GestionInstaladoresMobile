import { apiUpdateService } from "@/api/services";
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
  SwipeToCompleteButton,
  SwipeToDoingButton,
  SwipeToTodoButton,
} from "@/components/ui/SwipeButton";
import { Colors } from "@/constants/Colors";
import { QUERY_KEYS, STATUS } from "@/constants/Constants";
import { useFormData } from "@/provider/FormProvider";
import { Service, Status } from "@/types/types";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { Stack, useLocalSearchParams, useRouter } from "expo-router";
import { useState } from "react";
import { Alert, Text, View } from "react-native";

const CARD_CONTENT_CLASSES = "gap-3";

export default function ServiceDetail() {
  const [scrollEnabled, setScrollEnabled] = useState(true);
  const { serviceId } = useLocalSearchParams();
  const queryClient = useQueryClient();
  const router = useRouter();
  const [resetKey, setResetKey] = useState<number>(0);
  const { setData, resetData } = useFormData();

  const service = queryClient
    .getQueryData<Service[]>([QUERY_KEYS.SERVICES, QUERY_KEYS.ACTIVE])
    ?.find((s) => s._id === serviceId);

  const mutation = useMutation({
    mutationFn: apiUpdateService,
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: [QUERY_KEYS.SERVICES, QUERY_KEYS.ACTIVE],
      });
    },
  });

  const handleUpdate = async (status: Status) => {
    try {
      if (mutation.isPending) return;
      await mutation.mutateAsync({ id: serviceId as string, status });
      router.dismiss();
    } catch (error: any) {
      Alert.alert("Ocurrió un error", error.message);
    } finally {
      setResetKey((prev) => prev + 1);
    }
  };

  const handleComplete = () => {
    resetData();
    setData((prev) => ({
      ...prev,
      clientName: service?.client,
      folio: service?.folio,
    }));
    router.push("./photo-evidences");
  };

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
                <DetailsInfo>#{service?.folio}</DetailsInfo>
              </View>
              <View className="flex-1">
                {service?.status === STATUS.TODO && (
                  <Badge variant="todo">Pendiente</Badge>
                )}
                {service?.status === STATUS.DOING && (
                  <Badge variant="doing">En Proceso</Badge>
                )}
              </View>
            </View>
            <View>
              <DetailsTitle>Descripción</DetailsTitle>
              <DetailsInfo>{service?.jobDetails[0].description}</DetailsInfo>
            </View>
            <View>
              <DetailsTitle>Cantidad</DetailsTitle>
              <DetailsInfo>{service?.jobDetails[0].quantity}</DetailsInfo>
            </View>
            <View>
              <DetailsTitle>Comentarios Adicionales</DetailsTitle>
              <DetailsInfo>{service?.additionalComments}</DetailsInfo>
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
                <DetailsInfo>
                  {service?.schedule.startTime ?? "Sin Asignar"}
                </DetailsInfo>
              </View>
              <View className="flex-1">
                <DetailsTitle>Fin</DetailsTitle>
                <DetailsInfo>
                  {service?.schedule.endTime ?? "Sin Asignar"}
                </DetailsInfo>
              </View>
            </View>
          </View>
        </Card>

        {/* Información del Cliente */}
        <Card>
          <View className={CARD_CONTENT_CLASSES}>
            <CardHeader Icon={UserIcon}>Información del Cliente</CardHeader>
            <View>
              <DetailsTitle>Nombre</DetailsTitle>
              <DetailsInfo>{service?.client}</DetailsInfo>
            </View>
            <View>
              <DetailsTitle>Teléfono</DetailsTitle>
              <DetailsInfo>{service?.clientPhone}</DetailsInfo>
            </View>
          </View>
        </Card>

        {/* Ubicación */}
        <Card>
          <View className={CARD_CONTENT_CLASSES}>
            <CardHeader Icon={MapPinIcon}>Ubicación</CardHeader>
            <View>
              <DetailsInfo>{service?.address}</DetailsInfo>
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
              <DetailsInfo>
                #{service?.store.numStore} {service?.store.name}
              </DetailsInfo>
            </View>
            <View>
              <DetailsTitle>Teléfono</DetailsTitle>
              <DetailsInfo>{service?.store.phone}</DetailsInfo>
            </View>
            <View>
              <DetailsTitle>Ganancia del Servicio</DetailsTitle>
              <DetailsInfo>${service?.totals.installerPayment}</DetailsInfo>
            </View>
          </View>
        </Card>

        {/* View to put the button on the bottom */}
        <View className="flex-1" />

        {/* Buttons section */}

        <BottomActionBar>
          <View className="flex-row justify-between mb-1">
            <CardTitle>Estado del Servicio</CardTitle>
            {service?.status === STATUS.TODO && (
              <Badge variant="todo">Pendiente</Badge>
            )}
            {service?.status === STATUS.DOING && (
              <Badge variant="doing">En Proceso</Badge>
            )}
          </View>
          <View
            pointerEvents={mutation.isPending ? "none" : "auto"}
            key={resetKey}
          >
            {service?.status === STATUS.TODO && (
              <SwipeToDoingButton
                loading={mutation.isPending}
                onComplete={() => handleUpdate("Doing")}
                setScrollEnabled={setScrollEnabled}
              />
            )}
            {service?.status === STATUS.DOING && (
              <SwipeToTodoButton
                loading={mutation.isPending}
                onComplete={() => handleUpdate("To Do")}
                setScrollEnabled={setScrollEnabled}
              />
            )}
            {service?.status === STATUS.DOING && (
              <SwipeToCompleteButton
                loading={mutation.isPending}
                onComplete={handleComplete}
                setScrollEnabled={setScrollEnabled}
              />
            )}
          </View>

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
