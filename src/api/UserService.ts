import axios from "axios";
import ErrorHandler from "../error/ErrorHandler";
import UserData from "../types/model/UserData";

/** Collects functions regarding users */
const UserService = (() => {
    /**
     * Gets the users ordered by their score
     * Assigns a rank to each one of them
     * 1 for the hightest score
     * @returns A list of UserData
     */
    const getRanking = async (): Promise<UserData[]> => {
        try {
            const { data }: { data: UserData[] } = await axios.get("/users/ranking");
            // Set the rank in the UserData
            data.forEach((userData, index) => (userData.rank = index + 1));
            return data;
        } catch (error) {
            ErrorHandler.handle(error);
            return [];
        }
    };

    /**
     * Queries the server for a list of users who satisfy the provided filter
     * @param filter The filter query
     * @returns A list of UserData
     */
    const getUsersByFilter = async (filter: string): Promise<UserData[]> => {
        try {
            const { data }: { data: UserData[] } = await axios.get("/users/filter?filter=" + filter);
            return data;
        } catch (error) {
            ErrorHandler.handle(error);
            return [];
        }
    };

    /**
     * Gets the info from the current user that is logged in
     * @returns The info from the user
     */
    const getAccountInfo = async (): Promise<UserData> => {
        try {
            const { data }: { data: UserData } = await axios.get("/users/me");
            return data;
        } catch (error) {
            ErrorHandler.handle(error);
            return {} as UserData;
        }
    };

    return { getRanking, getUsersByFilter, getAccountInfo };
})();
export default UserService;
