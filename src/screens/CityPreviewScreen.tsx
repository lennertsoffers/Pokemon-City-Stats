import React from "react";
import { View } from "react-native";
import World from "../components/cityPreview/World";

const CityPreviewScreen = ({ route }: any) => {
    const userId: Readonly<number> = route.params;

    return (
        <View>
            <World userId={userId} />
        </View>
    );
};

export default CityPreviewScreen;
