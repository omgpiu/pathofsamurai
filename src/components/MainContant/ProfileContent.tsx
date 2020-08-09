import React from 'react';
import '../../App.module.css';
import MyPosts from './MyPosts/MyPosts';
import ProfileInfo from './ProfileInfo/ProfileInfo';
import {ActionType, ProfilePageType} from '../../Rdux/State';
import MyPostsContainer from './MyPosts/MyPostsContainer';
import {Store} from 'redux';

type PropType = {

    store: Store


}

function Profile(props: PropType) {
    return (
        <div>
            <ProfileInfo/>

            <MyPostsContainer
                           store={props.store}
            />
            />

        </div>
    );

}


export default Profile;