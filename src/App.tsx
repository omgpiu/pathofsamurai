import React from 'react';
import './App.module.css';
import Header from './components/Header/Header';
import Nav from './components/Nav/Nav';
import st from './App.module.css';
import {Route} from 'react-router-dom';
import News from './components/News/News';
import Music from './components/Music/Music';
import Settings from './components/Settings/Settings';
import DialogContainer from './components/Dialogs/DialogsContainer';
import UsersContainer from './components/Users/UsersContainer';
import ProfileContentContainerAPI from './components/Profile/ProfileContentContainerAPI';



function App() {

    return (

        <div className={st.appWrapper}>
            <Header/>
            <Nav/>
            <div className={st.wrapperMainContent}>
                <Route path='/profile/:userId?' render={() =>
                    <ProfileContentContainerAPI />}/>
                <Route path='/dialogs' render={() =>
                    <DialogContainer/>
                }
                />
                <Route path='/users' render={() => <UsersContainer/>}/>
                <Route path={'/news'} component={News}/>
                <Route path={'/music'} component={Music}/>
                <Route path={'/settings'} component={Settings}/>


            </div>


        </div>

    );
}

export default App;
