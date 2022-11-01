import axios from "axios";
import ErrorHandler from "../error/ErrorHandler";
import BuildableData from "../types/model/BuildableData";
import SpritesheetUtils from "../utils/SpritesheetUtils";

/** Collects functions to query buildables from the server */
const BuildableService = (() => {
    /**
     * Gets all the buildables corresponding to the user
     * @param userId The user to get the buildables from
     * @returns A list of buildableData
     */
    const getBuildables = async (userId: number): Promise<BuildableData[]> => {
        try {
            const { data }: { data: BuildableData[] } = await axios.get("/api/buildables/fromUser/" + userId);
            // Set the correct spritesheet for each buildable since the server doesn't store sprite sheet urls
            data.forEach(
                buildableData =>
                    (buildableData.spritesheet = SpritesheetUtils.getCorrespondingSpritesheet(
                        buildableData.buildableTypeEnum,
                        buildableData.specialisationType
                    ))
            );
            return data;
        } catch (error) {
            ErrorHandler.handle(error);
            return [];
        }
    };

    return {
        getBuildables
    };
})();

export default BuildableService;
