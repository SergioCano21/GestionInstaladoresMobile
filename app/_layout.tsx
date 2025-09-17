import { useFonts } from "expo-font";
import { Stack } from "expo-router";
import { StatusBar } from "expo-status-bar";
import "react-native-reanimated";
import "../global.css";
import { Colors } from "@/constants/Colors";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { BottomSheetModalProvider } from "@gorhom/bottom-sheet";

function InitialLayout() {
  return (
    <Stack
      screenOptions={{
        headerTintColor: Colors.primary.default,
        headerTitleStyle: { fontSize: 17, fontWeight: "bold" },
        headerBackButtonDisplayMode: "minimal",
        headerShadowVisible: true,
      }}
    >
      <Stack.Protected guard={false}>
        <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
      </Stack.Protected>
      <Stack.Screen name="login" options={{ headerShown: false }} />
      <Stack.Screen name="+not-found" />
    </Stack>
  );
}

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
        <InitialLayout />
        <StatusBar style="dark" />
      </BottomSheetModalProvider>
    </GestureHandlerRootView>
  );
}
