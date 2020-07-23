import React from 'react';
import {v1} from 'uuid';
import {ActionType} from './State';

const UPDATE_NEW_MESSAGE_TEXT: string = 'UPDATE-NEW-MESSAGE-TEXT';
const SEND_NEW_MESSAGE_TEXT: string = 'SEND-NEW-MESSAGE-TEXT';

export type UpdateNewMessageBodyCreatorType = {
    type: typeof UPDATE_NEW_MESSAGE_TEXT
    dialogMessage: string
}
export  type SendMessageCreatorType = {
    type: typeof SEND_NEW_MESSAGE_TEXT
}

let initialState = {

}
type StateDialogs = typeof initialState

export const dialogsReducer = (state: StateDialogs = initialState, action: ActionType) => {


    switch (action.type) {
        case UPDATE_NEW_MESSAGE_TEXT:
            state.newMessageText = action.dialogMessage;
            return state;

        case SEND_NEW_MESSAGE_TEXT:
            (action.type);
            let dialogMessage = state.newMessageText;
            state.newMessageText = '';
            state.messageData.push({id: v1(), message: dialogMessage});
            return state;
        default:
            return state;

    }


};
export const sendMessageCreator = ():SendMessageCreatorType => ({type: SEND_NEW_MESSAGE_TEXT});

export const updateNewMessageCreator = (text: string):UpdateNewMessageBodyCreatorType =>
    ({type: UPDATE_NEW_MESSAGE_TEXT, dialogMessage: text});
export default dialogsReducer;