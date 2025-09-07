import { Colors } from "@/constants/Colors";
import { SwipeButton } from "react-native-expo-swipe-button";
import { ChevronRightIcon } from "./Icons";
import { Alert, Dimensions, View } from "react-native";
import { useRouter } from "expo-router";

const WIDTH = Dimensions.get("window").width - 32;
const HEIGHT = 50;
const CIRCLE_SIZE = 50;
const BORDER_RADIUS = 16;
const ICON_SIZE = 35;

export function PendingSwipeButton({
  setScrollEnabled,
}: {
  setScrollEnabled: (enabled: boolean) => void;
}) {
  return (
    <SwipeButton
      Icon={
        <View className="pl-3">
          <ChevronRightIcon size={ICON_SIZE} color={Colors.white.default} />
        </View>
      }
      height={HEIGHT}
      circleSize={CIRCLE_SIZE}
      width={WIDTH}
      borderRadius={BORDER_RADIUS}
      onSwipeStart={() => setScrollEnabled(false)}
      onSwipeEnd={() => setScrollEnabled(true)}
      onComplete={() => Alert.alert("Pendiente")}
      title="Regresar a Pendiente"
      titleStyle={{
        fontSize: 16,
        fontWeight: "600",
        color: Colors.white.default,
      }}
      underlayTitle="Pendiente"
      underlayTitleStyle={{
        fontSize: 16,
        fontWeight: "600",
        color: Colors.white.default,
      }}
      iconContainerStyle={{ backgroundColor: Colors.gray.default }}
      containerGradientProps={{
        colors: [Colors.gray.start, Colors.gray.end],
        start: [0, 0.5],
        end: [1, 0.5],
      }}
      underlayStyle={{
        borderBottomLeftRadius: BORDER_RADIUS,
        borderBottomRightRadius: BORDER_RADIUS,
        borderTopLeftRadius: BORDER_RADIUS,
        borderTopRightRadius: BORDER_RADIUS,
      }}
      underlayContainerGradientProps={{
        colors: [Colors.gray.startUnderlay, Colors.gray.endUnderlay],
        start: [0, 0.5],
        end: [0.8, 0.5],
      }}
    />
  );
}

export function OnProcessSwipeButton({
  setScrollEnabled,
}: {
  setScrollEnabled: (enabled: boolean) => void;
}) {
  return (
    <SwipeButton
      Icon={
        <View className="pl-3">
          <ChevronRightIcon size={ICON_SIZE} color={Colors.white.default} />
        </View>
      }
      height={HEIGHT}
      circleSize={CIRCLE_SIZE}
      width={WIDTH}
      borderRadius={BORDER_RADIUS}
      onSwipeStart={() => setScrollEnabled(false)}
      onSwipeEnd={() => setScrollEnabled(true)}
      onComplete={() => Alert.alert("Proceso")}
      title="Iniciar Servicio"
      titleStyle={{
        fontSize: 16,
        fontWeight: "600",
        color: Colors.white.default,
      }}
      underlayTitle="En Proceso"
      underlayTitleStyle={{
        fontSize: 16,
        fontWeight: "600",
        color: Colors.white.default,
      }}
      iconContainerStyle={{ backgroundColor: Colors.yellow.default }}
      containerGradientProps={{
        colors: [Colors.yellow.start, Colors.yellow.end],
        start: [0, 0.5],
        end: [1, 0.5],
      }}
      underlayStyle={{
        borderBottomLeftRadius: BORDER_RADIUS,
        borderBottomRightRadius: BORDER_RADIUS,
        borderTopLeftRadius: BORDER_RADIUS,
        borderTopRightRadius: BORDER_RADIUS,
      }}
      underlayContainerGradientProps={{
        colors: [Colors.yellow.startUnderlay, Colors.yellow.endUnderlay],
        start: [0, 0.5],
        end: [0.8, 0.5],
      }}
    />
  );
}

export function CompletedSwipeButton({
  setScrollEnabled,
}: {
  setScrollEnabled: (enabled: boolean) => void;
}) {
  const router = useRouter();
  return (
    <SwipeButton
      Icon={
        <View className="pl-3">
          <ChevronRightIcon size={ICON_SIZE} color={Colors.white.default} />
        </View>
      }
      height={HEIGHT}
      width={WIDTH}
      circleSize={CIRCLE_SIZE}
      borderRadius={BORDER_RADIUS}
      goBackToStart={true}
      onSwipeStart={() => setScrollEnabled(false)}
      onSwipeEnd={() => setScrollEnabled(true)}
      onComplete={() => router.push("/photo-evidences")}
      title="Completar Servicio"
      titleStyle={{
        fontSize: 16,
        fontWeight: "600",
        color: Colors.white.default,
      }}
      underlayTitle="Completado"
      underlayTitleStyle={{
        fontSize: 16,
        fontWeight: "600",
        color: Colors.white.default,
      }}
      iconContainerStyle={{ backgroundColor: Colors.green.default }}
      containerGradientProps={{
        colors: [Colors.green.start, Colors.green.end],
        start: [0, 0.5],
        end: [1, 0.5],
      }}
      underlayStyle={{
        borderBottomLeftRadius: BORDER_RADIUS,
        borderBottomRightRadius: BORDER_RADIUS,
        borderTopLeftRadius: BORDER_RADIUS,
        borderTopRightRadius: BORDER_RADIUS,
      }}
      underlayContainerGradientProps={{
        colors: [Colors.green.startUnderlay, Colors.green.endUnderlay],
        start: [0, 0.5],
        end: [0.8, 0.5],
      }}
    />
  );
}
