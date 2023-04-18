import React from "react";
import ReactDom from "react-dom";
import Topbar from "./Components/Top/Topbar";
import Home from "./Pages/home/Home";
import Write from "./Pages/write/Write";
import Login from "./Pages/login/Login";
import Posts from "./Components/posts/Posts";
import Register from "./Pages/register/Register";
import { BrowserRouter,Routes,Route} from "react-router-dom";
import About from "./Pages/about/About";

function App() {
  return (
    <div className="App">
      <Topbar/>
       <Routes>
              <Route exact path="/" element={<Home/>} />
              <Route path="/about" element={<About/>} />
              <Route path="/write" element={<Write/>} />
              <Route path="/login" element={<Login/>} />
              <Route path="/register" element={<Register/>} />
              <Route path="/posts" element={<Posts/>} />
        </Routes>
    
    </div>
  );
}

export default App;
