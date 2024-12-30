import { Stack } from "expo-router";
import { useColorScheme } from "react-native";

export default function RootLayout() {
  const colorTheme = useColorScheme()
  co
  return <Stack screenOptions={{statusBarBackgroundColor: {colorTheme}, statusBarStyle: "dark"}} />;
}
