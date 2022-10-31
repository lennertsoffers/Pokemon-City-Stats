import { Route, useNavigation } from "@react-navigation/native";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { Text } from "@rneui/base";
import React from "react";
import { Pressable, View } from "react-native";
import ScreenContent from "../components/content/ScreenContent";
import UserDetailsScreenStyle from "../styles/screens/UserDetailsScreenStyle";
import UserData from "../types/model/UserData";
import StringUtils from "../utils/StringUtils";
import Icon from "react-native-vector-icons/FontAwesome5";

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
            <View style={UserDetailsScreenStyle.wrapper}>
                <View style={UserDetailsScreenStyle.nameAndLevelWrapper}>
                    <Text style={UserDetailsScreenStyle.username}>{userData.username}</Text>
                    <Text style={UserDetailsScreenStyle.level}>LV. {userData.level}</Text>
                </View>
                <Text style={UserDetailsScreenStyle.score}>Score: {userData.statistics.score}</Text>
                <View style={UserDetailsScreenStyle.cityNameWrapper}>
                    <Text style={UserDetailsScreenStyle.cityNameText}>{userData.cityName}</Text>
                </View>
                <View style={UserDetailsScreenStyle.statisticWrapper}>
                    <Icon style={UserDetailsScreenStyle.statisticWrapperIcon} name="money-bill" size={20} color={"#000"} />
                    <Text style={UserDetailsScreenStyle.statisticWrapperLabel}>Money: </Text>
                    <Text style={UserDetailsScreenStyle.statisticWrapperValue}>{StringUtils.simplify(userData.money)}</Text>
                </View>
                <View style={UserDetailsScreenStyle.statisticWrapper}>
                    <Icon style={UserDetailsScreenStyle.statisticWrapperIcon} name="star" size={20} color={"#000"} />
                    <Text style={UserDetailsScreenStyle.statisticWrapperLabel}>Satisfaction: </Text>
                    <Text style={UserDetailsScreenStyle.statisticWrapperValue}>{Math.round(userData.satisfaction * 100)}</Text>
                </View>
                <View style={UserDetailsScreenStyle.statisticWrapper}>
                    <Icon style={UserDetailsScreenStyle.statisticWrapperIcon} name="users" size={20} color={"#000"} />
                    <Text style={UserDetailsScreenStyle.statisticWrapperLabel}>Citizens: </Text>
                    <Text style={UserDetailsScreenStyle.statisticWrapperValue}>{StringUtils.simplify(userData.citizens)}</Text>
                </View>
                <View style={UserDetailsScreenStyle.statisticWrapper}>
                    <Icon style={UserDetailsScreenStyle.statisticWrapperIcon} name="user-tie" size={20} color={"#000"} />
                    <Text style={UserDetailsScreenStyle.statisticWrapperLabel}>Employees: </Text>
                    <Text style={UserDetailsScreenStyle.statisticWrapperValue}>{StringUtils.simplify(userData.employedCitizens)}</Text>
                </View>
                <View style={UserDetailsScreenStyle.statisticWrapper}>
                    <Icon style={UserDetailsScreenStyle.statisticWrapperIcon} name="hourglass-end" size={20} color={"#000"} />
                    <Text style={UserDetailsScreenStyle.statisticWrapperLabel}>Time Played: </Text>
                    <Text style={UserDetailsScreenStyle.statisticWrapperValue}>
                        {StringUtils.simplify(Math.round(userData.statistics.timePlayed / 60))} h
                    </Text>
                </View>
                <View style={UserDetailsScreenStyle.statisticWrapper}>
                    <Icon style={UserDetailsScreenStyle.statisticWrapperIcon} name="money-check-alt" size={20} color={"#000"} />
                    <Text style={UserDetailsScreenStyle.statisticWrapperLabel}>Total Value: </Text>
                    <Text style={UserDetailsScreenStyle.statisticWrapperValue}>{StringUtils.simplify(userData.statistics.totalValue)}</Text>
                </View>
                <View style={UserDetailsScreenStyle.statisticWrapper}>
                    <Icon style={UserDetailsScreenStyle.statisticWrapperIcon} name="donate" size={20} color={"#000"} />
                    <Text style={UserDetailsScreenStyle.statisticWrapperLabel}>Money Spent: </Text>
                    <Text style={UserDetailsScreenStyle.statisticWrapperValue}>{StringUtils.simplify(userData.statistics.moneySpent)}</Text>
                </View>
                <View style={UserDetailsScreenStyle.statisticWrapper}>
                    <Icon style={UserDetailsScreenStyle.statisticWrapperIcon} name="piggy-bank" size={20} color={"#000"} />
                    <Text style={UserDetailsScreenStyle.statisticWrapperLabel}>Money Collected: </Text>
                    <Text style={UserDetailsScreenStyle.statisticWrapperValue}>
                        {StringUtils.simplify(userData.statistics.moneyCollected)}
                    </Text>
                </View>
                <View style={UserDetailsScreenStyle.statisticWrapper}>
                    <Icon style={UserDetailsScreenStyle.statisticWrapperIcon} name="money-bill-alt" size={20} color={"#000"} />
                    <Text style={UserDetailsScreenStyle.statisticWrapperLabel}>Income Per Minute: </Text>
                    <Text style={UserDetailsScreenStyle.statisticWrapperValue}>
                        {StringUtils.simplify(userData.statistics.incomePerMinute)}
                    </Text>
                </View>
                <View style={UserDetailsScreenStyle.statisticWrapper}>
                    <Icon style={UserDetailsScreenStyle.statisticWrapperIcon} name="home" size={20} color={"#000"} />
                    <Text style={UserDetailsScreenStyle.statisticWrapperLabel}>Buildings Built: </Text>
                    <Text style={UserDetailsScreenStyle.statisticWrapperValue}>
                        {StringUtils.simplify(userData.statistics.buildingsBuilt)}
                    </Text>
                </View>
                <View style={UserDetailsScreenStyle.statisticWrapper}>
                    <Icon style={UserDetailsScreenStyle.statisticWrapperIcon} name="house-damage" size={20} color={"#000"} />
                    <Text style={UserDetailsScreenStyle.statisticWrapperLabel}>Buildings Demolished: </Text>
                    <Text style={UserDetailsScreenStyle.statisticWrapperValue}>
                        {StringUtils.simplify(userData.statistics.buildingsDemolished)}
                    </Text>
                </View>
                <Pressable style={UserDetailsScreenStyle.viewCityButton} onPress={handleViewCityPress}>
                    <Text style={UserDetailsScreenStyle.viewCityButtonText}>View city</Text>
                </Pressable>
            </View>
        </ScreenContent>
    );
};

export default UserDetailsScreen;
