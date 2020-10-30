import {applyMiddleware, combineReducers, createStore, Store} from 'redux';
import profileReducer from './profile-reducer';
import dialogsReducer from './dialogs-reducer';
import sidebarReducer from './sidebar-reducer';
import usersReducer from './users-reducer';
import authReducer from './auth-reducer';
import thunkMiddleware from 'redux-thunk';

const reducers = combineReducers({
    profilePage: profileReducer,
    dialogsPage: dialogsReducer,
    sidebar: sidebarReducer,
    usersPage: usersReducer,
    auth: authReducer,
});
// We have to combine reducers, it's like our main state


let store: Store = createStore(reducers, applyMiddleware(thunkMiddleware));
export type AppRootStateType = ReturnType<typeof reducers>
// @ts-ignore
window.store = store;

export default store;