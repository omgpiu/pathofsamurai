import React from 'react';

import {addPostActionCreator, updateNewPostTextActionCreator} from '../../../Rdux/profile-reducer';
import MyPosts, {MyPostsTypeOne} from './MyPosts';
import {ActionType, ProfilePageType, RootStateType} from '../../../Rdux/State';
import {Store} from 'redux';
import Dialogs, {DialogsPropType} from '../../Dialogs/Dialogs';
import {sendMessageCreator, updateNewMessageCreator} from '../../../Rdux/dialogs-reducer';
import {connect} from 'react-redux';


let mapStateToProps=(state:RootStateType)=>{
    return {
        postData:state.profilePage.postData,
        newPostText:state.profilePage.newPostText
    }
}
let mapDispatchToProps =(dispatch: (action: ActionType) => void)=>{
    return{
        updateNewPostText:(text: string)=>{
            dispatch(updateNewPostTextActionCreator(text));},
        addPost:()=>{
            dispatch(addPostActionCreator())},
    }

}


 const MyPostsContainer =connect(mapStateToProps,mapDispatchToProps)(MyPosts);


export default MyPostsContainer;