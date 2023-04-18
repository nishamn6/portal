import React from 'react';
import './App.css';
import Topbar from "./Components/Top/Topbar";
import Home from "./Pages/home/Home";
import Write from "./Pages/write/Write";
import Login from "./Pages/login/Login";
import Posts from "./Components/posts/Posts";
import Register from "./Pages/register/Register";
import { Routes,Route} from "react-router-dom";
import About from "./Pages/about/About";
import Appweather from './Weathercomponents/appweather/Appweather';
import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';


function App() {
  const [value, setValue] = React.useState('1');

  const handleChange = (event: React.SyntheticEvent, newValue: string) => {
    setValue(newValue);
  };

  return (
    <div className="App">
       <Box sx={{ width: '100%', typography: 'body1' }}>
      <TabContext value={value}>
        <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
          <TabList onChange={handleChange} aria-label="lab API tabs example">
            <Tab label="React Blog" value="1" />
            <Tab label="WeatherApp" value="2" />
          </TabList>
        </Box>
        <TabPanel value="1">
        <Topbar/>
           <Routes>
               <Route exact path="/" element={<Home/>} />
               <Route path="/about" element={<About/>} />
               <Route path="/write" element={<Write/>} />
               <Route path="/login" element={<Login/>} />
               <Route path="/register" element={<Register/>} />
               <Route path="/posts" element={<Posts/>} />
           </Routes>
        </TabPanel>
        <TabPanel value="2">
        <Appweather/>
        </TabPanel>
      </TabContext>
    </Box>
    </div> 
  );
}

export default App;
