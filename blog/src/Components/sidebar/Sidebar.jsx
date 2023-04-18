import React from "react";
import "./Sidebar.css"

export default function About() {
    return (
        <div className="sidebar">
            <div className="sidebarItem">
                <span className="sidebarTitle"> ABOUT  </span>
                <img className="sidebarImg" src="./IMAGE/images.png" alt=""/>
                <p>
                 React.js is a front-end library that has gradually become the go-to framework for modern web development within the JavaScript community.
                 React is an awesome framework for building a blog because it also helps in creating a better UI (user interface) for your blog. React
                 creates a VIRTUAL DOM in memory.Instead of manipulating the browser's DOM directly, React creates a virtual DOM in memory, where it does
                 all the necessary manipulating, before making the changes in the browser DOM.Current version of React.JS is V18.0.0 (April 2022).Initial
                 Release to the Public (V0.3.0) was in July 2013.React.JS was first used in 2011 for Facebook's Newsfeed feature.Facebook Software Engineer,
                 Jordan Walke, created it.Current version of create-react-app is v5.0.1 (April 2022).create-react-app includes built tools such as webpack,
                  Babel, and ESLint.
                </p>
            </div>
             <div className="sidebarItem">
             <span className="sidebarTitle"> CATEGORIES  </span>
             <ul className="sidebarList">
                <li className="sidebarListItem">Javascript</li>
                <li className="sidebarListItem">HTML</li>
                <li className="sidebarListItem">Style</li>
                <li className="sidebarListItem">CSS</li>
                <li className="sidebarListItem">React Native</li>
                <li className="sidebarListItem"> Library</li>
             </ul>
             </div>
    
        </div>
    );
}
