import { StyleSheet } from "react-native";

const NavbarStyle = StyleSheet.create({
    wrapper: {
        display: "flex",
        flexDirection: "row",
        width: "100%",
        height: "100%",
        borderTopColor: "#000",
        borderTopWidth: 3
    },
    item: {
        flex: 0.5
    }
});

export default NavbarStyle;
