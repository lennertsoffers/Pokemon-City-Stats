import { createContext } from "react";
import AuthContextType from "../../models/types/context/AuthContextType";

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export default AuthContext;
