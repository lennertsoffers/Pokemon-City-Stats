import React, { useContext, useState } from "react";
import { NativeSyntheticEvent, Pressable, StyleSheet, TextInput, TextInputChangeEventData, TextInputComponent, View } from "react-native";
import { Text } from "@rneui/base";
import { Immersive } from "react-native-immersive";
import LoginScreenStyle from "../styles/screens/LoginScreenStyle";
import AuthService from "../api/AuthService";
import { AuthContext } from "../context/Context";

/**
 * Screen showing the login form and handling login actions
 */
const LoginScreen = () => {
    const authContext = useContext(AuthContext);
    const [username, setUsername] = useState<string>("");
    const [password, setPassword] = useState<string>("");

    /**
     * Updates the username state if the value of the input field changes
     */
    const handleUsernameChange = (event: NativeSyntheticEvent<TextInputChangeEventData>) => {
        setUsername(event.nativeEvent.text);
    };

    /**
     * Updates the password state if the value of the input field changes
     */
    const handlePasswordChange = (event: NativeSyntheticEvent<TextInputChangeEventData>) => {
        setPassword(event.nativeEvent.text);
    };

    /**
     * Handles clicking the login button by calling the userservice to login
     */
    const handleLoginClick = async () => {
        const loggedIn = await AuthService.login(username, password);
        authContext.setLoggedIn(loggedIn);
    };

    /**
     * Handles unfocussing the input field by going back into fullscreen mode
     */
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
