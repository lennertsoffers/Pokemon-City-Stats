import React, { useEffect, useState } from "react";
import { NativeSyntheticEvent, Pressable, Text, TextInputChangeEventData, View } from "react-native";
import { TextInput } from "react-native-gesture-handler";
import UserService from "../../api/UserService";
import UserData from "../../types/model/UserData";
import LoadingAnimation from "../LoadingAnimation";
import { Immersive } from "react-native-immersive";
import CityService from "../../api/CityService";
import { useNavigation } from "@react-navigation/native";
import AccountStyle from "../../styles/components/users/AccountStyle";
import Icon from "react-native-vector-icons/FontAwesome5";

/**
 * Represents the account screen content
 */
const Account = () => {
    const navigator = useNavigation();
    const [accountInfo, setAccountInfo] = useState<UserData>({} as UserData);
    const [cityName, setCityName] = useState<string>("");
    const [loading, setLoading] = useState<boolean>(true);

    /**
     * Changes the city name state to the value in the city name input box
     */
    const handleChangeCityName = (event: NativeSyntheticEvent<TextInputChangeEventData>) => {
        setCityName(event.nativeEvent.text);
    };

    /**
     * Go back to full screen after unfocussing the input field
     * Send a request to the server to update the city name
     */
    const handleCityNameInputBlur = () => {
        Immersive.setImmersive(true);
        CityService.changeCityName(cityName);
    };

    /**
     * Navigates to the city preview for the current
     */
    const handleViewCityPress = () => {
        navigator.navigate("CityPreview" as never, accountInfo.id as never);
    };

    /**
     * Loads the user data and set the city name to the city name of the user
     */
    useEffect(() => {
        (async () => {
            const userData = await UserService.getAccountInfo();
            setAccountInfo(userData);
            setCityName(userData.cityName);
            setLoading(false);
        })();
    }, []);

    if (loading) return <LoadingAnimation />;
    return (
        <View style={AccountStyle.wrapper}>
            <View style={AccountStyle.nameLevel}>
                <Text style={AccountStyle.username}>{accountInfo.username}</Text>
                <Text style={AccountStyle.level}>LV. {accountInfo.level}</Text>
            </View>
            <View style={AccountStyle.cityName}>
                <TextInput
                    style={AccountStyle.cityNameInput}
                    value={cityName}
                    onChange={handleChangeCityName}
                    onBlur={handleCityNameInputBlur}
                />
            </View>
            <View style={AccountStyle.topic}>
                <Icon style={AccountStyle.icon} name="chart-line" size={20} color={"#000"} />
                <Text style={AccountStyle.label}>Score:</Text>
                <Text style={AccountStyle.value}>{accountInfo.statistics.score}</Text>
            </View>
            <View style={AccountStyle.topic}>
                <Icon style={AccountStyle.icon} name="money-check-alt" size={20} color={"#000"} />
                <Text style={AccountStyle.label}>Total value:</Text>
                <Text style={AccountStyle.value}>{accountInfo.statistics.totalValue}</Text>
            </View>
            <Pressable style={AccountStyle.viewCityButton} onPress={handleViewCityPress}>
                <Text style={AccountStyle.viewCityButtonText}>View City</Text>
            </Pressable>
        </View>
    );
};

export default Account;
