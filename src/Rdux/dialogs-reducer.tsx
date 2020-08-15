import React from 'react';
import {v1} from 'uuid';
import {ActionType} from './State';

const UPDATE_NEW_MESSAGE_TEXT = 'UPDATE-NEW-MESSAGE-TEXT';
const SEND_NEW_MESSAGE_TEXT = 'SEND-NEW-MESSAGE-TEXT';

export type UpdateNewMessageBodyCreatorType = {
    type: typeof UPDATE_NEW_MESSAGE_TEXT
    dialogMessage: string
}
export  type SendMessageCreatorType = {
    type: typeof SEND_NEW_MESSAGE_TEXT
}

let initialState = {

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
}
type StateDialogs = typeof initialState

export const dialogsReducer = (state: StateDialogs = initialState, action: ActionType):StateDialogs => {
debugger

    switch (action.type) {
        case UPDATE_NEW_MESSAGE_TEXT:{
            let stateCopy = {...state};
            stateCopy.newMessageText = action.dialogMessage;
            return stateCopy;}

        case SEND_NEW_MESSAGE_TEXT:{
            let stateCopy = {...state};
            let dialogMessage = stateCopy.newMessageText;
            stateCopy.newMessageText = '';

            stateCopy.messageData.push({id: v1(), message: dialogMessage});
            return stateCopy;}
        default:
            return state;

    }


};
export const sendMessageCreator = ():SendMessageCreatorType => ({type: SEND_NEW_MESSAGE_TEXT});

export const updateNewMessageCreator = (text: string):UpdateNewMessageBodyCreatorType =>
    ({type: UPDATE_NEW_MESSAGE_TEXT, dialogMessage: text});
export default dialogsReducer;