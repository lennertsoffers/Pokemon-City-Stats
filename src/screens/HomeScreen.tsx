import { Text } from "@rneui/base";
import { useContext } from "react";
import { View } from "react-native";
import { AuthContext } from "../routes/Navigator";

const HomeScreen = () => {
    const authContext = useContext(AuthContext);

    const handleClick = () => {
        authContext.logout();
    };

    return (
        <View>
            <Text onPress={handleClick}>Homescreen</Text>
            <Text>{authContext.isLoggedIn().toString()}</Text>
        </View>
    );
};

export default HomeScreen;
