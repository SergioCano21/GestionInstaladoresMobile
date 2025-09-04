import Screen from "@/components/Screen";
import { Stack } from "expo-router";
import { View, Text, FlatList } from "react-native";
import * as ImagePicker from "expo-image-picker";
import { useState } from "react";
import { CameraIcon, InfoIcon } from "@/components/ui/Icons";
import { Colors } from "@/constants/Colors";
import {
  GalleryButtonCard,
  PhotoButtonCard,
} from "@/components/ui/EvidenceButtonCard";
import { InstructionsCard } from "@/components/InstructionsCard";

export default function ImagesScreen() {
  const [image, setImage] = useState<string | null>(null);

  const pickImageFromCamera = async () => {
    const { status } = await ImagePicker.requestCameraPermissionsAsync();
    if (status !== "granted") {
      alert("Permiso de cámara es requerido");
      return;
    }

    const result = await ImagePicker.launchCameraAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: false,
      aspect: [16, 9],
    });

    if (!result.canceled) {
      console.log(result.assets[0]);
      // Aquí puedes mostrar una vista previa, subirla a un servidor, etc.
    }
  };

  const pickImageFromGallery = async () => {
    // No permissions request is necessary for launching the image library
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ["images"],
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    console.log(result);

    if (!result.canceled) {
      setImage(result.assets[0].uri);
    }
  };

  return (
    <Screen>
      <Stack.Screen options={{ headerTitle: "Evidencias Fotográficas" }} />

      {/* Button Cards */}
      <View className="flex-row gap-4">
        <PhotoButtonCard />
        <GalleryButtonCard />
      </View>

      {/* Instruction Card */}
      <InstructionsCard />

      {/* Empty state */}
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

      {/* Photos added */}
    </Screen>
  );
}
