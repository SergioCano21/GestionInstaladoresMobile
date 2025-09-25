import { Colors } from "@/constants/Colors";
import { Dimensions, View } from "react-native";
import { SwipeButton } from "react-native-expo-swipe-button";
import { ChevronRightIcon } from "./Icons";
import LoadingSpinner from "./LoadingSpinner";

const WIDTH = Dimensions.get("window").width - 32;
const HEIGHT = 50;
const CIRCLE_SIZE = 50;
const BORDER_RADIUS = 16;
const ICON_SIZE = 35;

export function SwipeToTodoButton({
  setScrollEnabled,
  onComplete,
  loading,
}: {
  setScrollEnabled: (enabled: boolean) => void;
  onComplete: () => void;
  loading: boolean;
}) {
  return (
    <SwipeButton
      Icon={
        <View className="pl-3">
          <ChevronRightIcon size={ICON_SIZE} color={Colors.white.default} />
        </View>
      }
      goBackToStart={false}
      height={HEIGHT}
      circleSize={CIRCLE_SIZE}
      width={WIDTH}
      borderRadius={BORDER_RADIUS}
      onSwipeStart={() => setScrollEnabled(false)}
      onSwipeEnd={() => setScrollEnabled(true)}
      onComplete={onComplete}
      containerStyle={{ opacity: 1 }}
      title="Regresar a Pendiente"
      titleStyle={{
        fontSize: 16,
        fontWeight: "600",
        color: Colors.white.default,
      }}
      underlayTitleElement={loading ? <LoadingSpinner color="#fff" /> : null}
      underlayTitle={"Pendiente"}
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

export function SwipeToDoingButton({
  setScrollEnabled,
  onComplete,
  loading,
}: {
  setScrollEnabled: (enabled: boolean) => void;
  onComplete: () => void;
  loading: boolean;
}) {
  return (
    <SwipeButton
      Icon={
        <View className="pl-3">
          <ChevronRightIcon size={ICON_SIZE} color={Colors.white.default} />
        </View>
      }
      goBackToStart={false}
      height={HEIGHT}
      circleSize={CIRCLE_SIZE}
      width={WIDTH}
      borderRadius={BORDER_RADIUS}
      onSwipeStart={() => setScrollEnabled(false)}
      onSwipeEnd={() => setScrollEnabled(true)}
      onComplete={onComplete}
      title="Iniciar Servicio"
      titleStyle={{
        fontSize: 16,
        fontWeight: "600",
        color: Colors.white.default,
      }}
      underlayTitle="En Proceso"
      underlayTitleElement={loading ? <LoadingSpinner color="#fff" /> : null}
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

export function SwipeToCompleteButton({
  setScrollEnabled,
  onComplete,
  loading,
}: {
  setScrollEnabled: (enabled: boolean) => void;
  onComplete: () => void;
  loading: boolean;
}) {
  return (
    <SwipeButton
      Icon={
        <View className="pl-3">
          <ChevronRightIcon size={ICON_SIZE} color={Colors.white.default} />
        </View>
      }
      goBackToStart={true}
      height={HEIGHT}
      width={WIDTH}
      circleSize={CIRCLE_SIZE}
      borderRadius={BORDER_RADIUS}
      onSwipeStart={() => setScrollEnabled(false)}
      onSwipeEnd={() => setScrollEnabled(true)}
      onComplete={onComplete}
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
