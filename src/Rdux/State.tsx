import React from 'react';
import {AddPostActionCreatorType, updateNewPostTextActionCreatorType,} from './profile-reducer';
import {SendMessageCreatorType, UpdateNewMessageBodyCreatorType} from './dialogs-reducer';
import {
    followACType,
    setPageACType,
    setTotalUsersCountACType,
    setUsersACType,
    unfollowACType,
    usersPageType
} from './users-reducer';

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

}

export type ActionType =
    AddPostActionCreatorType
    | updateNewPostTextActionCreatorType
    | SendMessageCreatorType
    | UpdateNewMessageBodyCreatorType
    | followACType
    | unfollowACType
    | setUsersACType
    | setPageACType
    | setTotalUsersCountACType



const state = () => {
    return (
        <div> hello</div>
    );
};
export default state;