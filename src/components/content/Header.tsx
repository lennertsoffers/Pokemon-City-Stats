import { Text } from "@rneui/base";
import React from "react";
import { Pressable, View } from "react-native";
import HeaderStyle from "../../styles/components/content/HeaderStyle";
import Icon from "react-native-vector-icons/FontAwesome5";
import { useNavigation } from "@react-navigation/native";

/** Represents the navigation header of the app, replaces the default header */
const Header = ({ title, backButton }: { title: string; backButton: boolean }) => {
    const navigator = useNavigation();

    /**
     * Goes one screen back in the current stack
     */
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
