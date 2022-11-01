import React from "react";
import { View } from "react-native";
import ScreenContentStyle from "../../styles/components/content/ScreenContentStyle";
import Header from "./Header";
import Navbar from "./Navbar";

/**
 * Represents the content on a screen, including the header and the navbar
 * Used to wrap child components so that a header and navbar is shown
 */
const ScreenContent = ({
    children,
    showNavbar = true,
    title = "Pokemon City",
    backButton = false
}: {
    children: JSX.Element[] | JSX.Element;
    showNavbar?: boolean;
    title?: string;
    backButton?: boolean;
}) => {
    // If the navbar is shown, the size of the container for the children is smaller
    const childrenHeight = showNavbar ? 84 : 92;

    return (
        <View style={ScreenContentStyle.wrapper}>
            <View style={{ height: "8%" }}>
                <Header title={title} backButton={backButton} />
            </View>
            <View style={{ height: childrenHeight + "%" }}>{children}</View>
            {showNavbar && (
                <View style={{ height: "8%" }}>
                    <Navbar />
                </View>
            )}
        </View>
    );
};

export default ScreenContent;
