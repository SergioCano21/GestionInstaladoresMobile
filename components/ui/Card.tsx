import { View } from "react-native";

export default function Card({
  children,
  variant = "normal",
}: {
  children: React.ReactNode;
  variant?:
    | "active"
    | "completed"
    | "normal"
    | "blue"
    | "yellow"
    | "dashed-orange"
    | "dashed-gray"
    | "green";
}) {
  const config = {
    active: "bg-white border-l-4 border-l-[#f96302]", //Primary color
    completed: "bg-white border-l-4 border-l-green-500",
    normal: "bg-white",
    blue: "bg-blue-50 border border-blue-200",
    yellow: "bg-yellow-50 border border-yellow-200",
    "dashed-orange": "bg-white border-2 border-dashed border-[#f96302]", //Primary color
    "dashed-gray": "bg-white border-2 border-dashed border-gray-300",
    green: "bg-green-50 border border-green-200",
  }[variant];

  return <View className={`p-5 mb-4 rounded-xl ${config}`}>{children}</View>;
}
