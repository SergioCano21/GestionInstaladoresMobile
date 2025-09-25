import { Colors } from "@/constants/Colors";
import { Profile, Store } from "@/types/types";
import { FlatList, Text, View } from "react-native";
import Card from "./ui/Card";
import CardTitle from "./ui/CardTitle";
import {
  BuildingIcon,
  HashIcon,
  MailIcon,
  MapPinIcon,
  PhoneIcon,
  StoreIcon,
  UserIcon,
} from "./ui/Icons";

export function ProfileCard({ installer }: { installer: Profile }) {
  return (
    <Card>
      <View className="gap-3">
        <View className="flex-row gap-3 items-center mb-2">
          <View className="bg-blue-100 p-3 rounded-full">
            <UserIcon size={20} color="#2563eb" />
          </View>
          <View>
            <CardTitle>Perfil</CardTitle>
            <DetailsTitle>Consulta tu información personal</DetailsTitle>
          </View>
        </View>

        <InfoRow
          Icon={HashIcon}
          title="Número de Instalador"
          info={installer.installerId}
        />

        <InfoRow Icon={UserIcon} title="Nombre" info={installer.name} />

        <InfoRow
          Icon={HashIcon}
          title="Número de Instalador"
          info={installer.installerId}
        />

        <InfoRow Icon={MailIcon} title="Email" info={installer.email} />

        <InfoRow Icon={PhoneIcon} title="Teléfono" info={installer.phone} />

        <InfoRow Icon={BuildingIcon} title="Empresa" info={installer.company} />
      </View>
    </Card>
  );
}

export function StoreCard({ stores }: { stores: Store[] }) {
  return (
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
            <DetailsTitle>Información de tu sucursal</DetailsTitle>
          </View>
        </View>

        <FlatList
          data={stores}
          scrollEnabled={false}
          renderItem={({ item }) => (
            <View className="gap-3">
              <InfoRow
                Icon={HashIcon}
                title="Número de Tienda"
                info={item.numStore}
              />
              <InfoRow Icon={StoreIcon} title="Nombre" info={item.name} />
              <InfoRow Icon={PhoneIcon} title="Teléfono" info={item.phone} />
              <InfoRow
                Icon={MapPinIcon}
                title="Dirección"
                info={item.address}
              />
            </View>
          )}
          ItemSeparatorComponent={() => (
            <View className="my-4 h-[1px] bg-gray-300" />
          )}
        />
      </View>
    </Card>
  );
}

function InfoRow({
  Icon,
  title,
  info,
}: {
  Icon: React.ComponentType<{ color: string; size: number }>;
  title: string;
  info: string | number;
}) {
  return (
    <View className="flex-row items-center gap-3">
      <Icon size={16} color={Colors.gray.dark} />
      <View>
        <DetailsTitle>{title}</DetailsTitle>
        <DetailsInfo>{info}</DetailsInfo>
      </View>
    </View>
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
