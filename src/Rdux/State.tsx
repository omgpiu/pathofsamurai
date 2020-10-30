import React from 'react';
import {
    AddPostActionCreatorType,
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
    usersPageType
} from './users-reducer';
import {setAuthUserDataType} from './auth-reducer';
import {ThunkAction} from 'redux-thunk';
import {AppRootStateType} from './redux-store';

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

export type ProfilePageType = {
    postData: Array<PostType>
    newPostText: string
    profile: any
    status: string
    isLoggedIn: boolean
}

export type DialogsPageType = {
    messageData: Array<MessageType>
    dialogsData: Array<DialogItemType>
    newMessageText: string
}
export type RootStateType = {
    profilePage: ProfilePageType
    dialogsPage: DialogsPageType
    sidebar: Object
    usersPage: usersPageType
    auth: isAuthType
    isLoggedIn: boolean
}
export type isAuthType = {
    isAuth: boolean
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


const state = () => {
    return (
        <div> hello</div>
    );
};
export default state;