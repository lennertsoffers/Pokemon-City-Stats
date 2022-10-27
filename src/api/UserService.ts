import axios from "axios";
import UserData from "../types/model/UserData";

const UserService = (() => {
    const getRanking = async (): Promise<UserData[]> => {
        try {
            const { data }: { data: UserData[] } = await axios.get("/users/ranking");
            data.forEach((userData, index) => (userData.rank = index + 1));
            return data;
        } catch (error) {
            console.log(error);
            return [];
        }
    };

    const getUsersByFilter = async (filter: string): Promise<UserData[]> => {
        try {
            const { data }: { data: UserData[] } = await axios.get("/users/filter?filter=" + filter);
            return data;
        } catch (error) {
            console.log(error);
            return [];
        }
    };

    return { getRanking, getUsersByFilter };
})();
export default UserService;