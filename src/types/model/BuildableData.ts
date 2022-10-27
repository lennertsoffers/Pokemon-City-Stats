import Location from "./Location";
import SpritesheetLocation from "./SpritesheetLocation";

interface BuildableData {
    id: number;
    location: Location;
    buildableTypeEnum: string;
    spritesheetLocation: SpritesheetLocation;
    spritesheet: NodeRequire;
    companyType: string | undefined;
}

export default BuildableData;
