import { createContext } from "react";
import AuthContextType from "../types/context/AuthContextType";
import UsersContextType from "../types/context/UsersContextType";

export const UserContext = createContext<UsersContextType>({} as UsersContextType);
export const AuthContext = createContext<AuthContextType>({} as AuthContextType);
