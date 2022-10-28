import { StyleSheet } from "react-native";

const HeaderStyle = StyleSheet.create({
    wrapper: {
        height: "100%",
        flexDirection: "row",
        justifyContent: "flex-start",
        borderBottomColor: "#e0e0e0",
        borderBottomWidth: 1
    },
    item: {
        height: "100%",
        flexDirection: "column",
        justifyContent: "center",
        paddingLeft: 20
    },
    itemContent: {
        fontWeight: "bold",
        fontSize: 25
    }
});

export default HeaderStyle;
