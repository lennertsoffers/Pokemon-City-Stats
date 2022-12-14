import { useNavigation } from "@react-navigation/native";
import { Text } from "@rneui/base";
import { useContext } from "react";
import { Pressable, View } from "react-native";
import NavbarStyle from "../../styles/components/content/NavbarStyle";
import Icon from "react-native-vector-icons/FontAwesome5";
import { Immersive } from "react-native-immersive";
import { AuthContext } from "../../context/Context";
import AuthService from "../../api/AuthService";

/** Replaces the default navigation bar */
const Navbar = () => {
    const authContext = useContext(AuthContext);
    const navigator = useNavigation();

    const handleLeaderboardPress = () => {
        navigator.navigate("LeaderboardTab" as never);
        setImmersive();
    };

    const handleSearchPress = () => {
        navigator.navigate("SearchUserTab" as never);
        setImmersive();
    };

    const handleAccountPress = () => {
        navigator.navigate("AccountTab" as never);
        setImmersive();
    };

    const handleLogoutPress = () => {
        authContext.setLoggedIn(false);
        AuthService.logout();
        setImmersive();
    };

    const setImmersive = () => {
        Immersive.setImmersive(true);
    };

    return (
        <View style={NavbarStyle.wrapper}>
            <View style={NavbarStyle.item}>
                <Pressable onPress={handleLeaderboardPress} style={NavbarStyle.pressable}>
                    <Icon name="medal" size={37} color={"#000"} />
                </Pressable>
            </View>
            <View style={NavbarStyle.item}>
                <Pressable onPress={handleSearchPress} style={NavbarStyle.pressable}>
                    <Icon name="search" size={37} color={"#000"} />
                </Pressable>
            </View>
            <View style={NavbarStyle.item}>
                <Pressable onPress={handleAccountPress} style={NavbarStyle.pressable}>
                    <Icon name="user-alt" size={37} color={"#000"} />
                </Pressable>
            </View>
            <View style={NavbarStyle.item}>
                <Pressable onPress={handleLogoutPress} style={NavbarStyle.pressable}>
                    <Icon name="sign-in-alt" size={37} color={"#000"} />
                </Pressable>
            </View>
        </View>
    );
};

export default Navbar;
