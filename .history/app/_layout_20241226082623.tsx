import { Stack } from "expo-router";
import { useColorScheme } from "react-native";

export default function RootLayout() {
  const colorTheme = useColorScheme()
  console.log(colorTheme)
  return <Stack screenOptions={{statusBarBackgroundColor: {colorTheme ? d}, statusBarStyle: "dark"}} />;
}
