import { createAppContainer } from "@react-navigation/native";
import { createStackNavigator } from "react-navigation-stack";
import HomeScreen from "../screens/HomeScreen";
import LoginScreen from "../screens/LoginScreen";

const screens = {
    HomeScreen: {
        screen: HomeScreen,
        navigationOptions: {
            title: "Home"
        }
    },
    LoginScreen: {
        screen: LoginScreen,
        navigationOptions: {
            title: "Login"
        }
    }
};

const MainStack = createStackNavigator(screens);

export default createAppContainer(MainStack);
