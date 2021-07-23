import { DarkTheme as reactNavDarkTheme } from "@react-navigation/native";

const DarkTheme = {
    dark: true,
    colors: {
        ...reactNavDarkTheme.colors,
        primary: "#007bff",
        text: "#fff",
        background: "#12161C",
        secondaryColor: "#252D38",
        green: "#00D395",
    },
    blurredText: {
        fontFamily: "Inter-600",
        color: "rgba(255,255,255, .00)",
        textAlign: "center",
        textShadowColor: "rgba(255,255,255, .9)",
        textShadowOffset: {
            width: 0,
            height: 0,
        },
        textShadowRadius: 30,
    },
};

export default DarkTheme;
