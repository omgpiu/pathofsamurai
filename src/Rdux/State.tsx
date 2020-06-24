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

}
export type ProfileType = {
    postData: Array<PostType>
    addPostCallBack: (postText: string) => void
}
export type MyPostsType = {
    postData: Array<PostType>
    addPostCallBack: (postText: string) => void
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

export const addPost = (postText: string) => {

    const newPost: PostType = {
        id: v1(),
        message: postText,
        likesCount: 0
    };
    state.profilePage.postData.push(newPost);
    renderTree(state);

};



let state: RootStateType = {
    profilePage: {
        postData: [
            {id: v1(), message: 'Hello friendlo friendlo friendlo friendlo friendlo friendlo friendlo friendlo friendlo friendlo friendlo friendlo friend', likesCount: 14},
            {id: v1(), message: 'Hello friend', likesCount: 14},
            {id: v1(), message: 'Hello friend', likesCount: 14},
            {id: v1(), message: 'Hello ', likesCount: 10}],
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