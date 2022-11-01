import React, { useEffect } from "react";
import Navigator from "./src/routes/Navigator";
import { Immersive } from "react-native-immersive";
import { RootSiblingParent } from "react-native-root-siblings";

const App = () => {
    useEffect(() => {
        Immersive.on();
        Immersive.setImmersive(true);
    }, []);

    return (
        <RootSiblingParent>
            <Navigator />
        </RootSiblingParent>
    );
};

export default App;
