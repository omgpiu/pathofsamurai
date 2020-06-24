import React from 'react';
import '../../App.module.css';
import MyPosts from './MyPosts/MyPosts';
import ProfileInfo from './ProfileInfo/ProfileInfo';
import {ProfileType} from '../../Rdux/State';


function Profile(props: ProfileType) {
    return (
        <div>
            <ProfileInfo/>
            <MyPosts postData={props.postData} addPostCallBack={props.addPostCallBack}/>
        </div>
    );

}


export default Profile;