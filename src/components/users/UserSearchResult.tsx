import React from "react";
import { ScrollView } from "react-native";
import UserData from "../../types/model/UserData";
import UserWithRankCard from "./UserWithRankCard";

const UserSearchResult = ({ users }: { users: UserData[] }) => {
    return (
        <ScrollView>
            {users.map(userData => (
                <UserWithRankCard userData={userData} key={userData.id} />
            ))}
        </ScrollView>
    );
};

export default UserSearchResult;
