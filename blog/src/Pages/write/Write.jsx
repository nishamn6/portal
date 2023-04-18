import React from "react";
import "./Write.css";
import Icon from "@mui/material/Icon";

export default function Write() {
    return(
        <div className="write">
            <img className="writeImg" src="./Image/images.png" alt="" />
            <form className="writeForm">
                <div className="writeFormGroup">
                    <label htmlFor="fileInput">
                       <Icon className="writeIcon"> + </Icon>
                    </label>
                    <input  className="writeInp" type="file" id="fileInput" style={{display:"none"}} />
                    <input  className="writeInp" type="text" placeholder=" Title" autoFocus={true} />
                </div>
                <div className="writeFormGroup">
                    <textarea className="writeInp writeText"
                       placeholder="Tell your story....."
                       type="text" >
                       
                    </textarea>
                </div>
                <button className = "writeSubmit"> Publish </button>
            </form>
        </div>
    )
}