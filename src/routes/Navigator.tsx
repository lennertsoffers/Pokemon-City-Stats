import React, { useReducer, useEffect, createContext, useState } from "react";
import HomeScreen from "../screens/HomeScreen";
import LoginScreen from "../screens/LoginScreen";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import AuthContextType from "../types/context/AuthContextType";
import AuthService from "../api/AuthService";
import LoadingScreen from "../screens/LoadingScreen";
import UserContextProvider from "../context/UsersContextProvider";

export const AuthContext = createContext<AuthContextType>({} as AuthContextType);
const Stack = createNativeStackNavigator();

const Navigator = () => {
    const [loading, setLoading] = useState(true);
    const [state, dispatch] = useReducer(
        (prevState: any, action: any) => {
            switch (action.type) {
                case "LOGIN":
                    return {
                        ...prevState,
                        loggedIn: true
                    };
                case "LOGOUT":
                    return {
                        ...prevState,
                        loggedIn: false
                    };
            }
        },
        {
            loggedIn: false
        }
    );

    useEffect(() => {
        AuthService.isAuthenticated().then(authenticated => {
            if (authenticated) dispatch({ type: "LOGIN" });
            setLoading(false);
        });
    }, []);

    const authContext: AuthContextType = (() => {
        const login = async (username: string, password: string) => {
            const loggedIn = await AuthService.login(username, password);
            if (loggedIn) dispatch({ type: "LOGIN" });
        };
        const logout = () => {
            AuthService.logout();
            dispatch({ type: "LOGOUT" });
        };
        const isLoggedIn = (): boolean => state.loggedIn;

        return {
            login,
            logout,
            isLoggedIn
        };
    })();

    const buildNavigator = () => {
        if (loading) {
            return (
                <NavigationContainer>
                    <Stack.Navigator>
                        <Stack.Screen name="Loading" component={LoadingScreen} />
                    </Stack.Navigator>
                </NavigationContainer>
            );
        }

        if (!state.loggedIn) {
            return (
                <NavigationContainer>
                    <Stack.Navigator>
                        <Stack.Screen name="Login" component={LoginScreen} />
                    </Stack.Navigator>
                </NavigationContainer>
            );
        }

        return (
            <UserContextProvider>
                <NavigationContainer>
                    <Stack.Navigator>
                        <Stack.Screen name="Home" component={HomeScreen} />
                    </Stack.Navigator>
                </NavigationContainer>
            </UserContextProvider>
        );
    };

    return <AuthContext.Provider value={authContext}>{buildNavigator()}</AuthContext.Provider>;
};

export default Navigator;
