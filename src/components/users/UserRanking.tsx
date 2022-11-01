import React, { useContext, useEffect, useState } from "react";
import { ScrollView, StyleSheet, Text, View } from "react-native";
import { RefreshControl } from "react-native-gesture-handler";
import UserService from "../../api/UserService";
import { UserContext } from "../../context/Context";
import LoadingAnimation from "../LoadingAnimation";
import UserWithRankCard from "./UserWithRankCard";

/**
 * Wrapper that shows a ranking of all players
 */
const UserRanking = () => {
    const [refreshing, setRefreshing] = useState<boolean>(false);
    const userContext = useContext(UserContext);

    /**
     * Loads the users from the server in the state
     */
    const loadUsers = () => {
        setRefreshing(true);
        UserService.getRanking().then(users => {
            userContext.setRankedUsers(users);
            setRefreshing(false);
        });
    };

    /**
     * Creates a list of userCards with the rank number using the userdata
     * Or shows the loading animation when there are no users
     */
    const userCards =
        userContext.rankedUsers.length > 0 ? (
            userContext.rankedUsers.map(userData => <UserWithRankCard userData={userData} key={userData.id} />)
        ) : (
            <LoadingAnimation />
        );

    /**
     * Loads the users
     */
    const handleRefresh = () => {
        loadUsers();
    };

    useEffect(() => {
        loadUsers();
    }, []);

    return <ScrollView refreshControl={<RefreshControl refreshing={refreshing} onRefresh={handleRefresh} />}>{userCards}</ScrollView>;
};

export default UserRanking;
