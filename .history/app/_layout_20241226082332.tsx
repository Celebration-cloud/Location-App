import { Stack } from "expo-router";

export default function RootLayout() {
  return <Stack screenOptions={{statusBarBackgroundColor: "yellow", statusBarStyle: "auto"}} />;
}