import { Colors } from "@/constants/Colors";
import { ScrollView } from "react-native";

interface Props {
  children: React.ReactNode;
}
export default function Screen({ children }: Props) {
  return (
    <ScrollView
      className="flex-1 p-4"
      style={{ backgroundColor: Colors.gray.light }}
    >
      {children}
    </ScrollView>
  );
}
