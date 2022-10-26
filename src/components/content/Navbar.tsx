import { Button, Text } from "@rneui/base";
import { useContext } from "react";
import { View } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { AuthContext } from "../../routes/Navigator";
import NavbarStyle from "../../styles/components/content/NavbarStyle";

const Navbar = () => {
    const authContext = useContext(AuthContext);

    const handleLogoutPress = () => {
        authContext.logout();
    };

    return (
        <View style={NavbarStyle.wrapper}>
            <View style={NavbarStyle.item}>
                <Text>Nav 1</Text>
            </View>
            <View style={NavbarStyle.item}>
                <Text>Nav 2</Text>
            </View>
            <View style={NavbarStyle.item}>
                <Text>Nav 3</Text>
            </View>
            <View style={NavbarStyle.item}>
                <Text onPress={handleLogoutPress}>Logout</Text>
            </View>
        </View>
    );
};

export default Navbar;
