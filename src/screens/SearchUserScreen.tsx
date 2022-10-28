import { Tab, TabView, Text } from "@rneui/base";
import React, { useState } from "react";
import { View, Pressable } from "react-native";
import ScreenContent from "../components/content/ScreenContent";
import SearchUserByNumericForm from "../components/form/SearchUserByNumericForm";
import SearchUserByUsernameForm from "../components/form/SearchUserByUsernameForm";
import SearchUserScreenStyle from "../styles/screens/SearchUserScreenStyle";

const SearchUserScreen = () => {
    const [tabIndex, setTabIndex] = useState(0);

    return (
        <ScreenContent title="Search Player">
            <View style={SearchUserScreenStyle.tabSelectorWrapper}>
                <Pressable
                    style={[SearchUserScreenStyle.tabSelectorItem, { backgroundColor: tabIndex == 0 ? "#ccc" : "#e0e0e0" }]}
                    onPress={() => setTabIndex(0)}
                >
                    <Text style={SearchUserScreenStyle.tabSelectorItemText}>Username</Text>
                </Pressable>
                <Pressable
                    style={[SearchUserScreenStyle.tabSelectorItem, { backgroundColor: tabIndex == 1 ? "#ccc" : "#e0e0e0" }]}
                    onPress={() => setTabIndex(1)}
                >
                    <Text style={SearchUserScreenStyle.tabSelectorItemText}>Numeric</Text>
                </Pressable>
            </View>
            <TabView value={tabIndex} onChange={e => setTabIndex(e)} animationType="spring">
                <TabView.Item
                    style={{
                        width: "100%",
                        height: "100%"
                    }}
                >
                    <SearchUserByUsernameForm />
                </TabView.Item>
                <TabView.Item
                    style={{
                        width: "100%"
                    }}
                >
                    <SearchUserByNumericForm />
                </TabView.Item>
            </TabView>
        </ScreenContent>
    );
};

export default SearchUserScreen;
