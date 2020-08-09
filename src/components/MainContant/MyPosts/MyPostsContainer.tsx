import React from 'react';

import {addPostActionCreator, updateNewPostTextActionCreator} from '../../../Rdux/profile-reducer';
import MyPosts from './MyPosts';
import {ActionType} from '../../../Rdux/State';
import {Store} from 'redux';


export type ContainersType = {

    store: Store
}

function MyPostsContainer(props: ContainersType) {
    debugger
    let state = props.store.getState();


    const addPost = () => {
        props.store.dispatch(addPostActionCreator());
    };

    const onPostChange = (text: string) => {
        let action = updateNewPostTextActionCreator(text);
        props.store.dispatch(action);
    };


    return (<MyPosts
        updateNewPostText={onPostChange}
        addPost={addPost}
        postData={state.profilePage.postData}
        newPostText={state.profilePage.newPostText}
    />);


}


export default MyPostsContainer;