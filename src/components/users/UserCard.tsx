import { useNavigation } from "@react-navigation/native";
import { Text } from "@rneui/base";
import React, { useContext } from "react";
import { Pressable, View } from "react-native";
import { UserContext } from "../../context/Context";
import UserCardStyle from "../../styles/components/users/UserCardStyle";
import UserData from "../../types/model/UserData";

/**
 * Shows the preview data of one user
 * @param userData The data of the the user to display
 */
const UserCard = ({ userData }: { userData: UserData }) => {
    const userContext = useContext(UserContext);
    const navigator = useNavigation();

    /**
     * Handles clicking on the card by navigation to the userDetails screen and passing that users
     */
    const handleUserPress = () => {
        navigator.navigate("UserDetails" as never, userContext.rankedUsers.find(user => user.id == userData.id) as never);
    };

    return (
        <Pressable style={UserCardStyle.wrapper} onPress={handleUserPress}>
            <View style={UserCardStyle.left}>
                <View style={UserCardStyle.usernameWrapper}>
                    <Text style={UserCardStyle.usernameContent}>{userData.username}</Text>
                </View>
            </View>
            <View style={UserCardStyle.right}>
                <Text style={UserCardStyle.score}>{userData.statistics.score}</Text>
            </View>
        </Pressable>
    );
};

export default UserCard;
