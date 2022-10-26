import axios from "axios";
import UserData from "../types/model/UserData";

const UserService = (() => {
    const getRanking = async (): Promise<UserData[]> => {
        try {
            const { data } = await axios.get("/users/ranking");
            return data;
        } catch (error) {
            console.log(error);
            return [];
        }
    };

    return { getRanking };
})();
export default UserService;
