import axios from 'axios';
import { useEffect, useContext} from 'react';
import UserContext from '../UserContext'



function WeatherFunction(){
  const {setWeather,} = useContext(UserContext)
    useEffect(() => {
        axios
        .get("https://api.open-meteo.com/v1/forecast?latitude=41.69&longitude=44.83&hourly=temperature_2m,precipitation&daily=weathercode,temperature_2m_max,rain_sum&current_weather=true&timezone=auto")
        .then(function (response) {
          console.log(response.data.current_weather.temperature);
          setWeather(response.data.current_weather.temperature)
        });
      },[]);
}
export default WeatherFunction;