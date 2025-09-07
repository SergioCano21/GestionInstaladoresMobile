import { View } from "react-native";

export default function BottomActionBar({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <View className="bg-white px-4 border-t border-gray-100 pt-6 pb-6 -mx-4">
      {children}
    </View>
  );
}
