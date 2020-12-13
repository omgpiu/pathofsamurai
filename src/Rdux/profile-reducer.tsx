import {v1} from 'uuid';
import {BaseThunkType, InferActionsTypes, NewProfileType, PhotosType, PostType} from '../Types/Types';
import {usersAPI} from '../API/users-api';
import {profileAPI} from '../API/profile-api';
import {stopSubmit} from 'redux-form';


const ADD_POST = 'ADD-POST';
const SET_USER_PROFILE = 'SET_USER_PROFILE';
const SET_USER_STATUS = 'SET_USER_STATUS';
const DELETE_POST = 'DELETE_POST';
const SAVE_PHOTO_SUCCESS = 'SAVE_PHOTO_SUCCESS';
const SET_NEW_USER_PROFILE = 'SET_NEW_USER_PROFILE';


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
    profile: null as NewProfileType | null,
    status: ''
};
type  InitialStateType = typeof initialState
const profileReducer = (state: InitialStateType = initialState, action: profileActionsType): InitialStateType => {
        switch (action.type) {
            case ADD_POST:
                const newPost: PostType = {
                    id: v1(),
                    message: action.post,
                    likesCount: 0
                };
                return {
                    ...state,
                    postData: [...state.postData, newPost],
                    newPostText: ''
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
                    postData: state.postData.filter(p => p.id !== action.postId)
                };
            case SAVE_PHOTO_SUCCESS:
                return {
                    ...state, profile: {...state.profile, photos: action.photos} as NewProfileType
                };
            default :
                return state;
        }
    }
;


export const getUserProfileTC = (userId: number | null): BaseThunkType => async (dispatch) => {
    const res = await usersAPI.getProfile(userId);
    dispatch(profileActions.setUserProfile(res.data));

};
export const getUserStatusTC = (userId: number | null): BaseThunkType => async (dispatch) => {
    const res = await profileAPI.getStatus(userId);
    dispatch(profileActions.setUserStatus(res.data));

};
export const updateUserStatusTC = (status: string): BaseThunkType => async (dispatch) => {
    const res = await profileAPI.updateStatus(status);
    if (res.data.resultCode === 0) {
        dispatch(profileActions.setUserStatus(status));
    }

};
export const savePhoto = (file: File): BaseThunkType => async (dispatch) => {
    const res = await profileAPI.savePhoto(file);
    if (res.data.resultCode === 0) {
        dispatch(profileActions.savePhotoSucces(res.data.data.photos));
    }
};
export const saveProfile = (formData: any): BaseThunkType => async (dispatch, getState) => {

    const userId = getState().auth.userId;
    const res = await profileAPI.saveProfile(formData);
    if (res.data.resultCode === 0) {
        dispatch(getUserProfileTC(userId));
    } else {
        dispatch(stopSubmit('edit-profile', {_error: res.data.messages[0]}));
        return Promise.reject(res.data.messages[0]);
    }
};
export const profileActions = {
    deletePostAC: (postId: string) => ({
        type: DELETE_POST
        , postId
    } as const),
    savePhotoSucces: (photos: PhotosType) => ({
        type: SAVE_PHOTO_SUCCESS
        , photos
    } as const),
    addPostActionCreator: (post: any) => ({type: ADD_POST, post} as const),
    setUserProfile: (profile: NewProfileType) => ({type: SET_USER_PROFILE, profile} as const),
    setUserStatus: (status: string) => ({
        type: SET_USER_STATUS,
        status
    } as const),
    setNewUserProfile: (newProfile: any) => ({
        type: SET_NEW_USER_PROFILE,
        newProfile
    } as const),


};
export type profileActionsType = InferActionsTypes<typeof profileActions>


export default profileReducer;
