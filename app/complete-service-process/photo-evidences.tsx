import {
  GalleryButtonCard,
  PhotoButtonCard,
} from "@/components/EvidenceButtonCard";
import EvidencesEmptyState from "@/components/EvidencesEmptyState";
import NoticeCard from "@/components/NoticeCard";
import Screen from "@/components/Screen";
import BottomActionBar from "@/components/ui/BottomActionBar";
import { DisabledButton, PrimaryButton } from "@/components/ui/Buttons";
import CardHeader from "@/components/ui/CardHeader";
import { ImageIcon, InfoIcon, XIcon } from "@/components/ui/Icons";
import OverScrollBackground from "@/components/ui/OverScrollBackground";
import { Colors } from "@/constants/Colors";
import { useFormData } from "@/provider/FormProvider";
import * as ImagePicker from "expo-image-picker";
import { Stack, useRouter } from "expo-router";
import { Alert, Image, TouchableOpacity, View } from "react-native";

export default function ImagesScreen() {
  const router = useRouter();
  const { data, setData } = useFormData();

  const goToServiceInfo = () => {
    router.push("./service-info");
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
      if (data.images.length >= 6) {
        Alert.alert(
          "Límite alcanzado",
          "Elimina imágenes para seguir subiendo"
        );
        return;
      }
      setData((prev) => ({
        ...prev,
        images: [...prev.images, result.assets[0].uri],
      }));
    }
  };

  const pickImageFromGallery = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ["images"],
      allowsEditing: false,
      aspect: [16, 9],
    });

    if (!result.canceled) {
      if (data.images.length >= 6) {
        Alert.alert(
          "Límite alcanzado",
          "Elimina imágenes para seguir subiendo"
        );
        return;
      }
      setData((prev) => ({
        ...prev,
        images: [...prev.images, result.assets[0].uri],
      }));
    }
  };

  const removeImage = (index: number) => {
    setData((prev) => {
      const notRemoved = [...prev.images];
      notRemoved.splice(index, 1);
      return { ...prev, images: notRemoved };
    });
  };

  return (
    <>
      <Screen>
        <Stack.Screen options={{ headerTitle: "Evidencias Fotográficas" }} />

        {/* Button Cards */}
        <View className="flex-row gap-4 mb-4">
          <PhotoButtonCard pickImage={pickImageFromCamera} />
          <GalleryButtonCard pickImage={pickImageFromGallery} />
        </View>

        {/* Instruction Card */}
        <NoticeCard
          Icon={InfoIcon}
          title={"Instrucciones"}
          content={
            "\u2022 Toma fotos del trabajo completado\n" +
            "\u2022 Incluye detalles de la instalación\n" +
            "\u2022 Mínimo 3 fotos, máximo 6 fotos\n" +
            "\u2022 Asegúrate que las fotos sean claras"
          }
        />

        {/* Empty state */}
        {data.images.length === 0 && <EvidencesEmptyState />}

        {/* Photos added */}
        {data.images.length !== 0 && (
          <>
            <View className="mt-2 mb-4">
              <CardHeader Icon={ImageIcon}>
                Fotos Seleccionadas ({data.images.length})
              </CardHeader>
              <View className="flex-row flex-wrap justify-between mt-4">
                {data.images.map((uri, i) => (
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
              {data.images.length < 3 ? (
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
