import React from "react";
import {Link} from "react-router-dom"
import "./Topbar.css";


 export default function Topbar() {

     return (
         <div className= "top">
          <div className="topLeft"> </div>
          <div className="topCenter"> 
             <nav className="topListItem"><Link to="/" className="link" > HOME </Link></nav>
             <nav className="topListItem"><Link to="/about" className="link" > ABOUT </Link> </nav>
             <nav className="topListItem"> <Link to="/contact" className="link" > CONTACT </Link> </nav>
             <nav className="topListItem"><Link to="/write" className="link" > WRITE</Link> </nav>
             {/* <nav className="topListItem">{user && "LOGOUT"}</nav> */}
         </div>
          <div className="topRight">
          <nav className="topListItem"><Link to="/login" className="link" > LOGIN </Link> </nav>
          <nav className="topListItem"><Link to="/register" className="link" > REGISTER </Link> </nav> 
         </div>
      </div>
     );

}

