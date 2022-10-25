import AsyncStorage from "@react-native-async-storage/async-storage";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React, { useEffect, useReducer, useCallback, useContext, createContext, useMemo } from "react";
import Navigator from "./src/routes/Navigator";
import HomeScreen from "./src/screens/HomeScreen";
import LoginScreen from "./src/screens/LoginScreen";

const App = () => {
    return <Navigator />;
};

export default App;
