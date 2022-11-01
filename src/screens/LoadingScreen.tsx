import { Text } from "@rneui/base";
import React from "react";
import { View } from "react-native";
import LoadingAnimation from "../components/LoadingAnimation";

const LoadingScreen = () => {
    return (
        <View>
            <LoadingAnimation />
        </View>
    );
};

export default LoadingScreen;
