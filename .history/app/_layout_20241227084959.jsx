import { TouchableNativeFeedback, useColorScheme } from "react-native";

import { Stack } from "expo-router";
import {Provider} from "react-redux"
import store from ''
export default function RootLayout() {
  const colorTheme = useColorScheme()
  console.log(colorTheme)
  const background = colorTheme === "dark" ? "black" : "white"
  const text = colorTheme === "dark" ? "light" : "dark";
  const title = colorTheme === "dark" ? "white" : "black"
  return (
    <Stack
      screenOptions={{
        headerShown: false,
      }}
    >
      <Provider
      <Stack.Screen name="(app)" />
    </Stack>
  );
}
