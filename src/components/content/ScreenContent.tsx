import { View } from "react-native";
import ScreenContentStyle from "../../styles/components/content/ScreenContentStyle";
import Navbar from "./Navbar";

const ScreenContent = ({ children }: { children: JSX.Element[] | JSX.Element }) => {
    return (
        <View style={ScreenContentStyle.wrapper}>
            <View style={ScreenContentStyle.children}>{children}</View>
            <View style={ScreenContentStyle.navbar}>
                <Navbar />
            </View>
        </View>
    );
};

export default ScreenContent;
