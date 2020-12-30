import {v1} from 'uuid';
import {InferActionsTypes} from '../Types/Types';


let initialState = {
    messageData: [
        {id: v1(), message: 'Hello'},
        {id: v1(), message: 'My name'},
        {id: v1(), message: 'My name is'},
        {id: v1(), message: 'My name is Sasha'}
    ] as Array<messageDataType>,
    dialogsData: [
        {id: v1(), name: 'Artem'},
        {id: v1(), name: 'Vova'},
        {id: v1(), name: 'Dima'},
        {id: v1(), name: 'Masha'},
        {id: v1(), name: 'Egor'}
    ] as Array<dialogsDataType>
};

export const dialogsReducer = (state: InitialStateType = initialState, action: ActionsType): InitialStateType => {
    switch (action.type) {
        case 'DIALOGS/SEND-NEW-MESSAGE-TEXT':
            return {
                ...state,
                messageData: [...state.messageData, {id: v1(), message: action.newMessageBody}],
            };
        default:
            return state;
    }
};
export const dialogsActions = {
    sendMessage: (newMessageBody: string) => ({type: 'DIALOGS/SEND-NEW-MESSAGE-TEXT', newMessageBody} as const),
};


export type  InitialStateType = typeof initialState
export type ActionsType = InferActionsTypes<typeof dialogsActions>
type messageDataType = {
    id: string
    message: string
}
type dialogsDataType = {
    id: string
    name: string
}

export default dialogsReducer;
