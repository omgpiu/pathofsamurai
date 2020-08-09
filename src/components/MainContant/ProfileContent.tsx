import React from 'react';
import '../../App.module.css';
import MyPosts from './MyPosts/MyPosts';
import ProfileInfo from './ProfileInfo/ProfileInfo';
import {ActionType, ProfilePageType} from '../../Rdux/State';
import MyPostsContainer from './MyPosts/MyPostsContainer';

type PropType = {
    profilePage: ProfilePageType
    dispatch: (action: ActionType) => void


}

function Profile(props: PropType) {
    return (
        <div>
            <ProfileInfo/>
            {/*<MyPosts postData={props.profilePage.postData}*/}
            {/*         // dispatch={props.dispatch}*/}
            {/*         newPostText={props.profilePage.newPostText}*/}
            <MyPostsContainer dispatch={props.dispatch}  newPostText={props.profilePage.newPostText} postData={props.profilePage.postData}/>
            />

        </div>
    );

}


export default Profile;