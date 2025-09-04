import { Colors } from "@/constants/Colors";
import { Text, View, ViewStyle } from "react-native";

export function Card({
  children,
  variant = "normal",
  classes = "",
  style = {},
}: {
  children: React.ReactNode;
  variant?: "active" | "completed" | "normal";
  classes?: string;
  style?: ViewStyle;
}) {
  const borderClass = variant !== "normal" ? "border-l-4" : "";
  return (
    <View
      className={`p-5 rounded-xl mb-4 ${borderClass} ${classes}`}
      style={{
        backgroundColor: Colors.white.default,
        borderLeftColor:
          variant === "active"
            ? Colors.primary.default
            : variant === "completed"
              ? Colors.green.medium
              : undefined,
        ...style,
      }}
    >
      {children}
    </View>
  );
}

export function CardTitle({ children }: { children: React.ReactNode }) {
  return (
    <Text
      className="text-lg font-semibold"
      style={{ color: Colors.black.default }}
    >
      {children}
    </Text>
  );
}

export function CardHighlight({ children }: { children: React.ReactNode }) {
  return (
    <Text
      className="text-xl font-bold"
      style={{ color: Colors.primary.default }}
    >
      {children}
    </Text>
  );
}
