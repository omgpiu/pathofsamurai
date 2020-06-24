import {v1} from 'uuid';
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
    newPostText: string
}
export type ProfileType = {
    postData: Array<PostType>
    addPostCallBack: () => void
    newPostText: string
    updateNewPostText: (newText:string)=>void
}
export type MyPostsType = {
    postData: Array<PostType>
    addPostCallBack: () => void
    newPostText: string
    updateNewPostText: (newText:string)=>void

}

export type DialogPageType = {
    messageData: Array<MessageType>
    dialogsData: Array<DialogItemType>

}


export type RootStateType = {
    profilePage: ProfilePageType
    dialogsPage: DialogPageType
    sidebar: Object
}

export const addPost = () => {

    const newPost: PostType = {
        id: v1(),
        message: state.profilePage.newPostText,
        likesCount: 0
    };
    state.profilePage.postData.push(newPost);
    updateNewPostText('');
    renderTree(state);

};


export const updateNewPostText = (newText:string) => {
    state.profilePage.newPostText = newText;

    renderTree(state);
}










const state: RootStateType = {
    profilePage: {
        postData: [
            {id: v1(), message: 'Hello friendlo friendlo friendlo friendlo friendlo friendlo friendlo friendlo friendlo friendlo friendlo friendlo friend', likesCount: 14},
            {id: v1(), message: 'Hello friend', likesCount: 14},
            {id: v1(), message: 'Hello friend', likesCount: 14},
            {id: v1(), message: 'Hello ', likesCount: 10},
            {id: v1(), message: 'Hello ', likesCount: 10}],
        newPostText: ''
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
    },
    sidebar: {}
};


export default state;