import { StyleSheet } from "react-native";

const LoginScreenStyle = StyleSheet.create({
    wrapper: {
        paddingVertical: 20,
        paddingHorizontal: 10
    },
    inputWrapper: {
        flexDirection: "row",
        height: 40,
        marginBottom: 20
    },
    label: {
        lineHeight: 40,
        width: 100
    },
    input: {
        backgroundColor: "#e0e0e0",
        borderRadius: 5,
        flex: 1
    },
    loginButton: {},
    loginButtonText: {
        backgroundColor: "#58a6ff",
        color: "#fff",
        fontWeight: "bold",
        fontSize: 16,
        height: 40,
        lineHeight: 40,
        textAlign: "center",
        borderRadius: 5
    }
});
export default LoginScreenStyle;
