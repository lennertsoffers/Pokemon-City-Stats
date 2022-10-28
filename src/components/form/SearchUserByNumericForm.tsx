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

const SearchUserByNumericForm = () => {
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

    const handleSearchPress = () => {
        Keyboard.dismiss();
        Immersive.setImmersive(true);

        if (filterField == "") return;
        if (filterOperation == "") return;
        if (filterValue == "") return;

        const filter = filterField + filterOperation + filterValue.replace(/[^0-9]/g, "");

        UserService.getUsersByFilter(filter).then(users => setUsers(users));
    };

    const handleValueInputChange = (event: NativeSyntheticEvent<TextInputChangeEventData>) => {
        setFilterValue(event.nativeEvent.text);
    };

    const handleInputBlur = () => {
        Immersive.setImmersive(true);
    };

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
