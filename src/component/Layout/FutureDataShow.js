import React, { Fragment, useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { useParams } from 'react-router-dom';
import classes from './FutureForecast.module.css';
import useHttp from "../Hooks/useHttp";

export default function FutureDataShow(props) {
    const [datashow, setdataShow] = useState([])
    const myState = useSelector((store) => store.WeatherReducer)
    const { getData, searchvalue } = useParams()

    console.log("getDate", getData, searchvalue)

    const { sendRequest: fetchTasks } = useHttp();


    const dataShow = async () => {
        const TempInfo = []
        try {
            await fetchTasks(`https://api.openweathermap.org/data/2.5/forecast?q=${searchvalue}&units=metric&appid=4beffc863037e89f0f181d893d1cf79b`)
            const data1 = myState.apiData.filter((item) => {
                return (item.dt_txt.slice(0, 10) === getData)
            })
            console.log("object1", data1)

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

            setdataShow(TempInfo)
        }
        catch (err) {
            console.log(err.message)
        }

    }


    useEffect(() => {
        dataShow()
    }, [searchvalue])
    // useEffect(() => {

    // }, [TempInfo])

    console.log("object5", datashow)

    return (
        <Fragment >
            <div className={classes['future-forecast']}>
                <div className={classes['weather-forecast']}>
                    {datashow.map((curElement) => {
                        var futureDate = new Date(curElement.date);
                        let month = futureDate.toLocaleString('default', { month: 'long' });
                        let day = futureDate.getDate();
                        day += "\n"
                        let time = futureDate.getHours()
                        time += ":"
                        let minutes = futureDate.getMinutes()
                        minutes += "0:"
                        let seconds = futureDate.getSeconds()
                        seconds += "0"
                        return (

                            <Fragment>
                                <div className={classes['weather-forecast-item']} to="FutureDataShow" >
                                    <div className={classes['future-date']}>{month} {day} {time}{minutes}{seconds}</div>
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




