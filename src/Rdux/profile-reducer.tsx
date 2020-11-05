import {v1} from 'uuid';
import {ActionType, PostType} from './Types';
import {Dispatch} from 'react';
import {usersAPI} from '../API/users-api';
import {profileAPI} from '../API/profile-api';






const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';
const SET_USER_PROFILE = 'SET_USER_PROFILE';
const SET_USER_STATUS = 'SET_USER_STATUS';
const DELETE_POST = 'DELETE_POST'


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
    //profile : null as profiletype | null
    profile: {
        photos: {
            large: ''
        }
    },
    status: ''
};
type  InitialStateType = typeof initialState
const profileReducer = (state: InitialStateType = initialState, action: ActionType): InitialStateType => {
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
                    newPostText: action.text
                };
            case  SET_USER_PROFILE:
                return {
                    ...state,
                    profile: action.profile
                };
            case SET_USER_STATUS:
                return {
                    ...state,
                    status: action.status
                };
            case DELETE_POST:
                return {
                    ...state,
                    postData: state.postData.filter(p=>p.id != action.postId)
                };
            default :
                return state;
        }
    }
;

export const deletePostAC = (postId:string)=>({
    type:DELETE_POST
, postId} as const )
export const addPostActionCreator = () => ({type: ADD_POST} as const);
export const setUserProfile = (profile: ProfileType) => ({type: SET_USER_PROFILE, profile} as const);
export const updateNewPostTextActionCreator = (text: string) =>
    ({type: UPDATE_NEW_POST_TEXT, text} as const);
export const setUserStatus = (status: string) => ({
    type: SET_USER_STATUS,
    status
} as const);
export const getUserProfileTC = (userId: number|null) => (dispatch: Dispatch<ActionType>) => {
    usersAPI.getProfile(userId).then(res => {
        dispatch(setUserProfile(res.data));
    });
};
export const getUserStatusTC = (userId: number|null) => (dispatch: Dispatch<ActionType>) => {
    profileAPI.getStatus(userId).then(res => {
        dispatch(setUserStatus(res.data));
    });
};
export const updateUserStatusTC = (status: string) => (dispatch: Dispatch<ActionType>) => {
    profileAPI.updateStatus(status).then(res => {
        if (res.data.resultCode === 0) {
            dispatch(setUserStatus(status));
        }
    });
};

export type SetUserProfileType = ReturnType<typeof setUserProfile>
export type SetUserStatusTypeAC = ReturnType<typeof setUserStatus>
export type AddPostActionCreatorType = ReturnType<typeof addPostActionCreator>
export type UpdateNewPostTextActionCreatorType = ReturnType<typeof updateNewPostTextActionCreator>
export type deletePostActionCreatorType = ReturnType<typeof deletePostAC>

export type ProfileType = {
    photos: ProfilePhotosType
}
export type ProfilePhotosType = {
    large: string
    small?: string
}


export default profileReducer;