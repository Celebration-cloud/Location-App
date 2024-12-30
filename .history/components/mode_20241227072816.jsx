import { useColorScheme } from "react-native";

      const colorTheme = useColorScheme();
      const background = colorTheme === "dark" ? "black" : "white";
      const text = colorTheme === "dark" ? "light" : "dark";
      const title = colorTheme === "dark" ? "white" : "black";