import React from 'react';
import '../../App.module.css';
import MyPosts from './MyPosts/MyPosts';
import ProfileInfo from './ProfileInfo/ProfileInfo';
import {ProfileType} from '../../Rdux/State';


function Profile(props: ProfileType) {
    return (
        <div>
            <ProfileInfo/>
            <MyPosts postData={props.myPosts.postData}
                     addPostCallBack={props.myPosts.addPostCallBack}
                     newPostText={props.myPosts.newPostText}
                     updateNewPostText={props.myPosts.updateNewPostText}/>
        </div>
    );

}


export default Profile;