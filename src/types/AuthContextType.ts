interface AuthContextType {
    login: (username: string, password: string) => Promise<void>;
    logout: () => void;
    isLoggedIn: () => boolean;
}

export default AuthContextType;
