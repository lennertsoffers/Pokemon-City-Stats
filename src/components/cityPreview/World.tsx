import React, { useEffect, useState } from "react";
import { Dimensions } from "react-native";
import { GestureResponderEvent, Image, ImageBackground, Pressable, View } from "react-native";
import BuildableService from "../../api/BuildableService";
import { MAP_HEIGHT, MAP_WIDTH } from "../../config/config";
import BuildableData from "../../types/model/BuildableData";
import Location from "../../types/model/Location";
import LoadingAnimation from "../LoadingAnimation";
import Buildable from "./Buildable";

/**
 * Represents the world (city) containing the buildables
 *
 * This world component exists of 3 layers on top of each other
 * - The bottom layer is the background image representing the grass and ground
 * - The buildable layer are the buildables such as roads, houses, decorations...
 * - The third layer is an invisible layer occupying the whole screen
 *   It listens to TouchMove events on the screen
 *   This movement is also applied on the previous two layers to create the drag effect
 *   We need this invisible interraction layer, because the drag effect is created by translating the other layers
 *   If we would listen to touch move events on that layer, its cancelled again after transforming the layer itself
 *   Because the position of the touchmove event is relative to the location on the elements listening to the touchmove
 *
 * @param userId The id of the user that owns this city
 */
const World = ({ userId }: { userId: number }) => {
    const [loading, setLoading] = useState<boolean>(true);
    const [previousLocation, setPreviousLocation] = useState<Location | undefined>(undefined);
    const [transform, setTransform] = useState<Location>({ x: 0, y: 0 });
    // We have a state 'buildables' containing all the data of the buildables to place them in the world
    const [buildables, setBuildables] = useState<BuildableData[]>([]);
    // We have another state buildableElements containing the mapped buildable data to JSX elements
    // This is so the app doesn't get slowed down by re-rendering all the buildables on an interraction
    const [buildableElements, setBuildableElements] = useState<JSX.Element[] | JSX.Element>([]);

    /**
     * Sets the new transformation after touch moving on the screen
     * @param event The movement event on the screen
     */
    const handleTouchMove = (event: GestureResponderEvent) => {
        // The new location is the location the user is at now
        const newLocation: Location = {
            x: event.nativeEvent.locationX,
            y: event.nativeEvent.locationY
        };

        // The movement is the previous locationo minus the new location
        // If there is no previous location, the movement is 0
        // This happens at the first time the touchmove event starts
        const movement: Location = {
            x: previousLocation ? previousLocation.x - newLocation.x : 0,
            y: previousLocation ? previousLocation.y - newLocation.y : 0
        };

        // Sets the current location as the previous location
        // If it was not set yet (so the movement is 0), the next time the event gets triggered, the previous location is already set
        setPreviousLocation(newLocation);

        // Transforms the background and the buildables
        setTransform({
            x: Math.max(Math.min(transform.x - movement.x, 0), -MAP_WIDTH + Dimensions.get("window").width),
            y: Math.max(Math.min(transform.y - movement.y, 0), -MAP_HEIGHT + Dimensions.get("window").height)
        });
    };

    /**
     * Removes the previous location
     */
    const handleTouchEnd = () => {
        setPreviousLocation(undefined);
    };

    // Initializes the wold by loading all the buildables and placing them in the world
    useEffect(() => {
        (async () => {
            // Load the buildables from the server
            setBuildables(await BuildableService.getBuildables(userId));

            // Set the camera in the center of the map rather than the top left
            setTransform({
                x: MAP_WIDTH / -2 + Dimensions.get("window").width / 2,
                y: MAP_HEIGHT / -2 + Dimensions.get("window").height / 2
            });

            // End the loading
            setLoading(false);
        })();
    }, []);

    // Create a list of JSX elements that are mapped from the buildable data
    useEffect(() => {
        setBuildableElements(buildables.map(buildableData => <Buildable key={buildableData.id} buildableData={buildableData} />));
    }, [buildables]);

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
                onTouchMove={handleTouchMove}
                onTouchEnd={handleTouchEnd}
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
                    {buildableElements}
                </View>
            </ImageBackground>
        </View>
    );
};

export default World;
