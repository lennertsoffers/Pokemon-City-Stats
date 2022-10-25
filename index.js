import { AppRegistry } from "react-native";
import App from "./App";
import { name as appName } from "./app.json";
import AxiosConfig from "./src/config/AxiosConfig";

AxiosConfig.configure();

AppRegistry.registerComponent(appName, () => App);
