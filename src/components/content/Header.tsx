import { Text } from "@rneui/base";
import React from "react";
import { View } from "react-native";
import HeaderStyle from "../../styles/components/content/HeaderStyle";

const Header = () => {
    return (
        <View style={HeaderStyle.wrapper}>
            <View style={HeaderStyle.item}>
                <Text style={HeaderStyle.itemContent}>Pokemon City</Text>
            </View>
        </View>
    );
};

export default Header;
