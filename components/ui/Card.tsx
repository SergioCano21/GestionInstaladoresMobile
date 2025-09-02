import { Colors } from "@/constants/Colors";
import { Text, View } from "react-native";

export function Card({
  children,
  variant,
}: {
  children: React.ReactNode;
  variant: "active" | "completed" | "normal";
}) {
  const borderClass = variant !== "normal" ? "border-l-4" : "";
  return (
    <View
      className={`p-5 rounded-xl mb-4 ${borderClass}`}
      style={{
        backgroundColor: Colors.white.default,
        borderLeftColor:
          variant === "active"
            ? Colors.primary.default
            : variant === "completed"
              ? Colors.green.medium
              : undefined,
      }}
    >
      {children}
    </View>
  );
}

export function CardTitle({ children }: { children: React.ReactNode }) {
  return (
    <View className="mb-1">
      <Text
        className="text-lg font-semibold"
        style={{ color: Colors.black.default }}
      >
        {children}
      </Text>
    </View>
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
