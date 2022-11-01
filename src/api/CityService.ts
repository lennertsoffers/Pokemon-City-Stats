import axios from "axios";
import ErrorHandler from "../error/ErrorHandler";

/** Collects functions regarding cities */
const CityService = (() => {
    /**
     * Sends a request to the server to change the city name of the city of the current user to the provided string
     */
    const changeCityName = (cityName: string) => {
        try {
            axios.post("/api/city/changeName", { name: cityName });
        } catch (error) {
            ErrorHandler.handle(error);
        }
    };

    return {
        changeCityName
    };
})();
export default CityService;
