import { TouchableOpacity, View, Text } from "react-native";
import Card from "./ui/Card";
import { Colors } from "@/constants/Colors";
import { CameraIcon, ImageIcon } from "./ui/Icons";

const ACTIVE_OPACITY = 0.7;
const ICON_SIZE = 27;
export function PhotoButtonCard({ pickImage }: { pickImage: () => void }) {
  return (
    <TouchableOpacity
      activeOpacity={ACTIVE_OPACITY}
      onPress={pickImage}
      className="flex-1"
    >
      <Card variant="dashed-orange">
        <View className="items-center">
          <View
            className="rounded-full p-4 mb-2"
            style={{ backgroundColor: Colors.primary.background }}
          >
            <CameraIcon color={Colors.primary.default} size={ICON_SIZE} />
          </View>
          <Text
            className="font-semibold text-lg mb-1"
            style={{ color: Colors.black.default }}
          >
            Tomar Foto
          </Text>
          <Text className="text-base" style={{ color: Colors.gray.dark }}>
            Usar cámara
          </Text>
        </View>
      </Card>
    </TouchableOpacity>
  );
}

export function GalleryButtonCard({ pickImage }: { pickImage: () => void }) {
  return (
    <TouchableOpacity
      activeOpacity={ACTIVE_OPACITY}
      className="flex-1"
      onPress={pickImage}
    >
      <Card variant="dashed-orange">
        <View className="items-center">
          <View
            className="rounded-full p-4 mb-2"
            style={{ backgroundColor: Colors.primary.background }}
          >
            <ImageIcon color={Colors.primary.default} size={ICON_SIZE} />
          </View>
          <Text
            className="font-semibold text-lg mb-1"
            style={{ color: Colors.black.default }}
          >
            Galería
          </Text>
          <Text className="text-base" style={{ color: Colors.gray.dark }}>
            Seleccionar fotos
          </Text>
        </View>
      </Card>
    </TouchableOpacity>
  );
}
