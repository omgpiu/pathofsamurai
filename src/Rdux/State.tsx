import {v1} from 'uuid';

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

export type MyProfileType = {
    postData: Array<PostType>
    newPostText: string
    dispatch: (action: DispatchType) => void


}
export type DialogsPageType = {
    messageData: Array<MessageType>
    dialogsData: Array<DialogItemType>
    newMessageText:string

}

export type RootStateType = {
    profilePage: ProfilePageType
    dialogsPage: DialogsPageType
    sidebar: Object
    dispatch: (action: DispatchType) => void
}

export type DispatchType = {
    newText?: string
    type?: string
    dialogMessage?: string
}

const ADD_POST: string = 'ADD-POST';
const UPDATE_NEW_POST_TEXT: string = 'UPDATE-NEW-POST-TEXT';
const UPDATE_NEW_MESSAGE_TEXT:string = 'UPDATE-NEW-MESSAGE-TEXT;'
const SEND_NEW_MESSAGE_TEXT:string = 'SEND-NEW-MESSAGE-TEXT;'


let store = {
    _state: {
        profilePage: {
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
            ],
            newMessageText:""
        },
        sidebar: {}
    },
    _callSubscriber(state: RootStateType) {
        console.log('state has changed');
    },
    getState() {

        return this._state;
    },
    subscribe(observer: (state: RootStateType) => void) {
        this._callSubscriber = observer;
    },
    dispatch(action: DispatchType) {
        if (action.type === ADD_POST) {
            const newPost: PostType = {
                id: v1(),
                message: this._state.profilePage.newPostText,
                likesCount: 0
            };
            this._state.profilePage.postData.push(newPost);
            this.updateNewPostText('');
            this._callSubscriber(this._state);
        } else if (action.type === UPDATE_NEW_POST_TEXT) {
            this._state.profilePage.newPostText = action.newText;
            this._callSubscriber(this._state);
        } else if (action.type === UPDATE_NEW_MESSAGE_TEXT){
            this._state.dialogsPage.newMessageText =action.dialogMessage;
            this._callSubscriber(this._state);
        } else if (action.type === SEND_NEW_MESSAGE_TEXT){
           let dialogMessage =  this._state.dialogsPage.newMessageText;
            this._state.dialogsPage.newMessageText = '';
            this._state.dialogsPage.messageData.push({id:v1(),message: dialogMessage})
            this._callSubscriber(this._state);

        }

    }
};
export const addPostActionCreator = () => ({type: ADD_POST})

export const updateNewPostTextActionCreator = (text: string) =>
    ({type: UPDATE_NEW_POST_TEXT, newText: text})

export const sendMessageCreator = ()=> ({type:SEND_NEW_MESSAGE_TEXT})

export const updateNewMessageCreator = (text: string) =>
    ({type: UPDATE_NEW_MESSAGE_TEXT, dialogMessage: text})





export default store;