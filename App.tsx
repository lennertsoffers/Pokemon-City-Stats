import React, { useEffect } from "react";
import Navigator from "./src/routes/Navigator";
import { Immersive } from "react-native-immersive";
import { RootSiblingParent } from "react-native-root-siblings";
import AuthContextProvider from "./src/context/AuthContextProvider";

const App = () => {
    useEffect(() => {
        Immersive.on();
        Immersive.setImmersive(true);
    }, []);

    return (
        <RootSiblingParent>
            <AuthContextProvider>
                <Navigator />
            </AuthContextProvider>
        </RootSiblingParent>
    );
};

export default App;
