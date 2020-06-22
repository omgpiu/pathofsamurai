import {RootStateType} from './Rdux/State';
import ReactDOM from 'react-dom';
import App from './App';
import React from 'react';

export const renderTree = (state: RootStateType) => {

    ReactDOM.render(<App/>, document.getElementById('root'));
};