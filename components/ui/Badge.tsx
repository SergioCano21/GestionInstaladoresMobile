import { Colors } from "@/constants/Colors";
import { Text } from "react-native";

const badgeConfig = {
  active: {
    backgroundColor: Colors.primary.background,
    color: Colors.primary.default,
    class: "mb-4",
  },
  pending: {
    backgroundColor: Colors.gray.light,
    color: Colors.gray.dark,
    class: "font-semibold",
  },
  completed: {
    backgroundColor: Colors.green.background,
    color: Colors.green.default,
    class: "font-semibold",
  },
};

export default function Badge({
  variant,
  children,
}: {
  variant: "active" | "pending" | "completed";
  children: React.ReactNode;
}) {
  const config = badgeConfig[variant];
  return (
    <Text
      className={`py-1 px-3 text-sm rounded-lg self-start ${config.class}`}
      style={{
        backgroundColor: config.backgroundColor,
        color: config.color,
      }}
    >
      {children}
    </Text>
  );
}
