import {v1} from 'uuid';
import {BaseThunkType, InferActionsTypes, NewProfileType, PhotosType, PostType} from '../Types/Types';
import {profileAPI} from '../API/profile-api';
import {FormAction, stopSubmit} from 'redux-form';
import {ResultCodesEnum} from '../API/api-types';


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
    profile: null as NewProfileType | null,
    status: ''
};

const profileReducer = (state: InitialStateType = initialState, action: ActionsType): InitialStateType => {
    switch (action.type) {
        case 'PROFILE/ADD_POST':
            const newPost: PostType = {
                id: v1(),
                message: action.post,
                likesCount: 0
            };
            return {
                ...state,
                postData: [...state.postData, newPost],
            };
        case  'PROFILE/SET_USER_PROFILE':
            return {
                ...state,
                profile: action.profile
            };
        case 'PROFILE/SET_USER_STATUS':
            return {
                ...state,
                status: action.status
            };
        case 'PROFILE/DELETE_POST':
            return {
                ...state,
                postData: state.postData.filter(p => p.id !== action.postId)
            };
        case 'PROFILE/SAVE_PHOTO_SUCCESS':
            return {
                ...state, profile: {...state.profile, photos: action.photos} as NewProfileType
            };
        default :
            return state;
    }

};
export const getUserProfile = (userId: number | null): ThunkType => async (dispatch) => {
    try {
        const profileData = await profileAPI.getProfile(userId);
        dispatch(profileActions.setUserProfile(profileData));
    } catch (e) {
        console.log('Some error with getUserProfileTC');
    }


};
export const getUserStatus = (userId: number | null): ThunkType => async (dispatch) => {
    try {
        const statusData = await profileAPI.getStatus(userId);
        dispatch(profileActions.setUserStatus(statusData));
    } catch (e) {
        console.log('Some error with getUserStatusTC');
    }

};
export const updateUserStatus = (status: string): ThunkType => async (dispatch) => {
    try {
        const statusData = await profileAPI.updateStatus(status);
        if (statusData.resultCode === ResultCodesEnum.Success) {
            dispatch(profileActions.setUserStatus(status));
        }
    } catch (e) {
        console.log('Some error with updateUserStatusTC');
    }
};
export const savePhoto = (file: File): ThunkType => async (dispatch) => {
    try {
        const photoData = await profileAPI.savePhoto(file);
        if (photoData.resultCode === 0) {
            dispatch(profileActions.savePhotoSucces(photoData.data.photos));
        }
    } catch (e) {
        console.log('Some error with savePhoto');
    }

};
export const saveProfile = (formData: NewProfileType): ThunkType => async (dispatch, getState) => {
    try {
        const userId = getState().auth.userId;
        const saveProfile = await profileAPI.saveProfile(formData);
        if (saveProfile.resultCode === ResultCodesEnum.Success) {
            await dispatch(getUserProfile(userId));
        } else {
            dispatch(stopSubmit('edit-profile', {_error: saveProfile.messages[0]}));
            return Promise.reject(saveProfile.messages[0]);
        }
    } catch (e) {
        console.log('Some error with saveProfile');
    }

};
export const profileActions = {
    deletePostAC: (postId: string) => ({
        type: 'PROFILE/DELETE_POST'
        , postId
    } as const),
    savePhotoSucces: (photos: PhotosType) => ({
        type: 'PROFILE/SAVE_PHOTO_SUCCESS'
        , photos
    } as const),
    addPostAC: (post: string) => ({type: 'PROFILE/ADD_POST', post} as const),
    setUserProfile: (profile: NewProfileType) => ({type: 'PROFILE/SET_USER_PROFILE', profile} as const),
    setUserStatus: (status: string) => ({
        type: 'PROFILE/SET_USER_STATUS',
        status
    } as const),

};

export type  InitialStateType = typeof initialState
export type ActionsType = InferActionsTypes<typeof profileActions>
type ThunkType = BaseThunkType<ActionsType | FormAction>


export default profileReducer;
