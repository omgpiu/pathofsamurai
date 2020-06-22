
import {v1} from 'uuid';
import {render} from 'react-dom';
import {renderTree} from '../Render';

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
}
export type DialogPageType = {
    messageData: Array<MessageType>
    dialogsData: Array<DialogItemType>
}


export type RootStateType = {
    profilePage: ProfilePageType
    dialogsPage: DialogPageType
}


export let state:RootStateType = {
    profilePage: {
        postData: [
            {id: v1(), message: 'Hello man', likesCount: 12},
            {id: v1(), message: 'Hello woman', likesCount: 10}]
    },
    dialogsPage: {
        messageData: [
            {id: v1(), message: 'Hello'},
            {id: v1(), message: 'My name'},
            {id: v1(), message: 'My name is'},
            {id: v1(), message: 'My name is Sasha'}
        ],
        dialogsData: [
            {id: v1(), name: 'Artem'},
            {id: v1(), name: 'Vova'},
            {id: v1(), name: 'Dima'},
            {id: v1(), name: 'Masha'},
            {id: v1(), name: 'Egor'}
        ]
    }
};
renderTree(state);
export default state;