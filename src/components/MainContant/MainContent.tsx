import React from 'react';
import '../../App.module.css';
import MyPosts from "./MyPosts/MyPosts";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import {v1} from "uuid";




function Profile() {
    return (
        <div>
            <ProfileInfo/>
            <MyPosts postData={postData} />


        </div>
    )

}


export default Profile;