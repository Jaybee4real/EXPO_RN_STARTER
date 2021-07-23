import { DefaultTheme } from "@react-navigation/native";

const LightTheme = {
    colors: {
        ...DefaultTheme.colors,
        primary: "#3772FF",
        text: "#000",
        background: "#EFEFF3",
        secondaryColor: "#ffffff",
        green: "#00D395",
        border: "grey",
    },
    blurredText: {
        fontFamily: "Inter-600",
        color: "#fff0",
        textAlign: "center",
        textShadowColor: "rgba(0,0,0,0.8)",
        textShadowOffset: {
            width: 0,
            height: 0,
        },
        textShadowRadius: 30,
    },
};

export default LightTheme;
