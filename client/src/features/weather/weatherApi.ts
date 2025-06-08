import {createApi} from "@reduxjs/toolkit/query/react";
import {baseQuery} from "../baseQuery.ts";
import {getWeather} from "../../react-query/query/weather";

export const weatherApi = createApi({
    reducerPath:'weatherApi',
    baseQuery:baseQuery,
    tagTypes:['weather'],
    endpoints:(builder) => ({
        getWeather : getWeather(builder)
    })
})

export const {
    useGetWeatherQuery
} = weatherApi;