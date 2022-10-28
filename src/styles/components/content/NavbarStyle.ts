import { StyleSheet } from "react-native";

const NavbarStyle = StyleSheet.create({
    wrapper: {
        display: "flex",
        flexDirection: "row",
        width: "100%",
        height: "100%",
        borderTopColor: "#e0e0e0",
        borderTopWidth: 1
    },
    item: {
        flex: 0.5
    },
    pressable: {
        height: "100%",
        textAlign: "center",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center"
    }
});

export default NavbarStyle;
