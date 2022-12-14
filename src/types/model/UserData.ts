import StatisticsData from "./StatisticsData";

interface UserData {
    id: number;
    username: string;
    xp: number;
    level: number;
    money: number;
    citizens: number;
    employedCitizens: number;
    satisfaction: number;
    cityName: string;
    rank: number;
    statistics: StatisticsData;
}

export default UserData;
