import React from "react";
import { View } from "react-native";
import LoadingAnimation from "../components/LoadingAnimation";

/**
 * Screen showing the loading animation
 */
const LoadingScreen = () => {
    return (
        <View>
            <LoadingAnimation />
        </View>
    );
};

export default LoadingScreen;
