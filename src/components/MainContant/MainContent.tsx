import React from 'react';
import '../../App.module.css';
import MyPosts from "./MyPosts/MyPosts";
import ProfileInfo from "./ProfileInfo/ProfileInfo";

function MainContent() {
    return (
        <div>
            <ProfileInfo/>
            <MyPosts/>


        </div>
    )

}


export default MainContent;