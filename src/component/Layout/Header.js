import React, { useState, useEffect } from "react";
import classes from './header.module.css';
import Input from "../UI/Input";
import CurrentInfo from './CurrentInfo';
import FutureForecast from "./FutureForecast";
import { Fragment } from "react/cjs/react.production.min";
import { useDispatch, useSelector } from "react-redux";
import { apiData } from '../../Actions/index'

const Header = () => {
    const myState = useSelector((store) => store.WeatherReducer)
    const dispatch = useDispatch()
    console.log("object12322", myState.tempinfo)
    const [SearchValue, setSearchValue] = useState('Delhi');
    const [TempInfo, setTempInfo] = useState([]);
    const [PassCurrentData, setPassCurrentData] = useState();

    const SearchValueHandler = (event) => {
        setSearchValue(event.target.value);
        //console.log(event.target.value);
    }

    const getWeatherInfo = async () => {
        try {
            const url = `https://api.openweathermap.org/data/2.5/forecast?q=${SearchValue}&units=metric&appid=4beffc863037e89f0f181d893d1cf79b`;
            const response = await fetch(url);
            const data = await response.json();
            console.log(data.list);
            //const {list}=data;
            //console.log(list);
            dispatch(apiData(data.list))
            console.log("APIDATA", myState.apiData)
            const arr = [];
            for (let i = 0; i < 40; i++) {
                if (i % 8 === 0) {
                    arr.push(
                        {
                            Temp: data.list[i].main.temp,
                            Min_temp: data.list[i].main.temp_min,
                            Max_temp: data.list[i].main.temp_max,
                            date: data.list[i].dt_txt,
                            mood: data.list[i].weather[0].main,
                            weathermoodIcon: data.list[i].weather[0].icon,
                            Humidity: data.list[i].main.humidity
                        }
                    );
                }
            }
            // console.log(arr);

            setTempInfo(arr);
            //console.log(TempInfo);
        } catch (error) {
            console.log(error);
        }
        //setSearchValue('');

    };
    useEffect(() => {
        getWeatherInfo();
    }, []);
    const onCardHandler = (curElement) => {
        //console.log(curElement);
        setPassCurrentData(curElement);
    }
    console.log(PassCurrentData);
    return (
        <Fragment>
            {console.log("object", TempInfo)}
            <div className={classes.header}>
                <Input value={SearchValue} onChange={SearchValueHandler} onClick={getWeatherInfo} />
            </div>
            <FutureForecast TempInfo={TempInfo} ElementCurrent={onCardHandler} />
        </Fragment>
    );
};


export default Header;