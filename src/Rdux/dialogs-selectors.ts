import {AppRootStateType} from './redux-store';
import {InitialStateDialogsType} from './dialogs-reducer';

export const getDialogsPage = (state: AppRootStateType): InitialStateDialogsType => {
    return state.dialogsPage
};
