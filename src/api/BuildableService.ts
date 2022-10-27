import axios from "axios";
import BuildableData from "../types/model/BuildableData";

const BuildableService = (() => {
    const getBuildables = async (userId: number): Promise<BuildableData[]> => {
        try {
            const { data } = await axios.get("/api/buildables/fromUser/" + userId);
            return data;
        } catch (error) {
            console.log(error);
            return [];
        }
    };

    return {
        getBuildables
    };
})();

export default BuildableService;
