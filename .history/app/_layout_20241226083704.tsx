import { useColorScheme } from "react-native";

import { Stack } from "expo-router";

export default function RootLayout() {
  const colorTheme = useColorScheme()
  console.log(colorTheme)
  const background = colorTheme === "dark" ? "black" : "white"
  const text = colorTheme === "dark" ? "light" : "dark";
  const title = 
  return (
    <Stack
      screenOptions={{
        statusBarBackgroundColor: background,
        statusBarStyle: text,
        headerStyle: {
          backgroundColor: background,
        },
        
        headerTintColor: text,
      }}
    />
  );
}