import { Input, Text } from "@rneui/base";
import React, { useState } from "react";
import { NativeSyntheticEvent, Pressable, TextInputChangeEventData, View } from "react-native";
import { Immersive } from "react-native-immersive";
import UserService from "../../api/UserService";
import UserData from "../../types/model/UserData";
import UserSearchResult from "../users/UserSearchResult";

const SearchUserByUsernameForm = () => {
    const [username, setUsername] = useState<string>("");
    const [users, setUsers] = useState<UserData[]>([]);

    const handleSearchPress = () => {
        if (username == "") return;

        UserService.getUserByFilter("username==" + username).then(users => setUsers(users));
    };

    const handleUsernameChange = (event: NativeSyntheticEvent<TextInputChangeEventData>) => {
        setUsername(event.nativeEvent.text);
    };

    const handleInputBlur = () => {
        Immersive.setImmersive(true);
    };

    return (
        <View>
            <View>
                <View>
                    <Text>Username</Text>
                    <Input placeholder="Username" onChange={handleUsernameChange} value={username} onBlur={handleInputBlur} />
                </View>
                <View>
                    <Pressable onPress={handleSearchPress}>
                        <Text>Search</Text>
                    </Pressable>
                </View>
                {users.length > 0 && <UserSearchResult users={users} />}
            </View>
        </View>
    );
};

export default SearchUserByUsernameForm;
