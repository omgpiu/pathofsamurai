import React from 'react';
import {v1} from 'uuid';
import profileReducer from './profile-reducer';

const UPDATE_NEW_MESSAGE_TEXT: string = 'UPDATE-NEW-MESSAGE-TEXT';
const SEND_NEW_MESSAGE_TEXT: string = 'SEND-NEW-MESSAGE-TEXT';


export const dialogsReducer = (state: any, action: any) => {


    if (action.type === UPDATE_NEW_MESSAGE_TEXT) {
        state.newMessageText = action.dialogMessage;


    } else if (action.type === SEND_NEW_MESSAGE_TEXT) {
        let dialogMessage = state.newMessageText;
        state.newMessageText = '';
        state.messageData.push({id: v1(), message: dialogMessage});


    }

    return state;
};
export default dialogsReducer;