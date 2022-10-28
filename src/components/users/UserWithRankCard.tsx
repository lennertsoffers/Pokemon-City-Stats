import { useNavigation } from "@react-navigation/native";
import { Text } from "@rneui/base";
import React, { useContext } from "react";
import { Pressable, View } from "react-native";
import { UserContext } from "../../context/Context";
import UserWithRankCardStyle from "../../styles/users/UserWithRankCardStyle";
import UserData from "../../types/model/UserData";

const UserWithRankCard = ({ userData }: { userData: UserData }) => {
    const userContext = useContext(UserContext);
    const navigator = useNavigation();

    const handleUserPress = () => {
        navigator.navigate("UserDetails" as never, userContext.rankedUsers.find(user => user.id == userData.id) as never);
    };

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
