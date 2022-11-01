import { StyleSheet } from "react-native";

const AccountStyle = StyleSheet.create({
    wrapper: {},
    nameLevel: {
        backgroundColor: "#58a6ff",
        padding: 20,
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        marginBottom: 10
    },
    username: {
        color: "#fff",
        fontWeight: "bold",
        fontSize: 18
    },
    level: {
        color: "#58a6ff",
        backgroundColor: "#fff",
        padding: 10,
        fontWeight: "bold",
        fontSize: 16,
        borderRadius: 5
    },
    cityName: {
        padding: 10
    },
    cityNameInput: {
        padding: 10,
        borderRadius: 5,
        backgroundColor: "#e0e0e0"
    },
    topic: {
        flexDirection: "row",
        marginTop: 10,
        marginHorizontal: 10
    },
    icon: {
        width: 40
    },
    label: {
        width: 150
    },
    value: {},
    viewCityButton: {
        marginTop: 20,
        padding: 10
    },
    viewCityButtonText: {
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

export default AccountStyle;
