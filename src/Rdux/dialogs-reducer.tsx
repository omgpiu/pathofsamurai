import {v1} from 'uuid';
import {ActionType} from './State';

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
    newMessageText: ''
};
type  InitialStateType = typeof initialState
export const dialogsReducer = (state: InitialStateType = initialState, action: ActionType): InitialStateType => {
    switch (action.type) {
        case UPDATE_NEW_MESSAGE_TEXT:
            return {
                ...state,
                newMessageText: action.dialogMessage
            };
        case SEND_NEW_MESSAGE_TEXT:
            let dialogMessage = state.newMessageText;
            return {
                ...state,
                newMessageText: '',
                messageData: [...state.messageData, {id: v1(), message: dialogMessage}]
            };
        default:
            return state;
    }
};
export const sendMessageCreator = () => ({type: SEND_NEW_MESSAGE_TEXT} as const);
export const updateNewMessageCreator = (text: string) => ({type: UPDATE_NEW_MESSAGE_TEXT, dialogMessage: text} as const);

export type SendMessageCreatorType = ReturnType<typeof sendMessageCreator>
export type UpdateNewMessageBodyCreatorType = ReturnType<typeof updateNewMessageCreator>


export default dialogsReducer;