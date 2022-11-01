import React, { createContext, ReactElement, useState } from "react";
import UsersContextType from "../types/context/UsersContextType";
import UserData from "../types/model/UserData";
import { UserContext } from "./Context";

/**
 * Component that wraps its children in the provider for the userContext
 * All children can now user the useContext hook to access the ranked users
 * They also get access to the setRankedUsers method that sets the value in the ranked users context
 */
const UserContextProvider = ({ children }: { children: JSX.Element[] | JSX.Element }) => {
    // Holds the actual context object
    // The ranked users is the array of data
    // setRankedUsers calls the setter of the state where the context is stored, so updates the context
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

    // State that holds the userContext
    // Placing this in a state triggers a re-render on every change
    // This state will be the same as the global context
    // => Context makes the state global
    // => State triggers the re-render on change
    const [userContextValue, setUserContextValue] = useState<UsersContextType>(getUserContextValue());

    return <UserContext.Provider value={userContextValue}>{children}</UserContext.Provider>;
};

export default UserContextProvider;
