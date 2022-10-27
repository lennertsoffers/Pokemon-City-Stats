import { Text } from "@rneui/base";
import React from "react";
import { View } from "react-native";
import ScreenContent from "../components/content/ScreenContent";
import UserRanking from "../components/users/UserRanking";

const LeaderboardScreen = () => {
    return (
        <View>
            <ScreenContent>
                <UserRanking />
            </ScreenContent>
        </View>
    );
};

export default LeaderboardScreen;