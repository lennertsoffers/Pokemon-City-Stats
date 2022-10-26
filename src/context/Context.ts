import { createContext } from "react";
import UsersContextType from "../types/context/UsersContextType";

export const UserContext = createContext<UsersContextType>({} as UsersContextType);
