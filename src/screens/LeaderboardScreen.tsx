import React from "react";
import ScreenContent from "../components/content/ScreenContent";
import UserRanking from "../components/users/UserRanking";

/**
 * Screen showing the ranking of the users
 */
const LeaderboardScreen = () => {
    return (
        <ScreenContent>
            <UserRanking />
        </ScreenContent>
    );
};

export default LeaderboardScreen;
