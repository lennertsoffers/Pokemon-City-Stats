import { Image } from "@rneui/base";
import React, { useEffect, useState } from "react";
import { View } from "react-native";
import { MAP_HEIGHT, MAP_WIDTH, SPRITESHEET_WIDTH, TILE_WIDTH } from "../../config/config";
import BuildableData from "../../types/model/BuildableData";
import Location from "../../types/model/Location";
import SpritesheetDimension from "../../types/model/SpritesheetDimensions";
import SpritesheetUtils from "../../utils/SpritesheetUtils";
import LoadingAnimation from "../LoadingAnimation";

/**
 * Represents a buildable in the world
 * @param buildbleData The Data object containing the info to draw the buildable on the screen
 */
const Buildable = ({ buildableData }: { buildableData: BuildableData }) => {
    const [spritesheet, setSpritesheet] = useState<NodeRequire>();
    const [dimensions, setDimensions] = useState<SpritesheetDimension>();
    const [imageHeight, setImageHeight] = useState<number>(0);
    const [transform, setTransform] = useState<Location>({ x: 0, y: 0 });

    // Initializes the buildable
    useEffect(() => {
        // Get the location on the spritesheet
        const location = buildableData.spritesheetLocation;

        // Get the spritesheet and set it to the state
        const spritesheet = buildableData.spritesheet;
        setSpritesheet(spritesheet);

        // Calculate the dimensions of the spritesheet given the top left tile index and the bottom right tile index
        const dimensions: SpritesheetDimension = SpritesheetUtils.getDimension(location);
        // Set these dimensions to the state
        setDimensions({
            offsetTop: -dimensions.offsetTop,
            offsetLeft: -dimensions.offsetLeft * TILE_WIDTH,
            width: dimensions.width * TILE_WIDTH,
            height: dimensions.height * TILE_WIDTH
        });

        // Get the height from the spritesheet and set it to the state
        const { height } = Image.resolveAssetSource(spritesheet as any);
        setImageHeight(height);

        // Set the transformation on the background image in the container
        setTransform({
            x: MAP_WIDTH / 2,
            y: MAP_HEIGHT / 2
        });
    }, []);

    if (!spritesheet || !dimensions) return <LoadingAnimation />;
    return (
        // This view has the dimensions of the buildable
        // It is absolutely positioned on the map
        // It contains the whole spritesheet as the background image
        // The background image is transformed so that only the correct position is shown
        <View
            style={{
                width: dimensions.width,
                height: dimensions.height,
                overflow: "hidden",
                position: "absolute",
                transform: [
                    { translateX: transform.x + buildableData.location.x * TILE_WIDTH - dimensions.width },
                    { translateY: transform.y + buildableData.location.y * TILE_WIDTH - dimensions.height }
                ],
                left: 0,
                top: 0,
                zIndex: buildableData.location.y + 100
            }}
        >
            <Image
                source={spritesheet as any}
                style={{
                    width: SPRITESHEET_WIDTH,
                    height: imageHeight,
                    left: 0,
                    top: 0,
                    transform: [{ translateX: dimensions.offsetLeft }, { translateY: dimensions.offsetTop }]
                }}
                resizeMode="contain"
            />
        </View>
    );
};

export default Buildable;
