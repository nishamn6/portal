import React from "react";
import "./Post.css";

function Post(props) {
    console.log("props", props);
    return (
        <div className="post">
                <img className="postImg"
                    src="./Image/logo-og.png" alt="" />
                <div className="postInfo">
                    <div className="postCats">
                        <span className="postCat"> React</span>
                        <span className="postCat"> JS</span>
                    </div>
                    <span className="postTitle"> REACT DEVELOPMENT</span>
                    <hr />
                </div>
                <p className="postDesc">
                    React apps are made out of components. A component is a piece of the UI (user interface) that has its own logic and appearance.
                    A component can be as small as a button, or as large as an entire page.React is a JavaScript library for rendering user interfaces UI).
                    UI is built from small units like buttons, text, and images. React lets you combine them into reusable, nestable components.
                    From web sites to phone apps, everything on the screen can be broken down into components. In this chapter, you'll learn to create,
                    customize, and conditionally display React components.The magic of components lies in their reusability: you can create components
                    that are composed of other components. But as you nest more and more components, it often makes sense to start splitting them into
                    different files. This lets you keep your files easy to scan and reuse components in more places.
                </p>
           
        </div>

    );
}
export default Post;
