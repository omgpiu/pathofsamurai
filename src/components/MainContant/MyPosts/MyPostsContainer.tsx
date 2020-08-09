import React from 'react';

import {addPostActionCreator, updateNewPostTextActionCreator} from '../../../Rdux/profile-reducer';
import MyPosts from './MyPosts';
import {ActionType, PostType} from '../../../Rdux/State';


export type MyPostsContainerType = {
    postData: Array<PostType>
    newPostText: string
    dispatch: (action: ActionType) => void


}

function MyPostsContainer(props: MyPostsContainerType) {

    const addPost = () => {

        props.dispatch(addPostActionCreator());
    };


    const onPostChange = (text: string) => {


        let action = updateNewPostTextActionCreator(text);
        props.dispatch(action);


    };


    return (<MyPosts updateNewPostText={onPostChange} postData={props.postData} newPostText={props.newPostText} addPost={addPost}/>);


}


export default MyPostsContainer;