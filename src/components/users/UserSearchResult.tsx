import React from "react";
import { ScrollView } from "react-native";
import UserData from "../../types/model/UserData";
import UserCard from "./UserCard";
import UserWithRankCard from "./UserWithRankCard";

const UserSearchResult = ({ users }: { users: UserData[] }) => {
    return (
        <ScrollView>
            {users.map(userData => (
                <UserCard userData={userData} key={userData.id} />
            ))}
        </ScrollView>
    );
};

export default UserSearchResult;
