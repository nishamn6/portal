import React from "react";
import "./SinglePost.css"
//import {IconButton,DeleteIcon} from "@mui/material"

export default function SinglePost() {
    return (
        <div className="singlePost">
            <div className="singlePostWrapper">
                <img className="singlePostImg"
                src="./IMAGE/img.png" alt="" />
                   <h1 className="singlePostTitle"> ReactJs</h1>                    
                 <div className="singlePostInfo">
                    <span className="singlePostAuthor"> Author:<b> xxx </b></span>
                    <span className="singlePostDate">1 hour ago</span>
                 </div>
                 <p className="singlePostDesc">
                 ReactJS tutorial provides basic and advanced concepts of ReactJS. Currently, 
                 ReactJS is one of the most popular JavaScript front-end libraries which has a strong foundation 
                 and a large community.ReactJS is a declarative, efficient, and flexible JavaScript library for building reusable UI components.
                 It is an open-source, component-based front end library which is responsible only for the view layer of the application. 
                 It was initially developed and maintained by Facebook and later used in its products like WhatsApp & Instagram.
                 Our ReactJS tutorial includes all the topics which help to learn ReactJS. These are ReactJS Introduction, ReactJS Features, 
                 ReactJS Installation, Pros and Cons of ReactJS, ReactJS JSX, ReactJS Components, ReactJS State, ReactJS Props, ReactJS Forms, ReactJS Events, 
                 ReactJS Animation and many more.React makes it painless to create interactive UIs. Design simple views for each state in your application, 
                 and React will efficiently update and render just the right components when your data changes.
                 Declarative views make your code more predictable and easier to debug.Build encapsulated components that manage their own state, 
                 then compose them to make complex UIs.Since component logic is written in JavaScript instead of templates,
                 you can easily pass rich data through your app and keep state out of the DOM.Learn Once, Write Anywhere
                 We don't make assumptions about the rest of your technology stack, so you can develop new features in React 
                 without rewriting existing code.React can also render on the server using Node and power mobile apps using React Native.


                </p>

            </div>     
        </div>
    );
}
