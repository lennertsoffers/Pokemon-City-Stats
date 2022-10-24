import AsyncStorage from "@react-native-async-storage/async-storage";
import axios from "axios";
import AuthenticationResponse from "../models/types/AuthenticationResponse";

const AuthService = (() => {
    /**
     * Tries to login the user with the username and password by sending a login request
     * If the login is successful, the tokens in the success response are saved in the LocalStorage and the {@link AuthState} is set to logged in
     * @param username The username to login
     * @param password The password to login
     * @returns True if the user is successfully logged in in the server and the tokens are persisted in the LocalStorage
     */
    const login = async (username: string, password: string) => {
        try {
            const formData = new FormData();
            formData.append("username", username);
            formData.append("password", password);

            const { data }: { data: AuthenticationResponse } = await axios.post("/auth/login", formData);

            // If there was no error in the login request
            // - The tokens are persisted in the LocalStorage
            // - The Bearer token header is set in axios
            _persistAuthenticationResponse(data);

            return true;
        } catch (error) {
            console.log(error);

            return false;
        }
    };

    /**
     * Logs out the user by clearing the tokens from the LocalStorage
     */
    const logout = () => {
        AsyncStorage.multiRemove(["access_token", "refresh_token"]);
    };

    /**
     * Persists the tokens in the response from the server after logging in, registering or refreshing tokens
     * Also sets the newly generate access_token into the axios Authorization header
     * @param authenticationResponse The response containing the access_token and the refresh_token
     */
    const _persistAuthenticationResponse = (authenticationResponse: AuthenticationResponse) => {
        AsyncStorage.setItem("access_token", authenticationResponse.access_token);
        AsyncStorage.setItem("refresh_token", authenticationResponse.refresh_token);

        _setHeader();
    };

    /**
     * Sets the axios Authentication header to the access_token stored in the LocalStorage
     */
    const _setHeader = () => {
        axios.defaults.headers.common.Authorization = `Bearer ${AsyncStorage.getItem("access_token")}`;
    };

    return {
        login,
        logout
    };
})();

export default AuthService;
