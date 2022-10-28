import { StyleSheet } from "react-native";

const SearchUserScreenStyle = StyleSheet.create({
    tabSelectorWrapper: {
        flexDirection: "row",
        height: 60
    },
    tabSelectorItem: {
        flex: 0.5,
        width: "100%",
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center"
    },
    tabSelectorItemText: {
        fontWeight: "bold",
        fontSize: 16
    }
});

export default SearchUserScreenStyle;
