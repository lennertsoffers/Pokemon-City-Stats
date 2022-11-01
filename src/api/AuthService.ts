import AsyncStorage from "@react-native-async-storage/async-storage";
import axios from "axios";
import ErrorHandler from "../error/ErrorHandler";
import AuthenticationResponse from "../types/api/AuthenticationResponse";

/** Collects functions to handle authentication in the application */
const AuthService = (() => {
    /**
     * Tries to login the user with the username and password by sending a login request
     * If the login is successful, the tokens in the success response are saved in the AsyncStorage and the {@link AuthState} is set to logged in
     * @param username The username to login
     * @param password The password to login
     * @returns True if the user is successfully logged in in the server and the tokens are persisted in the AsyncStorage
     */
    const login = async (username: string, password: string) => {
        try {
            const formData = new FormData();
            formData.append("username", username);
            formData.append("password", password);

            const { data }: { data: AuthenticationResponse } = await axios.post("/auth/login", formData, {
                headers: { "Content-Type": "multipart/form-data" }
            });

            // If there was no error in the login request
            // - The tokens are persisted in the AsyncStorage
            // - The Bearer token header is set in axios
            _persistAuthenticationResponse(data);

            return true;
        } catch (error) {
            ErrorHandler.handle(error);
            return false;
        }
    };

    /**
     * Logs out the user by clearing the tokens from the AsyncStorage
     */
    const logout = () => {
        AsyncStorage.multiRemove(["access_token", "refresh_token"]);
    };

    /**
     * Sets the axios Authentication header to the access_token stored in the AsyncStorage
     * @returns True if the token was set
     */
    const setHeader = async (): Promise<boolean> => {
        if (!(await AsyncStorage.getItem("access_token"))) return false;

        axios.defaults.headers.common.Authorization = `Bearer ${await AsyncStorage.getItem("access_token")}`;
        return true;
    };

    /**
     * Checks if the user is authenticated and sets the correct header if he/she is
     * Refreshes the token if an expired access token is found in the AsyncStorage
     * @returns True if the user is authenticated
     */
    const isAuthenticated = async (): Promise<boolean> => {
        // Sets the header, returns false if the setting of the header was not successelful
        if (!(await setHeader())) return false;
        // If the token is valid, the user is authenticated
        if (await _tokenIsValid()) return true;
        // Tries to refresh the token, if this succeeds, the user is authtenticated
        return _refreshToken();
    };

    /**
     * Persists the tokens in the response from the server after logging in, registering or refreshing tokens
     * Also sets the newly generate access_token into the axios Authorization header
     * @param authenticationResponse The response containing the access_token and the refresh_token
     */
    const _persistAuthenticationResponse = (authenticationResponse: AuthenticationResponse) => {
        AsyncStorage.setItem("access_token", authenticationResponse.access_token);
        AsyncStorage.setItem("refresh_token", authenticationResponse.refresh_token);

        setHeader();
    };

    /**
     * Checks if the current access_token is valid by sending a request to an endpoint that doesn't need al lot of resources
     * @returns True if the token is valid
     */
    const _tokenIsValid = async () => {
        try {
            await axios.get("/users/me");
            return true;
        } catch {
            return false;
        }
    };

    /**
     * Tries to set the refresh_token as the authtentication header
     * @returns True if there is an refresh_token found in the AsyncStorage
     */
    const _setRefreshHeader = async (): Promise<boolean> => {
        if (!(await AsyncStorage.getItem("refresh_token"))) return false;

        axios.defaults.headers.common.Authorization = `Bearer ${await AsyncStorage.getItem("refresh_token")}`;
        return true;
    };

    /**
     * Sets the refresh_token in the header
     * Sends the refresh token request to the server
     * Persists the returned tokens in the AsyncStorage
     * @returns True if every operation succeeds, false otherwise
     */
    const _refreshToken = async () => {
        if (!(await _setRefreshHeader())) return false;

        try {
            const { data }: { data: AuthenticationResponse } = await axios.get("/auth/refreshToken");
            _persistAuthenticationResponse(data);
            return true;
        } catch {
            return false;
        }
    };

    return {
        login,
        logout,
        setHeader,
        isAuthenticated
    };
})();

export default AuthService;
