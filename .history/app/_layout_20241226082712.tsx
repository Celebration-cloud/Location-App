import { Stack } from "expo-router";
import { useColorScheme } from "react-native";

export default function RootLayout() {
  const colorTheme = useColorScheme()
  console.log(colorTheme)
  const background = colorTheme ? "da"
  const text = colorTheme ? 
  return <Stack screenOptions={{statusBarBackgroundColor: {colorTheme ? }, statusBarStyle: "dark"}} />;
}
