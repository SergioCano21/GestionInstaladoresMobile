import { FlatList, View, Text } from "react-native";
import { InfoIcon } from "./ui/Icons";

const ICON_SIZE = 20;
export function InstructionsCard() {
  return (
    <View className="bg-blue-50 p-5 rounded-xl border border-blue-200 my-4">
      <View className="flex-row gap-2">
        <View className="bg-blue-500 w-10 h-10 rounded-full justify-center items-center">
          <InfoIcon color="#fff" size={ICON_SIZE} />
        </View>
        <View>
          <Text className="text-blue-900 font-medium text-lg">
            Instrucciones
          </Text>
          <FlatList
            scrollEnabled={false}
            data={[
              { text: "Toma fotos del trabajo completado" },
              { text: "Incluye detalles de la instalación" },
              { text: "Mínimo 3 fotos, máximo 6 fotos" },
              { text: "Asegúrate que las fotos sean claras" },
            ]}
            renderItem={({ item }) => {
              return (
                <Text className="text-blue-800 text-base">
                  {`\u2022 ${item.text}`}
                </Text>
              );
            }}
          />
        </View>
      </View>
    </View>
  );
}
