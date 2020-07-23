import React from 'react';
import {v1} from 'uuid';

const UPDATE_NEW_MESSAGE_TEXT: string = 'UPDATE-NEW-MESSAGE-TEXT';
const SEND_NEW_MESSAGE_TEXT: string = 'SEND-NEW-MESSAGE-TEXT';


export const dialogsReducer = (state: any, action: any) => {


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

    return state;

};
export const sendMessageCreator = () => ({type: SEND_NEW_MESSAGE_TEXT});

export const updateNewMessageCreator = (text: string) =>
    ({type: UPDATE_NEW_MESSAGE_TEXT, dialogMessage: text});
export default dialogsReducer;