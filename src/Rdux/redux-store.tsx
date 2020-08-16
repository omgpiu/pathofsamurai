import React from 'react';
import {combineReducers, createStore, Store} from 'redux';
import profileReducer from './profile-reducer';
import dialogsReducer from './dialogs-reducer';
import sidebarReducer from './sidebar-reducer';
import usersReducer from './users-reducer';

let reducers = combineReducers({
    profilePage:profileReducer,
    dialogsPage:dialogsReducer,
    sidebar:sidebarReducer,
    users:usersReducer
});
// We have to combaine reducers, it's like our main state


let store: Store =  createStore(reducers);




export default store;