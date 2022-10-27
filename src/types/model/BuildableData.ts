import Location from "./Location";
import SpritesheetLocation from "./SpritesheetLocation";

interface BuildableData {
    id: number;
    location: Location;
    buildableTypeEnum: string;
    spritesheetLocation: SpritesheetLocation;
}

export default BuildableData;
