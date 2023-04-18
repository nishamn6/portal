import React from "react";
import "./CityInfo.css";
import SearchIcon from '@mui/icons-material/Search';


 
 const CityInfo = (props) =>{
    const {setCity ,fetchWeather,fetchMap}= props;
  
    return(
        <div className="cityInfo">
            <form className="form" onSubmit={fetchWeather}  >
                
                <input placeholder="City" 
                onChange={(e)=> setCity(e.target.value)}/>
                <button type="submit" ><SearchIcon/></button>
            </form>
        </div>
    )
}
 export default CityInfo;