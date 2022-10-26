import React, { createContext, ReactElement, useState } from "react";
import UsersContextType from "../types/context/UsersContextType";
import UserData from "../types/model/UserData";
import { UserContext } from "./Context";

const UserContextProvider = ({ children }: { children: JSX.Element[] | JSX.Element }) => {
    const getUserContextValue = (): UsersContextType => {
        return {
            rankedUsers: [],
            setRankedUsers: (users: UserData[]) => {
                setUserContextValue({
                    ...userContextValue,
                    rankedUsers: users
                });
            }
        };
    };

    const [userContextValue, setUserContextValue] = useState(getUserContextValue());

    return <UserContext.Provider value={userContextValue}>{children}</UserContext.Provider>;
};

export default UserContextProvider;
