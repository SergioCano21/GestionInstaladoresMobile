import { LinearGradient } from "expo-linear-gradient";
import { Text, TouchableOpacity, View } from "react-native";

const BORDER_RADIUS = 16;
const HEIGHT = 50;

export function PrimaryButton({
  children,
  onPress,
}: {
  children: React.ReactNode;
  onPress: () => void;
}) {
  return (
    <TouchableOpacity activeOpacity={0.7} onPress={onPress}>
      <LinearGradient
        colors={["#f96302", "#e55502"]}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 1 }}
        style={{
          borderRadius: BORDER_RADIUS,
          height: HEIGHT,
          justifyContent: "center",
        }}
      >
        <Text className="font-semibold text-lg text-white text-center align-middle">
          {children}
        </Text>
      </LinearGradient>
    </TouchableOpacity>
  );
}
export function DisabledButton({ children }: { children: React.ReactNode }) {
  return (
    <View
      className={`bg-gray-300 justify-center`}
      style={{ borderRadius: BORDER_RADIUS, height: HEIGHT }}
    >
      <Text className="font-semibold text-lg text-gray-500 text-center">
        {children}
      </Text>
    </View>
  );
}
export function SmallButton({
  children,
  onPress,
}: {
  children: React.ReactNode;
  onPress: () => void;
}) {
  return (
    <TouchableOpacity activeOpacity={0.7} onPress={onPress}>
      <Text className="py-1 px-3 rounded-md border border-gray-400">
        {children}
      </Text>
    </TouchableOpacity>
  );
}
export function RedButton({
  children,
  onPress,
}: {
  children: React.ReactNode;
  onPress: () => void;
}) {
  return (
    <TouchableOpacity
      activeOpacity={0.7}
      className={`bg-red-600 justify-center mb-4`}
      style={{ borderRadius: BORDER_RADIUS, height: HEIGHT }}
    >
      {children}
    </TouchableOpacity>
  );
}
