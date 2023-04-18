import React from 'react';
import './App.css';
import CityInfo from './Components/cityInfo/CityInfo';
import WeatherInfo from './Components/weatherInfo/WeatherInfo';
import Alert from '@mui/material/Alert';
import { useState} from 'react';
import axios from "axios";

const API_KEY = "0aa0055c7b21c949c477d2b768de3e90"

function App() {
  const [city, setCity] = useState();
  const [weather, setWeather] = useState();
  const [error,setError] = useState();

  const fetchWeather = async(e) =>{
    e.preventDefault();
    try{
  let response = 
  await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}`);
  setWeather(response.data);
  if(error){
    setError(false)
  }
} 
    catch (error){
        setError(error)
      }
  }
  return (
    <div  className="AppWeather">
       <span className="title"> Weather app</span>
       <CityInfo className="appCity" setCity={setCity} fetchWeather={fetchWeather}/>
         { weather ?  ((error) ? (
        <Alert severity="error" >This is not a city!</Alert>
       ) : ( 
        <WeatherInfo className="appWeather" weather={weather}/>
       )) : ((error) ? (
        <Alert severity="error" >This is not a city!</Alert> 
       ) : (<></>)
       ) 
       }  
       
    </div>
  );
}
export default App;
