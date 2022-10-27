import { Text } from "@rneui/base";
import React, { useState } from "react";
import { Pressable, StyleSheet, View, TextInput, NativeSyntheticEvent, TextInputChangeEventData } from "react-native";
import UserSearchResult from "../users/UserSearchResult";
import { Dropdown } from "react-native-element-dropdown";
import UserData from "../../types/model/UserData";
import { Immersive } from "react-native-immersive";
import UserService from "../../api/UserService";

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
            <View style={styles.item}>
                <Text style={styles.textItem}>{field.label}</Text>
            </View>
        );
    };

    return (
        <View style={styles.numericForm}>
            <View style={styles.filterSelector}>
                <Dropdown
                    placeholder="Select field"
                    style={styles.dropdownField}
                    placeholderStyle={styles.placeholderStyle}
                    selectedTextStyle={styles.selectedTextStyle}
                    data={USER_FILTER_FIELDS}
                    maxHeight={300}
                    labelField="label"
                    valueField="value"
                    value={filterField}
                    onChange={item => {
                        setFilterField(item.value);
                    }}
                    renderItem={renderItem}
                />
                <Dropdown
                    style={styles.dropdownOperation}
                    placeholderStyle={styles.placeholderStyle}
                    selectedTextStyle={styles.selectedTextStyle}
                    data={USER_FILTER_OPERATIONS}
                    maxHeight={300}
                    labelField="label"
                    valueField="value"
                    value={filterOperation}
                    onChange={item => {
                        setFilterOperation(item.value);
                    }}
                    renderItem={renderItem}
                />
                <View style={styles.valueInputWrapper}>
                    <TextInput
                        value={filterValue.toString()}
                        onChange={handleValueInputChange}
                        keyboardType="numeric"
                        style={styles.valueInput}
                        placeholder="Value"
                        onBlur={handleInputBlur}
                    />
                </View>
                <Pressable style={styles.searchButton} onPress={handleSearchPress}>
                    <Text style={styles.searchButtonContent}>F</Text>
                </Pressable>
            </View>
            {users.length > 0 && <UserSearchResult users={users} />}
        </View>
    );
};

export default SearchUserByNumericForm;

const styles = StyleSheet.create({
    numericForm: {
        backgroundColor: "#ff0",
        flex: 1
    },
    filterSelector: {
        flexDirection: "row",
        padding: 10,
        backgroundColor: "#00f"
    },
    dropdownField: {
        flex: 0.33,
        backgroundColor: "white",
        borderRadius: 12,
        padding: 10,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 1
        },
        shadowOpacity: 0.2,
        shadowRadius: 1.41,

        elevation: 2
    },
    dropdownOperation: {
        flex: 0.15,
        marginHorizontal: 10,
        backgroundColor: "white",
        borderRadius: 12,
        padding: 10,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 1
        },
        shadowOpacity: 0.2,
        shadowRadius: 1.41,

        elevation: 2
    },
    valueInputWrapper: {
        flex: 0.32,
        marginRight: 10,
        backgroundColor: "white",
        borderRadius: 12,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 1
        },
        shadowOpacity: 0.2,
        shadowRadius: 1.41,

        elevation: 2,
        flexDirection: "column",
        justifyContent: "center"
    },
    valueInput: {
        marginHorizontal: 5
    },
    searchButton: {
        flex: 0.2,

        backgroundColor: "white",
        borderRadius: 12,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 1
        },
        shadowOpacity: 0.2,
        shadowRadius: 1.41,

        elevation: 2,
        flexDirection: "column",
        justifyContent: "center"
    },
    searchButtonContent: {
        textAlign: "center"
    },
    item: {
        padding: 10
    },
    textItem: {
        flex: 1,
        fontSize: 16
    },
    placeholderStyle: {
        fontSize: 16
    },
    selectedTextStyle: {
        fontSize: 16
    },
    iconStyle: {
        width: 20,
        height: 20
    },
    inputSearchStyle: {
        height: 40,
        fontSize: 16
    }
});
