import React from 'react';
import {
    AddPostActionCreatorType,
    deletePostActionCreatorType,
    SavePhotoSuccessType,
    SetUserProfileType,
    SetUserStatusTypeAC,
    UpdateNewPostTextActionCreatorType,
} from './profile-reducer';
import {SendMessageCreatorType, UpdateNewMessageBodyCreatorType} from './dialogs-reducer';
import {
    followACType,
    isFetchingTypeAC,
    isFollowingProgressAC,
    setPageACType,
    setTotalUsersCountACType,
    setUsersACType,
    unfollowACType,
} from './users-reducer';
import {confirmUserDataType, setAuthUserDataType} from './auth-reducer';
import {ThunkAction} from 'redux-thunk';
import {AppRootStateType} from './redux-store';
import {setInitializedType} from './app-reducer';

export type PostDataArray = {
    id: string
    message: string
    like: number
}
export type ContactsType = {
    facebook: string
    website: string
    vk: string
    twitter: string
    instagram: string
    youtube: string
    github: string
    mainLink: string
}
export type PhotosType = {
    small: string | null
    large: string | null
}
export type NewProfileType = {
    userId: number
    lookingForAJob: boolean
    lookingForAJobDescription: string
    aboutMe: string
    fullName: string
    contacts: ContactsType
    photos: PhotosType
}

export type userType = {
    id: number
    name: string
    location: locationUsersType
    status: string
    followed: boolean
    photoUrl: string
    photos: PhotosType
}

export type locationUsersType = {
    country: string
    city: string
}
export type DialogItemType = {
    name: string
    id: string
}
export type MessageType = {
    message: string
    id: string
}
export type PostType = {
    id: string
    message: string
    likesCount: number
}

export type DialogsPageType = {
    messageData: Array<MessageType>
    dialogsData: Array<DialogItemType>
    newMessageText: string
}

export type isAuthType = {
    isAuth: boolean
}

//API types
export type ResponseType<D = {}> = {
    resultCode: number
    messages: Array<string>
    data: D
}
export type LoginParamsType = {
    email?: string|undefined
    password?: string|undefined
    rememberMe?: boolean | undefined
    captcha?: string
}


export type ThunkType = ThunkAction<void, AppRootStateType, unknown, ActionType>

export type ActionType =
    AddPostActionCreatorType
    | UpdateNewPostTextActionCreatorType
    | SendMessageCreatorType
    | UpdateNewMessageBodyCreatorType
    | followACType
    | unfollowACType
    | setUsersACType
    | setPageACType
    | setTotalUsersCountACType
    | isFetchingTypeAC
    | SetUserProfileType
    | setAuthUserDataType
    | isFollowingProgressAC
    | SetUserStatusTypeAC
    | setInitializedType
    | confirmUserDataType
    | deletePostActionCreatorType
    | SavePhotoSuccessType


