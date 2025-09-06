import Screen from "@/components/Screen";
import { Stack } from "expo-router";
import { View, Text, Image, Alert, TouchableOpacity } from "react-native";
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
import { LinearGradient } from "expo-linear-gradient";

export default function ImagesScreen() {
  const [images, setImages] = useState<string[]>([]);

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
      console.log(result.assets[0]);
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
              <View className="flex-row gap-2 items-center">
                <ImageIcon color={Colors.primary.default} size={20} />
                <Text
                  className="font-semibold text-lg"
                  style={{ color: Colors.black.default }}
                >
                  Fotos Seleccionadas ({images.length})
                </Text>
              </View>
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
            <View className="bg-white px-4 border-t border-gray-100 pt-6 pb-6 -mx-4">
              <TouchableOpacity
                activeOpacity={0.7}
                disabled={images.length < 3}
              >
                {images.length < 3 ? (
                  <View
                    className="bg-gray-300 h-[50] justify-center"
                    style={{ borderRadius: 16 }}
                  >
                    <Text className="font-semibold text-lg text-gray-500 text-center">
                      Continuar
                    </Text>
                  </View>
                ) : (
                  <LinearGradient
                    colors={["#f96302", "#e55502"]}
                    start={{ x: 0, y: 0 }}
                    end={{ x: 1, y: 1 }}
                    style={{
                      borderRadius: 16,
                      height: 50,
                      justifyContent: "center",
                    }}
                  >
                    <Text className="font-semibold text-lg text-white text-center align-middle">
                      Continuar
                    </Text>
                  </LinearGradient>
                )}
              </TouchableOpacity>

              {/* Extra bottom background */}
              <View className="bg-white absolute left-0 right-0 -mx-4 -bottom-[600] h-[600]" />
            </View>
          </>
        )}
      </Screen>
    </>
  );
}
