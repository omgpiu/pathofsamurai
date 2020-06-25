import React from 'react';
import * as serviceWorker from './serviceWorker';
import {RootStateType} from './Rdux/State';
import ReactDOM from 'react-dom';
import App from './App';
import store from './State2';
import {BrowserRouter} from 'react-router-dom';


const renderTree = (props:RootStateType) => {

    ReactDOM.render(
        <BrowserRouter>

            <App state={}
                 addPost={store.addPost.bind(store)}
                 updateNewPostText={store.updateNewPostText.bind(store)}/>
        </BrowserRouter>
        , document.getElementById('root'));
};


renderTree(store.getState());


store.subscribe(renderTree);
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
