import React, { Fragment } from "react";
import classes from './FutureForecast.module.css';
import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";


const FutureForecast = ({ TempInfo }) => {
    const myState = useSelector((store) => store.WeatherReducer)


    return (
        <>
            <div className={classes['future-forecast']}>
                <div className={classes['weather-forecast']}>
                    {TempInfo.map((curElement) => {
                        var futureDate = new Date(curElement.date);
                        let month = futureDate.toLocaleString('default', { month: 'long' });
                        let day = futureDate.getDate();
                        const date = curElement.date.slice(0, 10)
                        return (

                            <Fragment>

                                <NavLink className={classes['weather-forecast-item']} to={`/FutureDataShow/${date}/${myState.searchvalue}`} >
                                    <div className={classes['future-date']}>{month} {day}</div>
                                    <img src={`http://openweathermap.org/img/wn/${curElement.weathermoodIcon}@2x.png`} alt="future-img" />
                                    <div className={classes['min-max-temp']}>Mood-{curElement.mood}</div>
                                    <div className={classes['min-max-temp']}>Current-{curElement.Temp}</div>
                                    <div className={classes['min-max-temp']}>min-{curElement.Min_temp}</div>
                                    <div className={classes['min-max-temp']}>max-{curElement.Max_temp}</div>

                                </NavLink>
                            </Fragment>

                        );
                    })}

                </div>
            </div>
        </>
    );
};

export default FutureForecast;



// <Navigate className={classes['weather-forecast-item']} to={`/FutureDataShow/${date}`} onClick={() => HandleDate(date)}></Navigate>