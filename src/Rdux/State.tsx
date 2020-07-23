import {v1} from 'uuid';
import profileReducer, {AddPostActionCreatorType, ChangeNewTextActionCreatorType} from './profile-reducer';
import dialogsReducer, {SendMessageCreatorType, UpdateNewMessageBodyCreatorType} from './dialogs-reducer';
import sidebarReducer from './sidebar-reducer';

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
}

export type ActionType = AddPostActionCreatorType | ChangeNewTextActionCreatorType
    |  SendMessageCreatorType | UpdateNewMessageBodyCreatorType

export type StoreType = {
    _state: RootStateType
    _callSubscriber: (state: RootStateType)=> void
    getState: () => RootStateType
    subscribe: (observer: (state:RootStateType) => void) => void
    dispatch: (action: ActionType) => void

}




let store:StoreType = {
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
            newMessageText: ''
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
    dispatch(action: ActionType) {
        this._state.profilePage = profileReducer(this._state.profilePage, action);
        this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action);
        // this._state.sidebar = sidebarReducer(this._state.sidebar, action);
        this._callSubscriber(this._state);
    }
};


export default store;