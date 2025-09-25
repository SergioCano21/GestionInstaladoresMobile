import { Colors } from "@/constants/Colors";
import { Text } from "react-native";

const badgeConfig = {
  active: {
    backgroundColor: Colors.primary.background,
    color: Colors.primary.default,
    class: "mb-4",
    text: "",
  },
  todo: {
    backgroundColor: Colors.gray.light,
    color: Colors.gray.dark,
    class: "font-semibold",
    text: "Pendiente",
  },
  doing: {
    backgroundColor: Colors.yellow.background,
    color: Colors.yellow.default,
    class: "font-semibold",
    text: "En Proceso",
  },
  done: {
    backgroundColor: Colors.green.background,
    color: Colors.green.default,
    class: "font-semibold",
    text: "Completado",
  },
};

export default function Badge({
  variant,
  children,
}: {
  variant: "active" | "todo" | "doing" | "done";
  children?: React.ReactNode;
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
