import React from 'react';
import {v1} from 'uuid';
import {DispatchType, PostType} from './State';
const ADD_POST: string = 'ADD-POST';
const UPDATE_NEW_POST_TEXT: string = 'UPDATE-NEW-POST-TEXT';


 const profileReducer = (state: any, action: any) => {

        if (action.type === ADD_POST) {
            const newPost: PostType = {
                id: v1(),
                message: state.newPostText,
                likesCount: 0
            };
            state.postData.push(newPost);
            state.newPostText='';
        } else if (action.type === UPDATE_NEW_POST_TEXT) {
           state.newPostText = action.newText;

        }
    return state;
};
export default profileReducer;