import React, { Fragment } from 'react'
import { useSelector } from 'react-redux'
import classes from './FutureForecast.module.css';
export default function FutureDataShow() {
    const myState = useSelector((store) => store.WeatherReducer)
    const data1 = myState.apiData.filter((item) => {
        return (item.dt_txt.slice(0, 10) === myState.futureDate)
    })
    const TempInfo = []
    data1.forEach((item) => {
        TempInfo.push({
            Temp: item.main.temp,
            Min_temp: item.main.temp_min,
            Max_temp: item.main.temp_max,
            date: item.dt_txt,
            mood: item.weather[0].main,
            weathermoodIcon: item.weather[0].icon,
            Humidity: item.main.humidity
        })
    })

    return (
        <Fragment >
            <div className={classes['future-forecast']}>
                <div className={classes['weather-forecast']}>
                    {TempInfo.map((curElement) => {
                        var futureDate = new Date(curElement.date);
                        let month = futureDate.toLocaleString('default', { month: 'long' });
                        let day = futureDate.getDate();
                        return (

                            <Fragment>
                                <div className={classes['weather-forecast-item']} to="FutureDataShow" >
                                    <div className={classes['future-date']}>{month} {day}</div>
                                    <img src={`http://openweathermap.org/img/wn/${curElement.weathermoodIcon}@2x.png`} alt="future-img" />
                                    <div className={classes['min-max-temp']}>Mood-{curElement.mood}</div>
                                    <div className={classes['min-max-temp']}>Current-{curElement.Temp}</div>
                                    <div className={classes['min-max-temp']}>min-{curElement.Min_temp}</div>
                                    <div className={classes['min-max-temp']}>max-{curElement.Max_temp}</div>

                                </div>
                            </Fragment>

                        );
                    })}

                </div>
            </div>
        </Fragment>
    )
}
