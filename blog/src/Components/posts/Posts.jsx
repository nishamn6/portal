import React from "react";
import "./Posts.css"
import Post from "../post/Post";
import { Link } from "react-router-dom";


// const Posts = () => {
//   const options = [{
//     title:"React Development",
//     image:"./IMAGE/react.webp",
//     category:"ReactJs",
//     info:"",
//     desc:"The Reactjs framework is an open-source JavaScript framework and library developed by Facebook.It is used for building interactive user interfaces and web applications quickly and efficiently with significantly less code than you would with vanilla JavaScript.In React you develop your applications by creating reusable components that you can think of as independent Lego blocks.These components are individual pieces of a final interface  which when assembled form the application's entire user interface. "
//    },{
//    title:"Development",
//     image:"./IMAGE/react.webp",
//     category:"ReactJs",
//     info:"",
//     desc:"The Reactjs framework is an open-source JavaScript framework and library developed by Facebook.It is used for building interactive user interfaces and web applications quickly and efficiently with significantly less code than you would with vanilla JavaScript.In React you develop your applications by creating reusable components that you can think of as independent Lego blocks.These components are individual pieces of a final interface  which when assembled form the application's entire user interface. "
//    }   
//    ];
//     return (
//         <div className="posts">
//            { options.map((i) => {
//             {console.log("i",i)}
//             <Post title={i.title} image={i.image} category = {i.category} info={i.info} desc={i.desc}/>
//             })
//            } 
//         </div> 
//     );
// //}
function Posts( ){
  return (
    <div className="posts">
      <nav><Link to="/posts" className="link" ><Post/> </Link> </nav>
      <nav><Link to="/posts" className="link" ><Post/> </Link> </nav>
      <nav><Link to="/posts" className="link" ><Post/> </Link> </nav>
      <nav><Link to="/posts" className="link" ><Post/> </Link> </nav>
     
    </div>
  );
}
export default Posts;