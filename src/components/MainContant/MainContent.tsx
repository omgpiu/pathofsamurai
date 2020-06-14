import React from 'react';
import '../../App.module.css';
import photo2 from "../../photo/photo2.jpeg";
import logo2 from "../../photo/logo2.png";
import sta from './MainContent.module.css'
import MyPosts from "./MyPosts/MyPosts";

function MainContent() {
    return (
        <div>

            <div className= {sta.thisPhoto}><img src={photo2} alt="bigPhoto"/></div>
            <div className= {sta.thisLogo}>><img src={logo2} alt="Avatar"/></div>
        <MyPosts/>


        </div>
    )

}


export default MainContent;