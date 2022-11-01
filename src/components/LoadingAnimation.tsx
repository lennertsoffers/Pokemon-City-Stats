import { Text } from "@rneui/base";
import React from "react";
import { Image, ImageBackground, View } from "react-native";
import FastImage from "react-native-fast-image";
import LoadingAnimationStyle from "../styles/components/LoadingAnimationStyle";

const LoadingAnimation = () => {
    return (
        <View style={LoadingAnimationStyle.wrapper}>
            <View style={LoadingAnimationStyle.box}>
                <Text style={LoadingAnimationStyle.text}>Loading...</Text>
                <FastImage source={require("../assets/gif/loading.gif")} style={LoadingAnimationStyle.image} />
            </View>
        </View>
    );
};

export default LoadingAnimation;
