import {EndpointBuilder} from "@reduxjs/toolkit/query";
import {WeatherResponse} from "../../../features/weather/weatherTypes.ts";
import {WeatherEndpoints} from "../../../features/weather/weatherEnum.ts";

const apiKey = "b87db9ffe90095ddaf4c435a7c5d928f"

export const getWeather = (builder:EndpointBuilder<any, any, any>) => {
    return builder.query<WeatherResponse,{cityName:string,country:string}>({
        query: ({cityName,country}:{cityName: string,country:string}) =>
            WeatherEndpoints.GETWEATHER+`/weather?q=${cityName},${country}&APPID=${apiKey}&units=metric`,
        providesTags:["weather"],
    })
}
