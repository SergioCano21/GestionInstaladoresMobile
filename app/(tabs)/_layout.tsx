import Logo from "@/assets/images/logo.svg";
import {
  CalendarIcon,
  CircleCheckIcon,
  ClipboardListIcon,
  UserIcon,
} from "@/components/ui/Icons";
import { Colors } from "@/constants/Colors";
import { Tabs } from "expo-router";
import React from "react";
import { View } from "react-native";

const ICON_SIZE = 20;
const LOGO_SIZE = 30;

export default function TabLayout() {
  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: Colors.primary.default,
        tabBarInactiveTintColor: Colors.black.default,
        tabBarStyle: { backgroundColor: Colors.white.default },

        headerShown: true,
        headerStyle: {
          backgroundColor: Colors.white.default,
          height: 65,
        },
        headerTintColor: Colors.primary.default,
        headerTitleAlign: "center",
        headerTitleStyle: { fontSize: 17, fontWeight: "bold" },
        headerLeft: () => (
          <View className="pl-3">
            <Logo width={LOGO_SIZE} height={LOGO_SIZE} />
          </View>
        ),
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          tabBarLabel: "Activos",
          headerTitle: "Servicios Activos",
          tabBarIcon: ({ color }) => (
            <ClipboardListIcon color={color} size={ICON_SIZE} />
          ),
        }}
      />
      <Tabs.Screen
        name="completed"
        options={{
          tabBarLabel: "Completados",
          headerTitle: "Servicios Completados",
          tabBarIcon: ({ color }) => (
            <CircleCheckIcon color={color} size={ICON_SIZE} />
          ),
        }}
      />
      <Tabs.Screen
        name="calendar"
        options={{
          title: "Calendario",
          tabBarIcon: ({ color }) => (
            <CalendarIcon color={color} size={ICON_SIZE} />
          ),
        }}
      />
      <Tabs.Screen
        name="profile"
        options={{
          title: "Perfil",
          tabBarIcon: ({ color }) => (
            <UserIcon color={color} size={ICON_SIZE} />
          ),
        }}
      />
    </Tabs>
  );
}
