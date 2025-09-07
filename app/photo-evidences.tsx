import Screen from "@/components/Screen";
import { Stack, useRouter } from "expo-router";
import { View, Image, Alert, TouchableOpacity } from "react-native";
import * as ImagePicker from "expo-image-picker";
import { useState } from "react";
import {
  GalleryButtonCard,
  PhotoButtonCard,
} from "@/components/EvidenceButtonCard";
import { InstructionsCard } from "@/components/InstructionsCard";
import EvidencesEmptyState from "@/components/EvidencesEmptyState";
import { ImageIcon, XIcon } from "@/components/ui/Icons";
import { Colors } from "@/constants/Colors";
import { DisabledButton, PrimaryButton } from "@/components/ui/Buttons";
import BottomActionBar from "@/components/ui/BottomActionBar";
import CardHeader from "@/components/ui/CardHeader";
import OverScrollBackground from "@/components/ui/OverScrollBackground";

export default function ImagesScreen() {
  const router = useRouter();
  const [images, setImages] = useState<string[]>([]);

  const goToServiceInfo = () => {
    router.push("/service-info");
  };

  const pickImageFromCamera = async () => {
    const { status } = await ImagePicker.requestCameraPermissionsAsync();
    if (status !== "granted") {
      alert("Permiso de cámara es requerido");
      return;
    }

    const result = await ImagePicker.launchCameraAsync({
      allowsEditing: false,
      aspect: [16, 9],
    });

    if (!result.canceled) {
      if (images.length >= 6) {
        Alert.alert(
          "Límite alcanzado",
          "Elimina imágenes para seguir subiendo"
        );
        return;
      }
      setImages([...images, result.assets[0].uri]);
    }
  };

  const pickImageFromGallery = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ["images"],
      allowsEditing: false,
      aspect: [16, 9],
    });

    if (!result.canceled) {
      if (images.length >= 6) {
        Alert.alert(
          "Límite alcanzado",
          "Elimina imágenes para seguir subiendo"
        );
        return;
      }
      setImages([...images, result.assets[0].uri]);
    }
  };

  const removeImage = (index: number) => {
    setImages((prevImages) => {
      const notRemoved = [...prevImages];
      notRemoved.splice(index, 1);
      return notRemoved;
    });
  };

  return (
    <>
      <Screen>
        <Stack.Screen options={{ headerTitle: "Evidencias Fotográficas" }} />

        {/* Button Cards */}
        <View className="flex-row gap-4">
          <PhotoButtonCard pickImage={pickImageFromCamera} />
          <GalleryButtonCard pickImage={pickImageFromGallery} />
        </View>

        {/* Instruction Card */}
        <InstructionsCard />

        {/* Empty state */}
        {images.length === 0 && <EvidencesEmptyState />}

        {/* Photos added */}
        {images.length !== 0 && (
          <>
            <View className="mt-2 mb-4">
              <CardHeader Icon={ImageIcon}>
                Fotos Seleccionadas ({images.length})
              </CardHeader>
              <View className="flex-row flex-wrap justify-between mt-4">
                {images.map((uri, i) => (
                  <View key={i} className="w-[48%] mb-4">
                    <Image
                      source={{ uri }}
                      className="aspect-video rounded-xl object-cover"
                    />
                    <TouchableOpacity
                      activeOpacity={0.7}
                      onPress={() => removeImage(i)}
                      className="bg-red-600 p-1 rounded-full self-start absolute -top-2 -right-2"
                    >
                      <XIcon color={Colors.white.default} size={16} />
                    </TouchableOpacity>
                  </View>
                ))}
              </View>
            </View>

            {/* View to put the button on the bottom */}
            <View className="flex-1" />

            {/* Button continue */}
            <BottomActionBar>
              {images.length < 3 ? (
                <DisabledButton>Continuar</DisabledButton>
              ) : (
                <PrimaryButton onPress={goToServiceInfo}>
                  Continuar
                </PrimaryButton>
              )}

              {/* Extra bottom background */}
              <OverScrollBackground />
            </BottomActionBar>
          </>
        )}
      </Screen>
    </>
  );
}
