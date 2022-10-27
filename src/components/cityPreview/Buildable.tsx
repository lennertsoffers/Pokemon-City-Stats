import { Text } from "@rneui/base";
import React from "react";
import { View } from "react-native";
import BuildableData from "../../types/model/BuildableData";

const Buildable = ({ buildableData }: { buildableData: BuildableData }) => {
    return (
        <View>
            <Text>{buildableData.id}</Text>
        </View>
    );
};

export default Buildable;
