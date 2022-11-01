import React, { createContext, ReactElement, useState } from "react";
import AuthContextType from "../types/context/AuthContextType";
import { AuthContext } from "./Context";

/**
 * Component that wraps its children in the provider for the authContext
 * All children can now user the useContext hook to access the auth state
 * They also get access to the setLoggedIn method that sets if the user is logged in or not
 */
const AuthContextProvider = ({ children }: { children: JSX.Element[] | JSX.Element }) => {
    // Holds the actual context object
    // LoggedIn is true if the user is logged in
    // setLoggedIn calls the setter of the state where the context is stored, so updates the context
    const getAuthContextValue = (): AuthContextType => {
        return {
            loggedIn: false,
            setLoggedIn: (loggedIn: boolean) => {
                setAuthContextValue({
                    ...authContextValue,
                    loggedIn: loggedIn
                });
            }
        };
    };

    // State that holds the authContext
    // Placing this in a state triggers a re-render on every change
    // This state will be the same as the global context
    // => Context makes the state global
    // => State triggers the re-render on change
    const [authContextValue, setAuthContextValue] = useState<AuthContextType>(getAuthContextValue());

    return <AuthContext.Provider value={authContextValue}>{children}</AuthContext.Provider>;
};

export default AuthContextProvider;
