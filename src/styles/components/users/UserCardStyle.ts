import { StyleSheet } from "react-native";

const UserCardStyle = StyleSheet.create({
    wrapper: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        marginHorizontal: 10,
        padding: 15,
        margiBottom: 10,
        borderBottomColor: "#e0e0e0",
        borderBottomWidth: 1
    },
    left: {
        flexDirection: "row",
        alignItems: "center"
    },
    right: {},
    usernameWrapper: {},
    usernameContent: {
        fontWeight: "bold",
        fontSize: 16
    },
    score: {
        fontSize: 16,
        backgroundColor: "#58a6ff",
        paddingVertical: 5,
        width: 120,
        textAlign: "center",
        color: "#fff",
        fontWeight: "bold",
        borderRadius: 5
    }
});

export default UserCardStyle;
