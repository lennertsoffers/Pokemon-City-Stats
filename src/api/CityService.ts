import axios from "axios";

const CityService = (() => {
    const changeCityName = (cityName: string) => {
        try {
            axios.post("/api/city/changeName", { name: cityName });
        } catch (error) {
            console.log(error);
        }
    };

    return {
        changeCityName
    };
})();
export default CityService;
