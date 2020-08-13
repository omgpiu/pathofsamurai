import React from 'react';
import './App.module.css';
import Header from './components/Header/Header';
import Nav from './components/Nav/Nav';
import st from './App.module.css';
import {Route} from 'react-router-dom';
import Profile from './components/MainContant/ProfileContent';
import News from './components/News/News';
import Music from './components/Music/Music';
import Settings from './components/Settings/Settings';
import {Store} from 'redux';
import {DialogContainer} from './components/Dialogs/DialogsContainer';


export type PropsType = {
    store: Store


}


function App(props: PropsType) {

    return (

        <div className={st.appWrapper}>
            <Header/>
            <Nav/>
            <div className={st.wrapperMainContent}>
                <Route path='/profile' render={() =>
                    <Profile
                        store={props.store}
                    />}/>
                <Route path='/dialogs' render={() =>
                    <DialogContainer store={props.store}/>
                }
                />
                <Route path={'/news'} component={News}/>
                <Route path={'/music'} component={Music}/>
                <Route path={'/settings'} component={Settings}/>


            </div>


        </div>

    );
}

export default App;
