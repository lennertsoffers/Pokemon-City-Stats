import { Route } from "@react-navigation/native";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { Text } from "@rneui/base";
import ScreenContent from "../components/content/ScreenContent";
import UserData from "../types/model/UserData";

const UserDetailsScreen = ({ route }: NativeStackScreenProps<any>) => {
    const userData: Readonly<UserData> | undefined = route.params;

    if (!userData) {
        return (
            <ScreenContent>
                <Text>User not found</Text>
            </ScreenContent>
        );
    }

    return (
        <ScreenContent>
            <Text>{userData.username}</Text>
        </ScreenContent>
    );
};

export default UserDetailsScreen;
