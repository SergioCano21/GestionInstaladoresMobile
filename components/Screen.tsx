import { RefreshControl, ScrollView } from "react-native";

interface Props {
  children: React.ReactNode;
  scrollEnabled?: boolean;
  onRefresh?: () => void;
  refreshing?: boolean;
}
export default function Screen({
  children,
  scrollEnabled = true,
  onRefresh,
  refreshing = false,
}: Props) {
  return (
    <ScrollView
      className="flex-1 p-4 bg-gray-100"
      scrollEnabled={scrollEnabled}
      contentContainerStyle={{ flexGrow: 1 }}
      refreshControl={
        onRefresh && (
          <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
        )
      }
    >
      {children}
    </ScrollView>
  );
}
