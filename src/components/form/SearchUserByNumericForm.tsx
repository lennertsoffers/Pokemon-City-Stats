import { Text } from "@rneui/base";
import React, { useState } from "react";
import { Pressable, View, TextInput, NativeSyntheticEvent, TextInputChangeEventData, Keyboard } from "react-native";
import UserSearchResult from "../users/UserSearchResult";
import { Dropdown } from "react-native-element-dropdown";
import UserData from "../../types/model/UserData";
import { Immersive } from "react-native-immersive";
import UserService from "../../api/UserService";
import SearchUserByNumericFormStyle from "../../styles/components/form/SearchUserByNumericFormStyle";
import Icon from "react-native-vector-icons/FontAwesome5";

/** Represents the form where the user can search players with a numeric filter */
const SearchUserByNumericForm = () => {
    // Define the fields to filter on and the permitted operations
    const USER_FILTER_FIELDS = [
        { label: "Level", value: "level" },
        { label: "Score", value: "score" }
    ];
    const USER_FILTER_OPERATIONS = [
        { label: ">", value: ">" },
        { label: ">=", value: ">=" },
        { label: "<", value: "<" },
        { label: "<=", value: "<=" }
    ];

    const [users, setUsers] = useState<UserData[]>([]);
    const [filterField, setFilterField] = useState<string>(USER_FILTER_FIELDS[0].label);
    const [filterOperation, setFilterOperation] = useState<string>(USER_FILTER_OPERATIONS[0].label);
    const [filterValue, setFilterValue] = useState<string>("");

    /**
     * Handles clicking on the search button by verifying the filter and sending the request
     */
    const handleSearchPress = () => {
        Keyboard.dismiss();
        Immersive.setImmersive(true);

        // Check if the filter is valid
        if (filterField == "") return;
        if (filterOperation == "") return;
        if (filterValue == "") return;

        // Construct the filter string
        // The value must be numeric so remove every not numeric character
        const filter = filterField + filterOperation + filterValue.replace(/[^0-9]/g, "");

        // Send the request and place the response of users in the state
        UserService.getUsersByFilter(filter).then(users => setUsers(users));
    };

    /**
     * Set the new value state to the text of the event
     */
    const handleValueInputChange = (event: NativeSyntheticEvent<TextInputChangeEventData>) => {
        setFilterValue(event.nativeEvent.text);
    };

    /**
     * Go back to full screen after unfocussing the input field
     */
    const handleInputBlur = () => {
        Immersive.setImmersive(true);
    };

    /**
     * Function to render an item in the dropdown
     */
    const renderItem = (field: { label: string; value: string }) => {
        return (
            <View style={SearchUserByNumericFormStyle.item}>
                <Text style={SearchUserByNumericFormStyle.textItem}>{field.label}</Text>
            </View>
        );
    };

    return (
        <View style={SearchUserByNumericFormStyle.numericForm}>
            <View style={SearchUserByNumericFormStyle.filterSelector}>
                <Dropdown
                    placeholder="Select field"
                    style={SearchUserByNumericFormStyle.dropdownField}
                    placeholderStyle={SearchUserByNumericFormStyle.placeholderStyle}
                    selectedTextStyle={SearchUserByNumericFormStyle.selectedTextStyle}
                    data={USER_FILTER_FIELDS}
                    maxHeight={300}
                    labelField="label"
                    valueField="value"
                    value={filterField}
                    onChange={item => {
                        setFilterField(item.value);
                    }}
                    renderItem={renderItem}
                    containerStyle={{
                        borderRadius: 10
                    }}
                />
                <Dropdown
                    style={SearchUserByNumericFormStyle.dropdownOperation}
                    placeholderStyle={SearchUserByNumericFormStyle.placeholderStyle}
                    selectedTextStyle={SearchUserByNumericFormStyle.selectedTextStyle}
                    data={USER_FILTER_OPERATIONS}
                    maxHeight={300}
                    labelField="label"
                    valueField="value"
                    value={filterOperation}
                    onChange={item => {
                        setFilterOperation(item.value);
                    }}
                    renderItem={renderItem}
                    containerStyle={{
                        borderRadius: 10
                    }}
                />
                <View style={SearchUserByNumericFormStyle.valueInputWrapper}>
                    <TextInput
                        value={filterValue.toString()}
                        onChange={handleValueInputChange}
                        keyboardType="numeric"
                        style={SearchUserByNumericFormStyle.valueInput}
                        placeholder="Value"
                        onBlur={handleInputBlur}
                    />
                </View>
                <Pressable style={SearchUserByNumericFormStyle.searchButton} onPress={handleSearchPress}>
                    <Text style={SearchUserByNumericFormStyle.searchButtonContent}>
                        <Icon name="search" size={20} color={"#000"} />
                    </Text>
                </Pressable>
            </View>
            {users.length > 0 && <UserSearchResult users={users} />}
        </View>
    );
};

export default SearchUserByNumericForm;
