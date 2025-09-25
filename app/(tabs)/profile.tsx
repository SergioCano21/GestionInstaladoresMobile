import { apiGetProfile } from "@/api/profile";
import { ProfileCard, StoreCard } from "@/components/ProfileSections";
import Screen from "@/components/Screen";
import { RedButton } from "@/components/ui/Buttons";
import { LogoutIcon } from "@/components/ui/Icons";
import LoadingSpinner from "@/components/ui/LoadingSpinner";
import { Colors } from "@/constants/Colors";
import { QUERY_KEYS } from "@/constants/Constants";
import { handleLogout } from "@/services/auth";
import { Profile } from "@/types/types";
import { useQuery } from "@tanstack/react-query";
import { useState } from "react";
import { Alert, Text, View } from "react-native";

export default function ProfilePage() {
  const { data: installer, isLoading } = useQuery<Profile>({
    queryKey: [QUERY_KEYS.PROFILE],
    queryFn: apiGetProfile,
  });
  const [loading, setLoading] = useState<boolean>(false);

  const onLogout = async () => {
    setLoading(true);

    try {
      await handleLogout();

      // eslint-disable-next-line @typescript-eslint/no-unused-vars
    } catch (error) {
      Alert.alert(
        "Error",
        "Ocurrió un error al intentar cerrar sesión. Intente de nuevo."
      );
    } finally {
      setLoading(false);
    }
  };

  if (isLoading) {
    return (
      <Screen>
        <LoadingSpinner />
      </Screen>
    );
  }
  return (
    <Screen>
      {/* Personal Information */}
      <ProfileCard installer={installer!} />

      {/* Store Information */}
      <StoreCard stores={installer?.stores!} />

      {/* Close session button */}
      <RedButton onPress={onLogout} loading={loading}>
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
