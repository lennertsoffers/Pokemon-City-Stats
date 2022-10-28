import { Input, Text } from "@rneui/base";
import React, { useState } from "react";
import { NativeSyntheticEvent, Pressable, TextInputChangeEventData, View } from "react-native";
import { Immersive } from "react-native-immersive";
import UserService from "../../api/UserService";
import SearchUserByUsernameFormStyle from "../../styles/components/form/SearchUserByUsernameForm";
import UserData from "../../types/model/UserData";
import UserSearchResult from "../users/UserSearchResult";

const SearchUserByUsernameForm = () => {
    const [username, setUsername] = useState<string>("");
    const [users, setUsers] = useState<UserData[]>([]);

    const handleSubmitEnd = () => {
        if (username == "") return;

        UserService.getUsersByFilter("username==" + username).then(users => setUsers(users));
    };

    const handleUsernameChange = (event: NativeSyntheticEvent<TextInputChangeEventData>) => {
        setUsername(event.nativeEvent.text);
    };

    const handleInputBlur = () => {
        Immersive.setImmersive(true);
    };

    return (
        <View style={SearchUserByUsernameFormStyle.wrapper}>
            <View style={SearchUserByUsernameFormStyle.inputWrapper}>
                <View style={SearchUserByUsernameFormStyle.inputFieldWrapper}>
                    <Input
                        onSubmitEditing={handleSubmitEnd}
                        style={SearchUserByUsernameFormStyle.input}
                        placeholder="Username"
                        onChange={handleUsernameChange}
                        value={username}
                        onBlur={handleInputBlur}
                    />
                </View>
            </View>
            <View style={SearchUserByUsernameFormStyle.result}>{users.length > 0 && <UserSearchResult users={users} />}</View>
        </View>
    );
};

export default SearchUserByUsernameForm;
