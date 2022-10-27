import axios from "axios";
import BuildableData from "../types/model/BuildableData";
import SpritesheetUtils from "../utils/SpritesheetUtils";

const BuildableService = (() => {
    const getBuildables = async (userId: number): Promise<BuildableData[]> => {
        try {
            const { data }: { data: BuildableData[] } = await axios.get("/api/buildables/fromUser/" + userId);
            data.forEach(
                buildableData =>
                    (buildableData.spritesheet = SpritesheetUtils.getCorrespondingSpritesheet(
                        buildableData.buildableTypeEnum,
                        buildableData.specialisationType
                    ))
            );
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
