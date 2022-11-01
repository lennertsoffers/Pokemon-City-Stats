import React, { createContext, ReactElement, useState } from "react";
import AuthContextType from "../types/context/AuthContextType";
import { AuthContext } from "./Context";

const AuthContextProvider = ({ children }: { children: JSX.Element[] | JSX.Element }) => {
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

    const [authContextValue, setAuthContextValue] = useState<AuthContextType>(getAuthContextValue());

    return <AuthContext.Provider value={authContextValue}>{children}</AuthContext.Provider>;
};

export default AuthContextProvider;
