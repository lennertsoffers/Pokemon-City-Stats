import { StyleSheet } from "react-native";

const SearchUserByNumericFormStyle = StyleSheet.create({
    numericForm: {
        flex: 1
    },
    filterSelector: {
        flexDirection: "row",
        paddingHorizontal: 10,
        paddingVertical: 20,
        borderBottomColor: "#e0e0e0",
        borderBottomWidth: 1
    },
    dropdownField: {
        flex: 0.33,
        backgroundColor: "white",
        borderRadius: 12,
        padding: 10,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 1
        },
        shadowOpacity: 0.2,
        shadowRadius: 1.41,

        elevation: 2
    },
    dropdownOperation: {
        flex: 0.15,
        marginHorizontal: 10,
        backgroundColor: "white",
        borderRadius: 12,
        padding: 10,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 1
        },
        shadowOpacity: 0.2,
        shadowRadius: 1.41,

        elevation: 2
    },
    valueInputWrapper: {
        flex: 0.32,
        marginRight: 10,
        backgroundColor: "white",
        borderRadius: 12,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 1
        },
        shadowOpacity: 0.2,
        shadowRadius: 1.41,

        elevation: 2,
        flexDirection: "column",
        justifyContent: "center"
    },
    valueInput: {
        marginHorizontal: 5
    },
    searchButton: {
        flex: 0.2,

        backgroundColor: "white",
        borderRadius: 12,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 1
        },
        shadowOpacity: 0.2,
        shadowRadius: 1.41,

        elevation: 2,
        flexDirection: "column",
        justifyContent: "center"
    },
    searchButtonContent: {
        textAlign: "center"
    },
    item: {
        padding: 10
    },
    textItem: {
        flex: 1,
        fontSize: 16
    },
    placeholderStyle: {
        fontSize: 16
    },
    selectedTextStyle: {
        fontSize: 16
    },
    iconStyle: {
        width: 20,
        height: 20
    },
    inputSearchStyle: {
        height: 40,
        fontSize: 16
    }
});

export default SearchUserByNumericFormStyle;
