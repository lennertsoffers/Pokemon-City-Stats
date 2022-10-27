import { Image } from "@rneui/base";
import React, { useEffect, useState } from "react";
import { Dimensions, ImageBackground, ImageBackgroundProps, View } from "react-native";
import { MAP_HEIGHT, MAP_WIDTH, SPRITESHEET_WIDTH, TILE_WIDTH } from "../../config/config";
import BuildableData from "../../types/model/BuildableData";
import Location from "../../types/model/Location";
import SpritesheetDimension from "../../types/model/SpritesheetDimensions";
import SpritesheetUtils from "../../utils/SpritesheetUtils";
import LoadingAnimation from "../LoadingAnimation";

const Buildable = ({ buildableData }: { buildableData: BuildableData }) => {
    const [spritesheet, setSpritesheet] = useState<NodeRequire>();
    const [dimensions, setDimensions] = useState<SpritesheetDimension>();
    const [imageHeight, setImageHeight] = useState<number>(0);
    const [transform, setTransform] = useState<Location>({ x: 0, y: 0 });

    useEffect(() => {
        const location = buildableData.spritesheetLocation;

        const spritesheet = buildableData.spritesheet;
        setSpritesheet(spritesheet);

        const dimensions: SpritesheetDimension = SpritesheetUtils.getDimension(location);
        setDimensions({
            offsetTop: -dimensions.offsetTop,
            offsetLeft: -dimensions.offsetLeft * TILE_WIDTH,
            width: dimensions.width * TILE_WIDTH,
            height: dimensions.height * TILE_WIDTH
        });

        const { height } = Image.resolveAssetSource(spritesheet as any);
        setImageHeight(height);

        setTransform({
            x: MAP_WIDTH / 2,
            y: MAP_HEIGHT / 2
        });
    }, []);

    if (!spritesheet || !dimensions) return <LoadingAnimation />;
    return (
        <View
            style={{
                width: dimensions.width,
                height: dimensions.height,
                overflow: "hidden",
                position: "absolute",
                transform: [
                    { translateX: transform.x + buildableData.location.x * TILE_WIDTH },
                    { translateY: transform.y + buildableData.location.y * TILE_WIDTH }
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
