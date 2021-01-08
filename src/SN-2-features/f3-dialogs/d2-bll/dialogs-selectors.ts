import {InitialStateDialogsType} from './dialogs-reducer';
import {AppRootStateType} from '../../../SN-1-main/m2-bll/redux-store';

export const getDialogsPage = (state: AppRootStateType): InitialStateDialogsType => {
    return state.dialogsPage
};
