import { Route, useNavigation } from "@react-navigation/native";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { Text } from "@rneui/base";
import React from "react";
import { Pressable } from "react-native";
import ScreenContent from "../components/content/ScreenContent";
import UserData from "../types/model/UserData";

const UserDetailsScreen = ({ route }: NativeStackScreenProps<any>) => {
    const userData: Readonly<UserData> | undefined = route.params;
    const navigator = useNavigation();

    if (!userData) {
        return (
            <ScreenContent>
                <Text>User not found</Text>
            </ScreenContent>
        );
    }

    const handleViewCityPress = () => {
        navigator.navigate("CityPreview" as never, userData.id as never);
    };

    return (
        <ScreenContent showNavbar={false} title={userData.username} backButton={true}>
            <Text>{userData.username}</Text>
            <Pressable onPress={handleViewCityPress}>
                <Text>View city</Text>
            </Pressable>
        </ScreenContent>
    );
};

export default UserDetailsScreen;
