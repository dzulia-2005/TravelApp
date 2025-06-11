import {Route} from "react-router-dom";
import {lazy, Suspense} from "react";
import {DASHBOARD_ENUM} from "../enum.ts";

const WeatherPage = lazy(()=>import("../../../../src/pages/weather/index"));


export const weather = [
    <Route
        path={DASHBOARD_ENUM.weather_page}
        element={
            <Suspense fallback={<div>Loading...</div>}>
                <WeatherPage/>
            </Suspense>
        }
    />
]