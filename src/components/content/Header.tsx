import { Text } from "@rneui/base";
import React from "react";
import { Pressable, View } from "react-native";
import HeaderStyle from "../../styles/components/content/HeaderStyle";
import Icon from "react-native-vector-icons/FontAwesome5";
import { useNavigation } from "@react-navigation/native";

const Header = ({ title, backButton }: { title: string; backButton: boolean }) => {
    const navigator = useNavigation();

    const handleBackButtonPress = () => {
        if (navigator.canGoBack()) navigator.goBack();
    };

    return (
        <View style={HeaderStyle.wrapper}>
            {backButton && (
                <Pressable style={HeaderStyle.item} onPress={handleBackButtonPress}>
                    <Icon name="chevron-left" size={30} color="#000" />
                </Pressable>
            )}
            <View style={HeaderStyle.item}>
                <Text style={HeaderStyle.itemContent}>{title}</Text>
            </View>
        </View>
    );
};

export default Header;
