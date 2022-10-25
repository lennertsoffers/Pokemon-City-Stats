import { Text } from "@rneui/base";
import React, { useCallback, useContext, useEffect, useState } from "react";
import { View } from "react-native";
import AuthService from "../api/AuthService";
import Loading from "../components/Loading";
import AuthContext from "../global/context/AuthContext";

const HomeScreen = ({ navigation }: any) => {
    const authContext = useContext(AuthContext);
    const [loadedLogin, setLoadedLogin] = useState<boolean>(false);

    const logout = () => {
        if (!authContext) return;

        AuthService.logout();
        authContext?.setLoggedIn(false);
    };

    useEffect(() => {
        (async () => {
            if (!authContext) return;

            const loggedIn = await AuthService.setHeader();
            authContext.setLoggedIn(loggedIn);

            if (!loggedIn) navigation.navigate("LoginScreen");

            setLoadedLogin(true);
        })();
    }, []);

    useEffect(() => {
        if (!authContext) return;
        if (loadedLogin && !authContext.loggedIn) navigation.navigate("LoginScreen");
    }, [authContext]);

    if (!authContext) return <Loading />;
    return (
        <View>
            <Text onPress={logout}>HomeScreen</Text>
        </View>
    );
};

export default HomeScreen;
