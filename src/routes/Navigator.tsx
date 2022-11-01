import React, { useReducer, useEffect, createContext, useState, useContext } from "react";
import LeaderboardScreen from "../screens/LeaderboardScreen";
import LoginScreen from "../screens/LoginScreen";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import AuthService from "../api/AuthService";
import LoadingScreen from "../screens/LoadingScreen";
import UserContextProvider from "../context/UsersContextProvider";
import SearchUserScreen from "../screens/SearchUserScreen";
import UserDetailsScreen from "../screens/UserDetailsScreen";
import AccountScreen from "../screens/AccountScreen";
import CityPreviewScreen from "../screens/CityPreviewScreen";
import { AuthContext } from "../context/Context";

const AuthStack = createNativeStackNavigator();
const LeaderboardStack = createNativeStackNavigator();
const SearchUserStack = createNativeStackNavigator();
const AccountStack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

const Navigator = () => {
    const [loading, setLoading] = useState(true);
    const authContext = useContext(AuthContext);

    useEffect(() => {
        AuthService.isAuthenticated().then(authenticated => {
            authContext.setLoggedIn(authenticated);
            setLoading(false);
        });
    }, []);

    const buildNavigator = () => {
        if (loading) {
            return (
                <NavigationContainer>
                    <AuthStack.Navigator>
                        <AuthStack.Screen name="Loading" component={LoadingScreen} />
                    </AuthStack.Navigator>
                </NavigationContainer>
            );
        }

        if (!authContext.loggedIn) {
            return (
                <NavigationContainer>
                    <AuthStack.Navigator>
                        <AuthStack.Screen name="Login" component={LoginScreen} />
                    </AuthStack.Navigator>
                </NavigationContainer>
            );
        }

        const LeaderboardStackScreen = () => {
            return (
                <LeaderboardStack.Navigator>
                    <LeaderboardStack.Screen
                        name="Leaderboard"
                        component={LeaderboardScreen}
                        options={{
                            headerShown: false,
                            presentation: "modal",
                            animationTypeForReplace: "push",
                            animation: "slide_from_right"
                        }}
                    />
                    <LeaderboardStack.Screen
                        name="UserDetails"
                        component={UserDetailsScreen}
                        options={{
                            headerShown: false,
                            presentation: "modal",
                            animationTypeForReplace: "push",
                            animation: "slide_from_right"
                        }}
                    />
                    <LeaderboardStack.Screen
                        name="CityPreview"
                        component={CityPreviewScreen}
                        options={{
                            headerShown: false,
                            presentation: "modal",
                            animationTypeForReplace: "push",
                            animation: "slide_from_right"
                        }}
                    />
                </LeaderboardStack.Navigator>
            );
        };

        const SearchStackScreen = () => {
            return (
                <SearchUserStack.Navigator>
                    <SearchUserStack.Screen
                        name="Search"
                        component={SearchUserScreen}
                        options={{
                            headerShown: false,
                            presentation: "modal",
                            animationTypeForReplace: "push",
                            animation: "slide_from_right"
                        }}
                    />
                    <SearchUserStack.Screen
                        name="UserDetails"
                        component={UserDetailsScreen}
                        options={{
                            headerShown: false,
                            presentation: "modal",
                            animationTypeForReplace: "push",
                            animation: "slide_from_right"
                        }}
                    />
                    <SearchUserStack.Screen
                        name="CityPreview"
                        component={CityPreviewScreen}
                        options={{
                            headerShown: false,
                            presentation: "modal",
                            animationTypeForReplace: "push",
                            animation: "slide_from_right"
                        }}
                    />
                </SearchUserStack.Navigator>
            );
        };

        const AccountStackScreen = () => {
            return (
                <AccountStack.Navigator>
                    <AccountStack.Screen
                        name="Search"
                        component={AccountScreen}
                        options={{
                            headerShown: false,
                            presentation: "modal",
                            animationTypeForReplace: "push",
                            animation: "slide_from_right"
                        }}
                    />
                    <AccountStack.Screen
                        name="CityPreview"
                        component={CityPreviewScreen}
                        options={{
                            headerShown: false,
                            presentation: "modal",
                            animationTypeForReplace: "push",
                            animation: "slide_from_right"
                        }}
                    />
                </AccountStack.Navigator>
            );
        };

        return (
            <UserContextProvider>
                <NavigationContainer>
                    <Tab.Navigator>
                        <Tab.Screen
                            name="LeaderboardTab"
                            component={LeaderboardStackScreen}
                            options={{
                                headerShown: false,
                                tabBarStyle: { display: "none" }
                            }}
                        />
                        <Tab.Screen
                            name="SearchUserTab"
                            component={SearchStackScreen}
                            options={{
                                headerShown: false,
                                tabBarStyle: { display: "none" }
                            }}
                        />
                        <Tab.Screen
                            name="AccountTab"
                            component={AccountStackScreen}
                            options={{
                                headerShown: false,
                                tabBarStyle: { display: "none" }
                            }}
                        />
                    </Tab.Navigator>
                </NavigationContainer>
            </UserContextProvider>
        );
    };

    return buildNavigator();
};

export default Navigator;
