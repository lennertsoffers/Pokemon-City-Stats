import React, { useContext, useEffect, useState } from "react";
import { NativeSyntheticEvent, StyleSheet, TextInputChangeEventData, TextInputComponent, View } from "react-native";
import { Input, Text } from "@rneui/base";
import { Button } from "@rneui/themed";
import { AuthContext } from "../routes/Navigator";

const LoginScreen = () => {
    const authContext = useContext(AuthContext);
    const [username, setUsername] = useState<string>("");
    const [password, setPassword] = useState<string>("");

    const handleUsernameChange = (event: NativeSyntheticEvent<TextInputChangeEventData>) => {
        setUsername(event.nativeEvent.text);
    };

    const handlePasswordChange = (event: NativeSyntheticEvent<TextInputChangeEventData>) => {
        setPassword(event.nativeEvent.text);
    };

    const handleLoginClick = async () => {
        authContext.login(username, password);
    };

    return (
        <View style={styles.loginScreen}>
            <Text h1>Login</Text>
            <View>
                <Text>Username</Text>
                <Input onChange={handleUsernameChange} value={username} placeholder="Username" />
            </View>
            <View>
                <Text>Password</Text>
                <Input onChange={handlePasswordChange} value={password} placeholder="Password" secureTextEntry />
            </View>
            <View>
                <Button onPress={handleLoginClick}>Login</Button>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    loginScreen: {
        height: "100%",
        width: "100%"
    }
});

export default LoginScreen;
