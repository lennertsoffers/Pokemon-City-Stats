import React, { useContext, useEffect, useState } from "react";
import { NativeSyntheticEvent, Pressable, StyleSheet, TextInput, TextInputChangeEventData, TextInputComponent, View } from "react-native";
import { Text } from "@rneui/base";
import { Immersive } from "react-native-immersive";
import { AuthContext } from "../routes/Navigator";
import LoginScreenStyle from "../styles/screens/LoginScreenStyle";

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

    const handleInputBlur = () => {
        Immersive.setImmersive(true);
    };

    return (
        <View style={LoginScreenStyle.wrapper}>
            <View style={LoginScreenStyle.inputWrapper}>
                <Text style={LoginScreenStyle.label}>Username</Text>
                <TextInput
                    style={LoginScreenStyle.input}
                    onBlur={handleInputBlur}
                    onChange={handleUsernameChange}
                    value={username}
                    placeholder="Username"
                />
            </View>
            <View style={LoginScreenStyle.inputWrapper}>
                <Text style={LoginScreenStyle.label}>Password</Text>
                <TextInput
                    style={LoginScreenStyle.input}
                    onChange={handlePasswordChange}
                    onBlur={handleInputBlur}
                    value={password}
                    placeholder="Password"
                    secureTextEntry
                />
            </View>
            <Pressable style={LoginScreenStyle.loginButton} onPress={handleLoginClick}>
                <Text style={LoginScreenStyle.loginButtonText}>Login</Text>
            </Pressable>
        </View>
    );
};

export default LoginScreen;
