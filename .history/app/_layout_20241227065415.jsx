import { TouchableNativeFeedback, useColorScheme } from "react-native";

import { Stack } from "expo-router";
import Ionicons from '@expo/vector-icons/Ionicons';
export default function RootLayout() {
  const colorTheme = useColorScheme()
  console.log(colorTheme)
  const background = colorTheme === "dark" ? "black" : "white"
  const text = colorTheme === "dark" ? "light" : "dark";
  const title = colorTheme === "dark" ? "white" : "black"
  return (
    <Stack
      screenOptions={{
        statusBarBackgroundColor: background,
        statusBarStyle: text,
        headerStyle: {
          backgroundColor: background,
        },
        headerShown: fa
        headerTintColor: title,
      }}
    >
      <Stack.Screen name="(app)" />
    </Stack>
  );
}
