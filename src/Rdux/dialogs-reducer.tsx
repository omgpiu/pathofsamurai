import {v1} from 'uuid';
import {InferActionsTypes} from '../Types/Types';

const UPDATE_NEW_MESSAGE_TEXT = 'UPDATE-NEW-MESSAGE-TEXT';
const SEND_NEW_MESSAGE_TEXT = 'SEND-NEW-MESSAGE-TEXT';


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
    newMessageBody: ''
};
type  InitialStateType = typeof initialState
export const dialogsReducer = (state: InitialStateType = initialState, action: dialogsActionsType): InitialStateType => {
    switch (action.type) {
        case UPDATE_NEW_MESSAGE_TEXT:
            return {
                ...state,
                newMessageBody: action.dialogMessage
            };
        case SEND_NEW_MESSAGE_TEXT:

            return {
                ...state,
                newMessageBody: '',
                messageData: [...state.messageData, {id: v1(), message: action.newMessageBody}]
            };
        default:
            return state;
    }
};

export const dialogsActions = {
    sendMessageCreator: (newMessageBody:any) => ({type: SEND_NEW_MESSAGE_TEXT,newMessageBody} as const),
    updateNewMessageCreator: (text: string) => ({type: UPDATE_NEW_MESSAGE_TEXT, dialogMessage: text} as const)

};
export type dialogsActionsType = InferActionsTypes<typeof dialogsActions>


export default dialogsReducer;
