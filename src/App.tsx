import React from 'react';
import './App.module.css';
import Header from './components/Header/Header';
import Nav from './components/Nav/Nav';
import st from './App.module.css';
import { Route} from 'react-router-dom';
import Dialogs from './components/Dialogs/Dialogs';
import Profile from './components/MainContant/ProfileContent';
import News from './components/News/News';
import Music from './components/Music/Music';
import Settings from './components/Settings/Settings';
import {ActionType,  StoreType} from './Rdux/State';

export type PropsType = {
    store: StoreType
    dispatch: (action: ActionType) => void


}


function App(props:PropsType) {
    return (

            <div className={st.appWrapper}>
                <Header/>
                <Nav/>
                <div className={st.wrapperMainContent}>
                    <Route path='/profile' render={() =>
                        <Profile
                            profilePage={props.store._state.profilePage}
                        dispatch={props.dispatch}

                    />}/>
                    <Route path='/dialogs' render={() => <Dialogs store={props.store}
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
