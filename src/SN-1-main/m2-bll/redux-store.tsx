import {applyMiddleware, combineReducers, createStore, Store} from 'redux';

import thunkMiddleware from 'redux-thunk';
import appReducer from './app-reducer';
import {composeWithDevTools} from 'redux-devtools-extension';
import {reducer as formReducer} from 'redux-form'
import profileReducer from '../../SN-2-features/f2-profile/p2-bll/profile-reducer';
import dialogsReducer from '../../SN-2-features/f3-dialogs/d2-bll/dialogs-reducer';
import usersReducer from '../../SN-2-features/f4-users/u2-bll/users-reducer';
import authReducer from '../../SN-2-features/f1-login/l2-bll/auth-reducer';
import chatReducer from '../../SN-2-features/f5-chat/c2-bll/chat-reducer';

const reducers = combineReducers({
    profilePage: profileReducer,
    dialogsPage: dialogsReducer,
    usersPage: usersReducer,
    auth: authReducer,
    app:appReducer,
    form: formReducer,
    chat:chatReducer
});
// We have to combine reducers, it's like our SN-1-main state


let store: Store = createStore(reducers, composeWithDevTools(applyMiddleware(thunkMiddleware)));
export type AppRootStateType = ReturnType<typeof reducers>
// @ts-ignore
window.store = store;

export default store;
