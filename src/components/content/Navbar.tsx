import { useNavigation } from "@react-navigation/native";
import { Button, Text } from "@rneui/base";
import { useContext } from "react";
import { View } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { AuthContext } from "../../routes/Navigator";
import NavbarStyle from "../../styles/components/content/NavbarStyle";

const Navbar = () => {
    const authContext = useContext(AuthContext);
    const navigator = useNavigation();

    const handleLeaderboardPress = () => {
        navigator.navigate("Leaderboard" as never);
    };

    const handleSearchPress = () => {
        navigator.navigate("SearchUser" as never);
    };

    const handleAccountPress = () => {
        navigator.navigate("Account" as never);
    };

    const handleLogoutPress = () => {
        authContext.logout();
    };

    return (
        <View style={NavbarStyle.wrapper}>
            <View style={NavbarStyle.item}>
                <Text onPress={handleLeaderboardPress}>Leaderboard</Text>
            </View>
            <View style={NavbarStyle.item}>
                <Text onPress={handleSearchPress}>Search</Text>
            </View>
            <View style={NavbarStyle.item}>
                <Text onPress={handleAccountPress}>Account</Text>
            </View>
            <View style={NavbarStyle.item}>
                <Text onPress={handleLogoutPress}>Logout</Text>
            </View>
        </View>
    );
};

export default Navbar;
