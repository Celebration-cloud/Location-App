import { useColorScheme } from "react-native";

      const colorTheme = useColorScheme();
     expo const background = colorTheme === "dark" ? "black" : "white";
     expo const text = colorTheme === "dark" ? "light" : "dark";
     expo const title = colorTheme === "dark" ? "white" : "black";