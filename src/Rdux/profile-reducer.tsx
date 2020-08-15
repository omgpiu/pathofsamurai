import React from 'react';
import {v1} from 'uuid';
import {ActionType, PostType} from './State';

const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';

export type AddPostActionCreatorType = {
    type: typeof ADD_POST
}
export type updateNewPostTextActionCreatorType = {
    type: typeof UPDATE_NEW_POST_TEXT
    newText: string
}

let initialState = {
    postData: [
        {
            id: v1(),
            message: 'Hello friendlo friendlo friendlo friendlo friendlo friendlo friendlo friendlo friendlo friendlo friendlo friendlo friend',
            likesCount: 14
        },
        {id: v1(), message: 'Hello friend', likesCount: 14},
        {id: v1(), message: 'Hello friend', likesCount: 14},
        {id: v1(), message: 'Hello ', likesCount: 10},
        {id: v1(), message: 'Hello ', likesCount: 10}],
    newPostText: ''
};
type StateProfile = typeof initialState
const profileReducer = (state: StateProfile = initialState, action: ActionType): StateProfile => {

        switch (action.type) {

            case ADD_POST:
                const newPost: PostType = {
                    id: v1(),
                    message: state.newPostText,
                    likesCount: 0
                };
                return {
                    ...state,
                    postData: [...state.postData, newPost],
                    newPostText: ''

                };


            case
            UPDATE_NEW_POST_TEXT:

                return {
                    ...state,
                    newPostText: action.newText
                };

            default :
                return state;
        }


    }
;
export const addPostActionCreator = (): AddPostActionCreatorType => ({type: ADD_POST});

export const updateNewPostTextActionCreator = (text: string): updateNewPostTextActionCreatorType =>
    ({type: UPDATE_NEW_POST_TEXT, newText: text});
export default profileReducer;