import { useColorScheme } from "react-native";
      const colorTheme = useColorScheme();
     export const background = colorTheme === "dark" ? "black" : "white";
     export const textTheme = colorTheme === "dark" ? "light" : "dark";
     export const titleTheme = colorTheme === "dark" ? "white" : "black";
     