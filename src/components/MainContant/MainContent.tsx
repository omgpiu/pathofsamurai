import React from 'react';
import '../../App.module.css';
import MyPosts from './MyPosts/MyPosts';
import ProfileInfo from './ProfileInfo/ProfileInfo';
import {ProfilePageType} from '../../Rdux/State';



function Profile(props: ProfilePageType) {
    return (
        <div>
            <ProfileInfo/>
            <MyPosts postData={props.postData}/>


        </div>
    );

}


export default Profile;