import { Stack } from "expo-router";
import { useColorScheme } from "react-native";

export default function RootLayout() {
  const colorTheme = useColorScheme()
  console.log(colorTheme)
  const background = colorTheme === "dark" ? "black" : "white"
  const text = colorTheme === "dark" ? "black" : "white";
  return <Stack screenOptions={{statusBarBackgroundColor: {colorTheme ? }, statusBarStyle: "dark"}} />;
}
