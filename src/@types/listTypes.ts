export type woeidListType = {
  cidade: string;
  woeid: number;
};

export type resultApiType = {
    cid: string;
    city: string;
    city_name: string;
    cloudiness: number;
    condition_code: string;
    condition_slug: string;
    cref: string;
    currently: string;
    date: string;
    description: string;
    forecast:[
        {
            cloudiness: number
            condition: string;
            date: string;
            description: string;
            max: number;
            min: number;
            rain: number;
            rain_probability: number;
            weekday: string;
            wind_speedy: string;
        }
    ]
    humidity: number;
    img_id: string;
    rain: number;
    sunrise: string;
    sunset: string;
    temp: number;
    time: string;
    wind_direction: number;
    wind_speedy: number;
}