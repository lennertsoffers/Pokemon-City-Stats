import { Tab, TabView, Text } from "@rneui/base";
import React, { useState } from "react";
import ScreenContent from "../components/content/ScreenContent";
import SearchUserByNumericForm from "../components/form/SearchUserByNumericForm";
import SearchUserByUsernameForm from "../components/form/SearchUserByUsernameForm";

const SearchUserScreen = () => {
    const [tabIndex, setTabIndex] = useState(0);

    return (
        <ScreenContent>
            <Tab
                value={tabIndex}
                onChange={e => setTabIndex(e)}
                variant="primary"
                indicatorStyle={{
                    backgroundColor: "white",
                    height: 3
                }}
            >
                <Tab.Item title="Username" />
                <Tab.Item title="Numeric" />
            </Tab>

            <TabView value={tabIndex} onChange={e => setTabIndex(e)} animationType="spring">
                <TabView.Item>
                    <SearchUserByUsernameForm />
                </TabView.Item>
                <TabView.Item>
                    <SearchUserByNumericForm />
                </TabView.Item>
            </TabView>
        </ScreenContent>
    );
};

export default SearchUserScreen;
