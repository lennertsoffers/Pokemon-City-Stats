import { StyleSheet } from "react-native";

const UserWithRankCardStyle = StyleSheet.create({
    wrapper: {
        flexDirection: "row",
        justifyContent: "space-between",
        height: 60,
        alignItems: "center",
        marginHorizontal: 10
    },
    left: {
        flexDirection: "row",
        height: 40,
        alignItems: "center"
    },
    right: {},
    rankWrapper: {
        height: 40,
        width: 40,
        borderRadius: 5,
        marginRight: 10
    },
    rankContent: {
        color: "#fff",
        fontSize: 25,
        fontWeight: "bold",
        lineHeight: 40,
        width: 40,
        textAlign: "center"
    },
    usernameWrapper: {},
    usernameContent: {
        fontWeight: "bold",
        fontSize: 16
    },
    score: {
        fontSize: 16
    }
});

export default UserWithRankCardStyle;
