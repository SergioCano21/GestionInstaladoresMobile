import Screen from "@/components/Screen";
import { RedButton } from "@/components/ui/Buttons";
import Card from "@/components/ui/Card";
import CardTitle from "@/components/ui/CardTitle";
import {
  BuildingIcon,
  HashIcon,
  LogoutIcon,
  MailIcon,
  MapPinIcon,
  PhoneIcon,
  StoreIcon,
  UserIcon,
} from "@/components/ui/Icons";
import { Colors } from "@/constants/Colors";
import { View, Text } from "react-native";

export default function Profile() {
  return (
    <Screen>
      {/* Personal Information */}
      <Card>
        <View className="gap-3">
          <View className="flex-row gap-3 items-center mb-2">
            <View className="bg-blue-100 p-3 rounded-full">
              <UserIcon size={20} color="#2563eb" />
            </View>
            <View>
              <CardTitle>Perfil</CardTitle>
              <Text className="text-base" style={{ color: Colors.gray.dark }}>
                Consulta tu información personal
              </Text>
            </View>
          </View>

          <View className="flex-row items-center gap-3">
            <HashIcon size={16} color={Colors.gray.dark} />
            <View>
              <DetailsTitle>Número de Instalador</DetailsTitle>
              <DetailsInfo>1234</DetailsInfo>
            </View>
          </View>

          <View className="flex-row items-center gap-3">
            <UserIcon size={16} color={Colors.gray.dark} />
            <View>
              <DetailsTitle>Nombre</DetailsTitle>
              <DetailsInfo>Sergio Sebastian Cano Gonzalez</DetailsInfo>
            </View>
          </View>

          <View className="flex-row items-center gap-3">
            <MailIcon size={16} color={Colors.gray.dark} />
            <View>
              <DetailsTitle>Email</DetailsTitle>
              <DetailsInfo>sergio.cano@gmail.com</DetailsInfo>
            </View>
          </View>
          <View className="flex-row items-center gap-3">
            <PhoneIcon size={16} color={Colors.gray.dark} />
            <View>
              <DetailsTitle>Teléfono</DetailsTitle>
              <DetailsInfo>999182345</DetailsInfo>
            </View>
          </View>
          <View className="flex-row items-center gap-3">
            <BuildingIcon size={16} color={Colors.gray.dark} />
            <View>
              <DetailsTitle>Empresa</DetailsTitle>
              <DetailsInfo>Cys de Yucatán</DetailsInfo>
            </View>
          </View>
        </View>
      </Card>

      {/* Store Information */}
      <Card>
        <View className="gap-3">
          <View className="flex-row gap-3 items-center mb-2">
            <View
              className="p-3 rounded-full"
              style={{ backgroundColor: Colors.primary.background }}
            >
              <StoreIcon size={20} color={Colors.primary.default} />
            </View>
            <View>
              <CardTitle>Tienda</CardTitle>
              <Text className="text-base" style={{ color: Colors.gray.dark }}>
                Información de tu sucursal
              </Text>
            </View>
          </View>
          <View className="flex-row items-center gap-3">
            <HashIcon size={16} color={Colors.gray.dark} />
            <View>
              <DetailsTitle>Número de Tienda</DetailsTitle>
              <DetailsInfo>2131</DetailsInfo>
            </View>
          </View>
          <View className="flex-row items-center gap-3">
            <StoreIcon size={16} color={Colors.gray.dark} />
            <View>
              <DetailsTitle>Nombre</DetailsTitle>
              <DetailsInfo>Home Depot Kanek</DetailsInfo>
            </View>
          </View>
          <View className="flex-row items-center gap-3">
            <PhoneIcon size={16} color={Colors.gray.dark} />
            <View>
              <DetailsTitle>Teléfono</DetailsTitle>
              <DetailsInfo>9987565432</DetailsInfo>
            </View>
          </View>
          <View className="flex-row items-center gap-3">
            <MapPinIcon size={16} color={Colors.gray.dark} />
            <View>
              <DetailsTitle>Dirección</DetailsTitle>
              <DetailsInfo>Calle 19 309 Fraccionamiento del Parque</DetailsInfo>
            </View>
          </View>
        </View>
      </Card>

      {/* Close session button */}
      <RedButton onPress={() => null}>
        <View className="flex-row items-center justify-center gap-3">
          <LogoutIcon size={16} color={Colors.white.default} />
          <Text className="font-semibold text-lg text-white text-center">
            Cerrar Sesión
          </Text>
        </View>
      </RedButton>
    </Screen>
  );
}

function DetailsTitle({ children }: { children: React.ReactNode }) {
  return (
    <Text className="text-base" style={{ color: Colors.gray.dark }}>
      {children}
    </Text>
  );
}
function DetailsInfo({ children }: { children: React.ReactNode }) {
  return (
    <Text
      className="text-lg font-medium"
      style={{ color: Colors.black.default }}
    >
      {children}
    </Text>
  );
}
