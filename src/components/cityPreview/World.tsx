import React, { useEffect, useState } from "react";
import { Dimensions } from "react-native";
import { GestureResponderEvent, Image, ImageBackground, Pressable, View } from "react-native";
import BuildableService from "../../api/BuildableService";
import { MAP_HEIGHT, MAP_WIDTH } from "../../config/config";
import BuildableData from "../../types/model/BuildableData";
import Location from "../../types/model/Location";
import LoadingAnimation from "../LoadingAnimation";
import Buildable from "./Buildable";

const World = ({ userId }: { userId: number }) => {
    const [loading, setLoading] = useState<boolean>(true);
    const [buildables, setBuildables] = useState<BuildableData[]>([]);
    const [previousLocation, setPreviousLocation] = useState<Location | undefined>(undefined);
    const [transform, setTransform] = useState<Location>({ x: 0, y: 0 });

    useEffect(() => {
        (async () => {
            setBuildables(await BuildableService.getBuildables(userId));
            setTransform({
                x: MAP_WIDTH / -2 + Dimensions.get("window").width / 2,
                y: MAP_HEIGHT / -2 + Dimensions.get("window").height / 2
            });
            setLoading(false);
        })();
    }, []);

    if (loading) return <LoadingAnimation />;
    return (
        <View
            style={{
                height: "100%",
                width: "100%",
                position: "relative"
            }}
        >
            <Pressable
                onTouchMove={(event: GestureResponderEvent) => {
                    const newLocation: Location = {
                        x: event.nativeEvent.locationX,
                        y: event.nativeEvent.locationY
                    };

                    const movement: Location = {
                        x: previousLocation ? previousLocation.x - newLocation.x : 0,
                        y: previousLocation ? previousLocation.y - newLocation.y : 0
                    };

                    setPreviousLocation(newLocation);

                    setTransform({
                        x: Math.max(Math.min(transform.x - movement.x, 0), -MAP_WIDTH + Dimensions.get("window").width),
                        y: Math.max(Math.min(transform.y - movement.y, 0), -MAP_HEIGHT + Dimensions.get("window").height)
                    });
                }}
                onTouchEnd={() => {
                    setPreviousLocation(undefined);
                }}
                style={{
                    height: "100%",
                    width: "100%",
                    position: "absolute",
                    left: 0,
                    top: 0,
                    zIndex: 1000
                }}
            />
            <ImageBackground
                source={require("../../assets/images/map.png")}
                style={{
                    height: 3200,
                    width: 4160,
                    transform: [{ translateX: transform.x }, { translateY: transform.y }],
                    position: "absolute",
                    left: 0,
                    top: 0
                }}
            >
                <View
                    style={{
                        height: "100%",
                        width: "100%",
                        position: "absolute",
                        left: 0,
                        top: 0,
                        zIndex: 1
                    }}
                >
                    {buildables.map(buildableData => (
                        <Buildable key={buildableData.id} buildableData={buildableData} />
                    ))}
                </View>
            </ImageBackground>
        </View>
    );
};

export default World;
