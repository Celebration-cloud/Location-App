import { useColorScheme } from "react-native";
      const colorTheme = useColorScheme();
     export const background = colorTheme === "dark" ? "black" : "white";
     export const textT = colorTheme === "dark" ? "light" : "dark";
     export const title = colorTheme === "dark" ? "white" : "black";
     