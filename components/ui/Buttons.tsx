import { LinearGradient } from "expo-linear-gradient";
import { Text, TouchableOpacity, View } from "react-native";
import LoadingSpinner from "./LoadingSpinner";

const BORDER_RADIUS = 16;
const HEIGHT = 50;

export function PrimaryButton({
  children,
  loading = false,
  onPress,
}: {
  children: React.ReactNode;
  loading?: boolean;
  onPress: () => void;
}) {
  return (
    <TouchableOpacity
      activeOpacity={0.7}
      onPress={onPress}
      disabled={loading}
      className={loading ? "opacity-70" : ""}
    >
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
        {loading ? (
          <LoadingSpinner color="#ffffff" />
        ) : (
          <Text className="font-semibold text-lg text-white text-center">
            {children}
          </Text>
        )}
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
  loading = false,
}: {
  children: React.ReactNode;
  onPress: () => void;
  loading?: boolean;
}) {
  return (
    <TouchableOpacity
      activeOpacity={0.7}
      className={`bg-red-600 justify-center mb-4 ${loading ? "opacity-70" : ""}`}
      style={{ borderRadius: BORDER_RADIUS, height: HEIGHT }}
      onPress={onPress}
      disabled={loading}
    >
      {loading ? (
        <LoadingSpinner color="#ffffff" />
      ) : (
        <Text className="font-semibold text-lg text-white text-center">
          {children}
        </Text>
      )}
    </TouchableOpacity>
  );
}
