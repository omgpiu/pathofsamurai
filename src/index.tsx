import React from 'react';
import store from './Rdux/redux-store';
 import {RootStateType} from './Rdux/State'
import ReactDOM from 'react-dom';
import App from './App';
import {BrowserRouter} from 'react-router-dom';



const renderTree = (state: RootStateType) => {

    ReactDOM.render(
        <BrowserRouter>
<Provider store={store}>

</Provider>
            <App  state={state} dispatch={store.dispatch.bind(store)} store={store}/>

        </BrowserRouter>,
        document.getElementById('root')
    );
};


renderTree(store.getState());

store.subscribe(()=>{
    let state = store.getState()
    renderTree(state);
});
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA

