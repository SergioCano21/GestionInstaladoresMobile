import { Colors } from "@/constants/Colors";
import { ScrollView } from "react-native";

interface Props {
  children: React.ReactNode;
  scrollEnabled?: boolean;
}
export default function Screen({ children, scrollEnabled = true }: Props) {
  return (
    <ScrollView
      className="flex-1 p-4"
      style={{ backgroundColor: Colors.gray.light }}
      scrollEnabled={scrollEnabled}
    >
      {children}
    </ScrollView>
  );
}
