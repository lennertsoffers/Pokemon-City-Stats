import { useNavigation } from "@react-navigation/native";
import { Text } from "@rneui/base";
import React, { useContext } from "react";
import { Pressable, View } from "react-native";
import { UserContext } from "../../context/Context";
import UserWithRankCardStyle from "../../styles/components/users/UserWithRankCardStyle";
import UserData from "../../types/model/UserData";

/**
 * Shows the preview data of one user including that user's rank
 * @param userData The data of the the user to display
 */
const UserWithRankCard = ({ userData }: { userData: UserData }) => {
    const userContext = useContext(UserContext);
    const navigator = useNavigation();

    /**
     * Handles clicking on the card by navigation to the userDetails screen and passing that users
     */
    const handleUserPress = () => {
        navigator.navigate("UserDetails" as never, userContext.rankedUsers.find(user => user.id == userData.id) as never);
    };

    /**
     * Gets the correct colour for the rank of the user
     * Gold for rank 1, than silver, than bronze and than default
     */
    const getBackgroundColour = () => {
        switch (userData.rank) {
            case 1:
                return "#AF9500";
            case 2:
                return "#B4B4B4";
            case 3:
                return "#6A3805";
            default:
                return "#58a6ff";
        }
    };

    return (
        <Pressable style={UserWithRankCardStyle.wrapper} onPress={handleUserPress}>
            <View style={UserWithRankCardStyle.left}>
                <View style={[UserWithRankCardStyle.rankWrapper, { backgroundColor: getBackgroundColour() }]}>
                    <Text style={UserWithRankCardStyle.rankContent}>{userData.rank}</Text>
                </View>
                <View style={UserWithRankCardStyle.usernameWrapper}>
                    <Text style={UserWithRankCardStyle.usernameContent}>{userData.username}</Text>
                </View>
            </View>
            <View style={UserWithRankCardStyle.right}>
                <Text style={UserWithRankCardStyle.score}>{userData.statistics.score}</Text>
            </View>
        </Pressable>
    );
};

export default UserWithRankCard;
