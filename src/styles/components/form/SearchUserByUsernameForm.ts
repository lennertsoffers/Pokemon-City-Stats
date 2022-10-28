import { StyleSheet } from "react-native";

const SearchUserByUsernameFormStyle = StyleSheet.create({
    wrapper: {
        padding: 10,
        height: "100%",
        flexDirection: "column"
    },
    inputWrapper: {
        flexDirection: "row",
        alignItems: "center",
        height: 60,
        marginBottom: 10
    },
    inputFieldWrapper: {
        flex: 1,
        height: 60,
        paddingTop: 10
    },
    input: {
        height: 40
    },
    result: {
        flex: 1,
        height: "100%"
    }
});

export default SearchUserByUsernameFormStyle;
