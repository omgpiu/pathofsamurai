import React from 'react';
import './App.module.css';
import Header from './components/Header/Header';
import Nav from './components/Nav/Nav';
import st from './App.module.css';
import {Route} from 'react-router-dom';
import Dialogs from './components/Dialogs/Dialogs';
import Profile from './components/MainContant/ProfileContent';
import News from './components/News/News';
import Music from './components/Music/Music';
import Settings from './components/Settings/Settings';
import {ActionType, RootStateType, StoreType} from './Rdux/State';
import {Store} from 'redux';

export type PropsType = {

    dispatch: (action: ActionType) => void
    store: any
    state?:RootStateType


}


function App(props: PropsType) {
   const state = props.store.getState()
    return (

        <div className={st.appWrapper}>
            <Header/>
            <Nav/>
            <div className={st.wrapperMainContent}>
                <Route path='/profile' render={() =>
                    <Profile

                        profilePage={state.profilePage}
                        dispatch={props.dispatch}

                    />}/>
                <Route path='/dialogs' render={() =>
                    <Dialogs store={props.store}
                             dispatch={props.dispatch}


                    />}/>
                <Route path={'/news'} component={News}/>
                <Route path={'/music'} component={Music}/>
                <Route path={'/settings'} component={Settings}/>


            </div>


        </div>

    );
}

export default App;
