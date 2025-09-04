import { Colors } from "@/constants/Colors";
import { SwipeButton } from "react-native-expo-swipe-button";
import { ChevronRightIcon } from "./Icons";
import { Alert, Dimensions } from "react-native";
import { useRouter } from "expo-router";

const WIDTH = Dimensions.get("window").width - 32;
const HEIGHT = 60;
const CIRCLE_SIZE = 60;
const BORDER_RADIUS = 16;
export function PendingSwipeButton({
  setScrollEnabled,
}: {
  setScrollEnabled: (enabled: boolean) => void;
}) {
  return (
    <SwipeButton
      Icon={<ChevronRightIcon size={40} color={Colors.white.default} />}
      height={HEIGHT}
      circleSize={CIRCLE_SIZE}
      width={WIDTH}
      borderRadius={BORDER_RADIUS}
      onSwipeStart={() => setScrollEnabled(false)}
      onSwipeEnd={() => setScrollEnabled(true)}
      onComplete={() => Alert.alert("Completed")}
      title="Iniciar Servicio"
      iconContainerStyle={{
        backgroundColor: Colors.yellow.default,
        borderRadius: BORDER_RADIUS,
      }}
      underlayStyle={{
        borderBottomLeftRadius: BORDER_RADIUS,
        borderTopLeftRadius: BORDER_RADIUS,
        backgroundColor: Colors.yellow.default,
      }}
      containerStyle={{ backgroundColor: Colors.yellow.background }}
      underlayTitle="En Proceso"
      underlayTitleStyle={{ color: Colors.white.default }}
      underlayTitleContainerStyle={{
        backgroundColor: Colors.yellow.default,
        borderRadius: BORDER_RADIUS,
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
      Icon={<ChevronRightIcon size={40} color={Colors.white.default} />}
      height={HEIGHT}
      width={WIDTH}
      circleSize={CIRCLE_SIZE}
      borderRadius={BORDER_RADIUS}
      goBackToStart={true}
      onSwipeStart={() => setScrollEnabled(false)}
      onSwipeEnd={() => setScrollEnabled(true)}
      onComplete={() => router.push("/evidences")}
      title="Completar Servicio"
      iconContainerStyle={{ backgroundColor: Colors.green.default }}
      underlayStyle={{
        backgroundColor: Colors.green.default,
        borderBottomLeftRadius: BORDER_RADIUS,
        borderTopLeftRadius: BORDER_RADIUS,
      }}
      containerStyle={{ backgroundColor: Colors.green.background }}
      underlayTitle="Completado"
      underlayTitleStyle={{ color: Colors.white.default }}
      underlayTitleContainerStyle={{
        backgroundColor: Colors.green.default,
        borderRadius: BORDER_RADIUS,
      }}
    />
  );
}
