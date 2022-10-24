import React, { useContext } from "react";
import { View, Text, Button } from "react-native";
import AuthContext from "../global/context/AuthContext";

const Test = () => {
    const authContext = useContext(AuthContext);

    if (!authContext) return <Text>Undefined</Text>;
    return (
        <View>
            <Text>{authContext.loggedIn.toString()}</Text>
            <Button onPress={() => authContext.setLoggedIn(!authContext.loggedIn)} title="btn" />
        </View>
    );
};

export default Test;
