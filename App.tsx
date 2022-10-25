import AsyncStorage from "@react-native-async-storage/async-storage";
import React, { useEffect, useCallback, useContext } from "react";
import AuthService from "./src/api/AuthService";
import AuthContext from "./src/global/context/AuthContext";
import AuthProvider from "./src/global/provider/AuthProvider";
import Navigator from "./src/routes/MainStack";

const App = () => {
    return (
        <AuthProvider>
            <Navigator />
        </AuthProvider>
    );
};

export default App;
