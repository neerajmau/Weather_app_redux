import React, { useState, useEffect } from "react";
import classes from './currentInfo.module.css';



const CurrentInfo = (props) => {
    //console.log(props.selectCurrentInfo);

    const [currentTime, setCurrentTime] = useState();
    const [showdata, setShowdata] = useState({})
    const weekday = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    const month = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    const today = new Date();
    let day = weekday[today.getDay()];
    var date = month[today.getUTCMonth()] + ' ' + today.getDate() + ' ' + today.getFullYear();

    const UpdateTime = () => {
        const time = new Date().toLocaleTimeString();
        setCurrentTime(time);
    };
    setInterval(UpdateTime, 1000);
    useEffect(() => {
        console.log(props.selectCurrentInfo);
        setShowdata(props.selectCurrentInfo || {})


    }, [props.selectCurrentInfo])
    return (
        <>
            <div className={classes['current-info']}>
                <div className={classes['date-conatiner']}>
                    <div className={classes.time}>{currentTime}
                    </div>
                    <div className={classes.dates}>{day}, {date}</div>
                    <div className={classes['current-extra-info']}>
                        <span>Pressure:{showdata.Temp}</span>
                        <span>Wind Speed:</span>
                        <span>Sunrise:</span>
                        <span>Sunset:</span>
                    </div>
                </div>
                <div className={classes.mood}><img src="" alt="weathermood" />mood</div>
                <div className={classes.location}>location</div>
            </div>
        </>
    );
};

export default CurrentInfo;