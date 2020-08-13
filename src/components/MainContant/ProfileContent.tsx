import React from 'react';
import '../../App.module.css';
import ProfileInfo from './ProfileInfo/ProfileInfo';
import MyPostsContainer from './MyPosts/MyPostsContainer';
import {MyPostsTypeOne} from './MyPosts/MyPosts';
import {ActionType} from '../../Rdux/State';



function Profile() {
    return (
        <div>
            <ProfileInfo/>
            <MyPostsContainer/>
        </div>
    );

}


export default Profile;