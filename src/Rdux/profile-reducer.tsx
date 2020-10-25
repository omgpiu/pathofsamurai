import {v1} from 'uuid';
import {ActionType, PostType} from './State';
import {Dispatch} from 'react';
import {usersAPI} from '../API/api';
import {toggleFollowingProgress, unfollowUser} from './users-reducer';

const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';
const SET_USER_PROFILE = 'SET_USER_PROFILE';


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
    newPostText: '',
    profile: {
        photos: {
            large: ''
        }
    }
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
            case  SET_USER_PROFILE:
                return {
                    ...state,
                    profile: action.profile
                };
            default :
                return state;
        }
    }
;
export const addPostActionCreator = (): AddPostActionCreatorType => ({type: ADD_POST});
export const setUserProfile = (profile: ProfileType): SetUserProfileType => ({type: SET_USER_PROFILE, profile});
export const updateNewPostTextActionCreator = (text: string): UpdateNewPostTextActionCreatorType =>
    ({type: UPDATE_NEW_POST_TEXT, newText: text});


export const getUserProfileTC = (userId:string) => (dispatch: Dispatch<ActionType>)=>{
    usersAPI.getProfile(+userId).then(res => {
        dispatch(setUserProfile(res.data));
    });

}

export type SetUserProfileType = {
    type: typeof SET_USER_PROFILE
    profile: ProfileType
}
export type AddPostActionCreatorType = {
    type: typeof ADD_POST
}
export type UpdateNewPostTextActionCreatorType = {
    type: typeof UPDATE_NEW_POST_TEXT
    newText: string
}
export type ProfileType = {
    photos: ProfilePhotosType
}
export type ProfilePhotosType = {
    large: string
    small?: string
}


export default profileReducer;