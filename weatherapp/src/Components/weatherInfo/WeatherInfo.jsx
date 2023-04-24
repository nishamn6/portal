import React from "react";
import "./WeatherInfo.css";
import DeviceThermostatIcon from '@mui/icons-material/DeviceThermostat';
import AirIcon from '@mui/icons-material/Air';
import OpacityIcon from '@mui/icons-material/Opacity';
import TireRepairIcon from '@mui/icons-material/TireRepair';

const WeatherInfoComponent = (props) => {
    const{name,value,unit}=props;
    return(
        <div className="infoContainer">
            <span className="infoLabel">{name}</span>
                <span className= "infoValue"> {value}{unit}</span>
        </div>
    );
}

const WeatherInfo = (props) => {
    const {weather}=props;
    return(
        <div className="weatherinfo">
            <div className="location">{`${weather?.name},${weather?.sys?.country}`}</div>
            <div className="weatherCondition">
                   <span className="condition">
                    <span>{weather?.main?.temp } F</span></span>
                   <img className="weatherLogo" src="/Image/images.png" alt=" "/>
            </div>
            <div className="weatherInfo">weather Info </div>
              <div className="weatherInfoPart">
              <DeviceThermostatIcon/>
                <WeatherInfoComponent name="temperature " value={weather?.main?.temp}  unit="F"></WeatherInfoComponent>
                <OpacityIcon/>
                <WeatherInfoComponent name="humidity " value={weather?.main?.humidity} unit="g/m3"/>
                <AirIcon/>
                <WeatherInfoComponent name="wind" value={weather?.wind?.speed} unit="m/s" />
                <TireRepairIcon/>
                <WeatherInfoComponent name="pressure " value={weather?.main?.pressure} unit="pa" />  
            </div>
        </div>
    );
}        
export default WeatherInfo;
