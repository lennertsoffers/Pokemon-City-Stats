import React from "react";
import World from "../components/cityPreview/World";
import ScreenContent from "../components/content/ScreenContent";

const CityPreviewScreen = ({ route }: any) => {
    const userId: Readonly<number> = route.params;

    return (
        <ScreenContent showNavbar={false}>
            <World userId={userId} />
        </ScreenContent>
    );
};

export default CityPreviewScreen;
