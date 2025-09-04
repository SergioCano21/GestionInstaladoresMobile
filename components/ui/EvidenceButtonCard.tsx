import { TouchableOpacity, View, Text } from "react-native";
import { Card } from "./Card";
import { Colors } from "@/constants/Colors";
import { CameraIcon, ImageIcon } from "./Icons";

const ACTIVE_OPACITY = 0.7;
const ICON_SIZE = 27;
export function PhotoButtonCard() {
  return (
    <TouchableOpacity activeOpacity={ACTIVE_OPACITY} className="flex-1">
      <Card
        classes="border-dashed border-2"
        style={{ borderColor: Colors.primary.default }}
      >
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

export function GalleryButtonCard() {
  return (
    <TouchableOpacity activeOpacity={ACTIVE_OPACITY} className="flex-1">
      <Card
        classes="border-dashed border-2"
        style={{ borderColor: Colors.primary.default }}
      >
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
