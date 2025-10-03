import { Colors } from "@/constants/Colors";
import { AuthProvider, useAuth } from "@/provider/AuthProvider";
import { FormProvider } from "@/provider/FormProvider";
import { BottomSheetModalProvider } from "@gorhom/bottom-sheet";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { useFonts } from "expo-font";
import { Stack } from "expo-router";
import { StatusBar } from "expo-status-bar";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import "react-native-reanimated";
import "../global.css";

function InitialLayout() {
  const { isAuthenticated } = useAuth();
  return (
    <Stack
      screenOptions={{
        headerTintColor: Colors.primary.default,
        headerTitleStyle: { fontSize: 17, fontWeight: "bold" },
        headerBackButtonDisplayMode: "minimal",
        headerShadowVisible: true,
      }}
    >
      <Stack.Protected guard={isAuthenticated}>
        <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
        <Stack.Screen name="complete-service-process/[serviceId]" />
        <Stack.Screen name="complete-service-process/client-info" />
        <Stack.Screen name="complete-service-process/client-signature" />
        <Stack.Screen name="complete-service-process/photo-evidences" />
        <Stack.Screen name="complete-service-process/service-info" />
      </Stack.Protected>

      <Stack.Protected guard={!isAuthenticated}>
        <Stack.Screen name="login" options={{ headerShown: false }} />
      </Stack.Protected>

      <Stack.Screen name="+not-found" />
    </Stack>
  );
}

const queryClient = new QueryClient();

export default function RootLayout() {
  const [loaded] = useFonts({
    OpenSans: require("../assets/fonts/OpenSans.ttf"),
  });

  if (!loaded) {
    // Async font loading only occurs in development.
    return null;
  }

  return (
    <GestureHandlerRootView>
      <BottomSheetModalProvider>
        <QueryClientProvider client={queryClient}>
          <AuthProvider>
            <FormProvider>
              <InitialLayout />
              <StatusBar style="dark" />
            </FormProvider>
          </AuthProvider>
        </QueryClientProvider>
      </BottomSheetModalProvider>
    </GestureHandlerRootView>
  );
}
