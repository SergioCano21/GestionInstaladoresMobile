import { ScrollView } from "react-native";

interface Props {
  children: React.ReactNode;
  scrollEnabled?: boolean;
}
export default function Screen({ children, scrollEnabled = true }: Props) {
  return (
    <ScrollView
      className="flex-1 p-4 bg-gray-100"
      scrollEnabled={scrollEnabled}
      contentContainerStyle={{ flexGrow: 1 }}
    >
      {children}
    </ScrollView>
  );
}
