import axios from "axios";
import { BASE_URL } from "./config";

const AxiosConfig = (() => {
    const configure = () => {
        axios.defaults.baseURL = BASE_URL;
    };

    return {
        configure
    };
})();

export default AxiosConfig;
