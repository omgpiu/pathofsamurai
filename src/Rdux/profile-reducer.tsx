import React from 'react';
import {v1} from 'uuid';
import {ActionType, PostType} from './State';

const ADD_POST: string = 'ADD-POST';
const UPDATE_NEW_POST_TEXT: string = 'UPDATE-NEW-POST-TEXT';

export type AddPostActionCreatorType = {
    type: typeof ADD_POST
}
export type updateNewPostTextActionCreatorType = {
    type: typeof UPDATE_NEW_POST_TEXT
    newText: string
}

let initialState = {
    postData: [] as Array<PostType>,
    newPostText:''
};

type StateProfile = typeof initialState
const profileReducer = (state: StateProfile = initialState, action: ActionType):StateProfile => {

    switch (action.type) {

        case ADD_POST:
            const newPost: PostType = {
                id: v1(),
                message: state.newPostText,
                likesCount: 0
            };
            state.postData.push(newPost);
            state.newPostText = '';
            return state;

        case UPDATE_NEW_POST_TEXT:
            state.newPostText = action.newText;
            return state;
        default :
            return state;
    }

};
export const addPostActionCreator = (): AddPostActionCreatorType => ({type: ADD_POST});

export const updateNewPostTextActionCreator = (text: string): updateNewPostTextActionCreatorType =>
    ({type: UPDATE_NEW_POST_TEXT, newText: text});
export default profileReducer;