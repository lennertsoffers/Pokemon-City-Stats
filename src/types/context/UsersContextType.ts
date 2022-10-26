import UserData from "../model/UserData";

interface UsersContextType {
    rankedUsers: UserData[];
    setRankedUsers: Function;
}

export default UsersContextType;
