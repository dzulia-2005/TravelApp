import {Card} from "antd";
import {useGetWeatherQuery} from "../../features/weather/weatherApi.ts";

const WeatherPage = () => {
    const {data} = useGetWeatherQuery({ cityName: 'Tbilisi', country: 'ge' });


    return (
        <div>
            <h2>Weather</h2>
                    <Card
                        hoverable
                        style={{ width: 240 }}
                        cover={<img src={`https://openweathermap.org/img/wn/${data?.weather[0].icon}@2x.png`} alt="weather icon"/>
                        }
                    />

            <div>{data?.name}</div>
        </div>
    )
}

export default WeatherPage;