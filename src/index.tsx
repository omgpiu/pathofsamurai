import React from 'react';

import * as serviceWorker from './serviceWorker';
import store , {RootStateType, subscribe} from './Rdux/State';

import ReactDOM from "react-dom";
import App from "./App";




 const renderTree = (state: RootStateType) => {

    ReactDOM.render(<App _state={state}/>, document.getElementById('root'));
};



renderTree(state);


subscribe(renderTree);
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
