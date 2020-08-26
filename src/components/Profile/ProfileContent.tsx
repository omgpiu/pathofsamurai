import React from 'react';
import '../../App.module.css';
import ProfileInfo from './ProfileInfo/ProfileInfo';
import MyPostsContainer from './MyPosts/MyPostsContainer';
import {ProfilePropsType, RootProfileType} from './ProfileContentContainerAPI';


function ProfileContent(props:ProfilePropsType) {

    return (
        <div>

            <ProfileInfo profile={props.profile}/>
            <MyPostsContainer/>
        </div>
    );

}


export default ProfileContent;