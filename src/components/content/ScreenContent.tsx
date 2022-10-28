import React from "react";
import { View } from "react-native";
import ScreenContentStyle from "../../styles/components/content/ScreenContentStyle";
import Header from "./Header";
import Navbar from "./Navbar";

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
