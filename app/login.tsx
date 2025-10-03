import Logo from "@/assets/images/logo.svg";
import { PrimaryButton } from "@/components/ui/Buttons";
import { InputText, Label } from "@/components/ui/Inputs";
import { Colors } from "@/constants/Colors";
import { handleLogin } from "@/services/auth";
import { Login } from "@/types/types";
import { useState } from "react";
import {
  Alert,
  Keyboard,
  KeyboardAvoidingView,
  Platform,
  Text,
  TouchableWithoutFeedback,
  View,
} from "react-native";

const initialState: Login = {
  installerId: undefined,
  password: undefined,
};

export default function LoginPage() {
  const [form, setForm] = useState<Login>(initialState);
  const [loading, setLoading] = useState<boolean>(false);

  const onLogin = async () => {
    setLoading(true);

    try {
      await handleLogin(form);
    } catch (error: any) {
      Alert.alert("Error", error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      className="flex-1 bg-white"
      keyboardVerticalOffset={-100}
    >
      <TouchableWithoutFeedback
        onPress={() => Keyboard.dismiss()}
        accessible={false}
      >
        <View className="justify-center flex-1 p-4">
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
                <InputText
                  type="number"
                  name="installerId"
                  setValue={setForm}
                  value={form.installerId}
                  placeholder=""
                  loading={loading}
                />
              </View>
              <View className="gap-1">
                <Label>Contraseña</Label>
                <InputText
                  type="password"
                  name="password"
                  setValue={setForm}
                  value={form.password}
                  placeholder=""
                  loading={loading}
                />
              </View>
              <PrimaryButton loading={loading} onPress={onLogin}>
                Iniciar Sesión
              </PrimaryButton>
            </View>
          </View>
        </View>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
}
