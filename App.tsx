import React, { useEffect } from "react";
import Navigator from "./src/routes/Navigator";
import { Immersive } from "react-native-immersive";

const App = () => {
    useEffect(() => {
        Immersive.on();
        Immersive.setImmersive(true);
    }, []);

    return <Navigator />;
};

export default App;
