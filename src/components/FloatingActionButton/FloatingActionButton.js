
import React from "react"
import App from "../App.js"
import Home from "../Home.js"
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";
const yawpURL="https://yawp.vercel.app/"
const shareOnTwitter=`http://twitter.com/share?text=Just came across YAWP developed by @josharsh1. Click here witness Yet Another Web Playground &url=${yawpURL}&hashtags=yawp,web,josharsh`
const shareOnLinkedin=`https://www.linkedin.com/sharing/share-offsite/?url=${yawpURL}`
function clearEditors(){
    let codeLineCollection=document.getElementsByClassName("CodeMirror-line");
    for (let line of codeLineCollection){
        line.innerText="";
    }
}
function FloatingActionButton(props) {
    return (
        <div class="adminActions">
            <input type="checkbox" name="adminToggle" class="adminToggle" />
            <a class="adminButton" href="#!"><i class="fa fa-cog"></i></a>
            <div class="adminButtons">
                <a onClick={props.handler} href="#" title="Take Screenshot"><i class="fa fa-camera"></i></a>
                <a onClick={clearEditors} title="Erase Code"><i class="fa fa-eraser"></i></a>
                <a href={shareOnTwitter} title="Share on Linkedin"><i class="fab fa-twitter"></i></a>
                <a href={shareOnLinkedin} title="Share on Twitter"><i class="fab fa-linkedin-in"></i></a>
                <a href="/" title="Go Home"><i class="fa fa-home"></i></a>
            
            </div>
        </div>
    );
}

export default FloatingActionButton;