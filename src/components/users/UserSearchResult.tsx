import React from "react";
import { ScrollView } from "react-native";
import UserData from "../../types/model/UserData";
import UserCard from "./UserCard";

/**
 * Shows a list of user cars that meet the filter result
 */
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
