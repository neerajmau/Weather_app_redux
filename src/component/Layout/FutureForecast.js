import React, { Fragment } from "react";
import classes from './FutureForecast.module.css';
import { NavLink } from "react-router-dom";
import { useDispatch } from "react-redux";
import { FutureDate } from '../../Actions/index'


const FutureForecast = ({ TempInfo }) => {
    const dispatch = useDispatch()
    const HandleDate = (date) => {
        dispatch(FutureDate(date))
    }
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
                                <NavLink to='/'></NavLink>
                                <NavLink className={classes['weather-forecast-item']} to="FutureDataShow" onClick={() => HandleDate(date)}>
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