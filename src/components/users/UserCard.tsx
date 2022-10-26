import { useNavigation } from "@react-navigation/native";
import { Text } from "@rneui/base";
import React, { useContext } from "react";
import { Pressable, View } from "react-native";
import { UserContext } from "../../context/Context";
import UserData from "../../types/model/UserData";

const UserCard = ({ userData }: { userData: UserData }) => {
    const userContext = useContext(UserContext);
    const navigator = useNavigation();

    const handleUserPress = () => {
        navigator.navigate("UserDetails" as never, userContext.rankedUsers.find(user => user.id == userData.id) as never);
    };

    return (
        <Pressable onPress={handleUserPress}>
            <Text>{userData.username}</Text>
            <Text>{userData.level}</Text>
            <Text>{userData.statistics.score}</Text>
            {userData.rank && <Text>{userData.rank}</Text>}
        </Pressable>
    );
};

export default UserCard;
