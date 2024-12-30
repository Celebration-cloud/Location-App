import { useColorScheme } from "react-native";

export const useMode = () => {
  const colorTheme = useColorScheme();
  const background = colorTheme === "dark" ? "black" : "white";
  const textTheme = colorTheme === "dark" ? "light" : "dark";
  const titleTheme = colorTheme === "dark" ? "white" : "black";

  return [backgroundTheme, textTheme, titleTheme]
}