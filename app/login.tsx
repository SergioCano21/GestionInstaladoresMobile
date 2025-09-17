import Logo from "@/assets/images/logo.svg";
import { PrimaryButton } from "@/components/ui/Buttons";
import { InputText, Label } from "@/components/ui/Inputs";
import { Colors } from "@/constants/Colors";
import { Text, View } from "react-native";

export default function Login() {
  return (
    <View className="bg-white justify-center flex-1 p-4">
      <View className=" p-5 mb-4 rounded-xl border border-gray-300">
        <View className="gap-4">
          <View className="items-center gap-2 mb-2">
            <Logo width={45} height={45} />
            <Text
              style={{ color: Colors.primary.default }}
              className="font-extrabold text-3xl mt-2"
            >
              Panel de Instaladores
            </Text>
            <Text className="text-gray-600 text-lg">
              Área de Servicios Especiales
            </Text>
          </View>
          <View className="gap-1">
            <Label>Número de Instalador</Label>
            <InputText placeholder="" />
          </View>
          <View className="gap-1">
            <Label>Contraseña</Label>
            <InputText placeholder="" />
          </View>
          <PrimaryButton onPress={() => null}>Iniciar Sesión</PrimaryButton>
        </View>
      </View>
    </View>
  );
}
