import { NativeStackScreenProps } from "@react-navigation/native-stack";
import React from "react";
import { Text, View } from "react-native";
import World from "../components/cityPreview/World";
import LoadingAnimation from "../components/LoadingAnimation";

const CityPreviewScreen = ({ route }: any) => {
    const userId: Readonly<number> = route.params;

    return (
        <View>
            <World userId={userId} />
        </View>
    );
};

export default CityPreviewScreen;
