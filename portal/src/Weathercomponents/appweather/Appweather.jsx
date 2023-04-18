import React, { useEffect } from 'react';
import './Appweather.css';
import CityInfo from '../cityInfo/CityInfo';
import WeatherInfo from '../weatherInfo/WeatherInfo';
//import addMarkersToMap from "../map/Map";
import BarChart from "../chart/Chart";
import Alert from '@mui/material/Alert';
import { useState } from 'react';
import axios from "axios";
import maplibregl from "maplibre-gl";
import Map,{Marker} from "react-map-gl";
import "maplibre-gl/dist/maplibre-gl.css"

const API_KEY = "0aa0055c7b21c949c477d2b768de3e90"

function Appweather() {
  const [city, setCity] = useState();
  const [weather, setWeather] = useState();
  const [error,setError] = useState();
  const [veiwState,setViewState] = useState({latitude:50,longitude:30,zoom:6});

  const fetchWeather = async(e) =>{
    e.preventDefault();
    try{
  let response = 
  await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}`);
  setWeather(response.data);
//  console.log(response.data);
  if(error){
    setError(false)
  }
} 
    catch (error){
        setError(error)
      }
  }
  
    useEffect(() => {
      setViewState({
        latitude:weather?.coord?.lat,
        longitude:weather?.coord?.lon,
         zoom:6,
        })
    },
    [weather]
    );
  return (
    <div className="AppWeather">
       <span className="title"> Weather app</span>
      
       <CityInfo className="appCity" setCity={setCity} fetchWeather={fetchWeather}/>
       <div />
         { weather ?  ((error) ? (
        <Alert severity="error" >This is not valid a city!</Alert>
       ) : ( <>
        <WeatherInfo className="appWeather" weather={weather}/>
        <BarChart weather={weather}/>
        <div >
        <Map 
          mapLib={maplibregl}
          {...veiwState}
  initialViewState={{
    longitude: weather?.coord?.lon,
    latitude: weather?.coord?.lat,
    zoom: 6
  }}
  style={{width: "350px", height: "475px",margintop:"500px" ,left:"30px", display: "flex",top: "272px",
          padding: "20px 10px",position:"absolute",}}
  mapStyle="https://api.maptiler.com/maps/streets-v2/style.json?key=fJfqcp8c0D70x8A5zTME"
>
<Marker longitude={weather?.coord?.lon}
         latitude={weather?.coord?.lat}
         color='#61dbfb'></Marker>
         </Map>  
         </div>
        </>
       )) : ((error) ? (
        <Alert severity="error" >This is not valid a city!</Alert> 
       ) : (<></>)
       ) 
       }
    </div>
  );
}
export default Appweather;