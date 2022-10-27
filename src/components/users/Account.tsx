import React, { useEffect, useState } from "react";
import { NativeSyntheticEvent, Text, TextInputChangeEventData, View } from "react-native";
import { TextInput } from "react-native-gesture-handler";
import UserService from "../../api/UserService";
import UserData from "../../types/model/UserData";
import LoadingAnimation from "../LoadingAnimation";
import { Immersive } from "react-native-immersive";
import CityService from "../../api/CityService";

const Account = () => {
    const [accountInfo, setAccountInfo] = useState<UserData>({} as UserData);
    const [cityName, setCityName] = useState<string>("");
    const [loading, setLoading] = useState<boolean>(true);

    const handleChangeCityName = (event: NativeSyntheticEvent<TextInputChangeEventData>) => {
        setCityName(event.nativeEvent.text);
    };

    const handleCityNameInputBlur = () => {
        Immersive.setImmersive(true);
        CityService.changeCityName(cityName);
    };

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
        <View>
            <Text>{accountInfo.username}</Text>
            <Text>{accountInfo.level}</Text>
            <Text>{accountInfo.money}</Text>
            <Text>{accountInfo.statistics.score}</Text>
            <View>
                <TextInput value={cityName} onChange={handleChangeCityName} onBlur={handleCityNameInputBlur} />
            </View>
        </View>
    );
};

export default Account;
