import { TILES_IN_ROW, TILE_WIDTH } from "../config/config";
import SpritesheetConfig from "../config/SpritesheetConfig";
import SpritesheetDimension from "../types/model/SpritesheetDimensions";
import SpritesheetLocation from "../types/model/SpritesheetLocation";

const SpritesheetUtils = (() => {
    /**
     * Calculates the dimensions of the object on the spriteshee given the first and last tile index
     * @param spritesheetLocation The index of the first and last tile of the object on the spritesheet
     * @returns The width, height, offsetLeft and offset top of that object on the spritesheet
     */
    const getDimension = (spritesheetLocation: SpritesheetLocation): SpritesheetDimension => {
        // Offset from the most left tile of the spritesheet
        const offsetLeft = spritesheetLocation.topLeft % TILES_IN_ROW;
        const offsetTop = Math.floor(spritesheetLocation.topLeft / TILES_IN_ROW) * TILE_WIDTH;

        // Width is the difference between the top left tile and the bottom right divided by tiles in a row plus 1
        const width = ((spritesheetLocation.bottomRight - spritesheetLocation.topLeft) % TILES_IN_ROW) + 1;
        const height = Math.floor((spritesheetLocation.bottomRight - spritesheetLocation.topLeft) / TILES_IN_ROW) + 1;

        return {
            width: width,
            height: height,
            offsetLeft: offsetLeft,
            offsetTop: offsetTop
        };
    };

    /**
     * Reads the buildable type and optional specialisation and returns the corresponding spritesheet
     */
    const getCorrespondingSpritesheet = (buildableType: string, specialisationType: string | undefined): NodeRequire => {
        switch (buildableType) {
            case "HOUSE":
                return SpritesheetConfig.HOUSE_SPRITESHEET;
            case "COMPANY":
                switch (specialisationType) {
                    case "COOKING":
                        return SpritesheetConfig.COOKING_SPRITESHEET;
                    case "SOCIAL":
                        return SpritesheetConfig.SOCIAL_SPRITESHEET;
                    case "SERVICE":
                        return SpritesheetConfig.SERVICE_SPRITESHEET;
                    case "SELLING":
                        return SpritesheetConfig.SELLING_SPRITESHEET;
                    default:
                        return SpritesheetConfig.FALLBACK_SPRITESHEET;
                }
            case "DECORATION":
                return SpritesheetConfig.DECORATION_SPRITESHEET;
            case "ROAD":
                return SpritesheetConfig.ROAD_SPRITESHEET;
            default:
                return SpritesheetConfig.FALLBACK_SPRITESHEET;
        }
    };

    return {
        getDimension,
        getCorrespondingSpritesheet
    };
})();
export default SpritesheetUtils;
