import { StyleSheet } from "react-native";

const UserDetailsScreenStyle = StyleSheet.create({
    wrapper: {
        padding: 10
    },
    nameAndLevelWrapper: {
        flexDirection: "row",
        justifyContent: "space-between"
    },
    username: {
        fontWeight: "bold",
        fontSize: 16,
        lineHeight: 40
    },
    level: {
        backgroundColor: "#58a6ff",
        color: "#fff",
        fontWeight: "bold",
        fontSize: 16,
        height: 40,
        width: 60,
        lineHeight: 40,
        textAlign: "center",
        borderRadius: 5
    },
    score: {
        marginBottom: 20
    },
    cityNameWrapper: {
        marginBottom: 20
    },
    cityNameText: {
        fontWeight: "bold"
    },
    statisticWrapper: {
        flexDirection: "row",
        marginBottom: 5
    },
    statisticWrapperIcon: {
        width: 30
    },
    statisticWrapperLabel: {
        width: 200
    },
    statisticWrapperValue: {},
    viewCityButton: {
        marginTop: 20
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

export default UserDetailsScreenStyle;
