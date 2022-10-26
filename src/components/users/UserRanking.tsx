import { Text } from "@rneui/base";
import React, { useContext, useEffect } from "react";
import { ScrollView, View } from "react-native";
import UserService from "../../api/UserService";
import { UserContext } from "../../context/Context";
import LoadingScreen from "../../screens/LoadingScreen";
import LoadingAnimation from "../LoadingAnimation";
import UserRankCard from "./UserRankCard";

const UserRanking = () => {
    const userContext = useContext(UserContext);

    const userCards =
        userContext.rankedUsers.length > 0 ? (
            userContext.rankedUsers.map(userData => <UserRankCard userData={userData} key={userData.id} />)
        ) : (
            <LoadingAnimation />
        );

    useEffect(() => {
        UserService.getRanking().then(users => userContext.setRankedUsers(users));
    }, []);

    return <ScrollView>{userCards}</ScrollView>;
};

export default UserRanking;
