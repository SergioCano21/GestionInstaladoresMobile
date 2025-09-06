import { View, Text } from "react-native";
import { CameraIcon } from "./ui/Icons";
import { Colors } from "@/constants/Colors";

export default function EvidencesEmptyState() {
  return (
    <View className="items-center my-8">
      <CameraIcon size={40} color={Colors.gray.default} />
      <Text className="font-semibold text-lg mt-6 mb-1">
        No hay fotos seleccionadas
      </Text>
      <Text
        className="text-base text-center"
        style={{ color: Colors.gray.dark }}
      >
        Usa los botones de arriba para tomar fotos o seleccionar de tu galería
      </Text>
    </View>
  );
}
