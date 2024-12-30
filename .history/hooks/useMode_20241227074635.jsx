export const useMode = () => {
     const colorTheme = useColorScheme();
                 const router = useRouter();
                 const background = colorTheme === "dark" ? "black" : "white";
                 const text = colorTheme === "dark" ? "light" : "dark";
                 const titleTheme = colorTheme === "dark" ? "white" : "black";
}