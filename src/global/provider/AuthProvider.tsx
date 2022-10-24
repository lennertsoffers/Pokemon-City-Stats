import React, { useState } from "react";
import AuthContextType from "../../models/types/context/AuthContextType";
import AuthContext from "../context/AuthContext";

const AuthProvider = ({ children }: { children: any }) => {
    const initialContext = {
        loggedIn: false,
        setLoggedIn: (loggedIn: boolean) => {
            setAuthContext({
                ...authContext,
                loggedIn: loggedIn
            });
        }
    };

    const [authContext, setAuthContext] = useState<AuthContextType>(initialContext);

    return <AuthContext.Provider value={authContext}>{children}</AuthContext.Provider>;
};

export default AuthProvider;
