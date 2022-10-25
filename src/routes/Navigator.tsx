import React, { useReducer, useEffect, createContext, useState } from "react";
import HomeScreen from "../screens/HomeScreen";
import LoginScreen from "../screens/LoginScreen";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import AuthContextType from "../types/AuthContextType";
import AuthService from "../api/AuthService";
import LoadingScreen from "../screens/LoadingScreen";

export const AuthContext = createContext<AuthContextType>({ login: async () => {}, logout: () => {}, isLoggedIn: () => false });
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

    const screenStack = !state.loggedIn ? (
        <Stack.Screen name="Login" component={LoginScreen} />
    ) : (
        <Stack.Screen name="Home" component={HomeScreen} />
    );

    return (
        <AuthContext.Provider value={authContext}>
            <NavigationContainer>
                <Stack.Navigator>{loading ? <Stack.Screen name="Loading" component={LoadingScreen} /> : screenStack}</Stack.Navigator>
            </NavigationContainer>
        </AuthContext.Provider>
    );
};

export default Navigator;
