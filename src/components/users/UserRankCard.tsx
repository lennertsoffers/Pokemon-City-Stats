import { Text } from "@rneui/base";
import React from "react";
import { View } from "react-native";
import UserData from "../../types/model/UserData";

const UserRankCard = ({ userData }: { userData: UserData }) => {
    return (
        <View>
            <Text>{userData.username}</Text>
        </View>
    );
};

export default UserRankCard;
