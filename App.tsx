import React from "react";
import { SafeAreaView } from "react-native";
import Test from "./src/components/Test";
import AuthProvider from "./src/global/provider/AuthProvider";

const App = () => {
    return (
        <SafeAreaView>
            <AuthProvider>
                <Test />
            </AuthProvider>
        </SafeAreaView>
    );
};

export default App;
