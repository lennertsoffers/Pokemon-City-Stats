import { StyleSheet } from "react-native";

const LoadingAnimationStyle = StyleSheet.create({
    wrapper: {
        width: "100%",
        height: "100%",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center"
    },
    box: {
        flexDirection: "column",
        alignItems: "center"
    },
    text: {
        marginBottom: 20,
        fontSize: 16,
        fontWeight: "bold"
    },
    image: {
        width: 150,
        height: 150
    }
});

export default LoadingAnimationStyle;
