import React from "react";
import "./Home.css"
import Header from "../../Components/header/Header"
import Posts from "../../Components/posts/Posts"

export default function Home() {
    return (
        <>
         <Header/>
         <div className= "home">

           <Posts />
         </div>
        </>
    )
}