import React from 'react';
import './App.module.css';
import Nav from './components/Nav/Nav';
import st from './App.module.css';
import {Route} from 'react-router-dom';
import News from './components/News/News';
import Music from './components/Music/Music';
import Settings from './components/Settings/Settings';
import DialogContainer from './components/Dialogs/DialogsContainer';
import UsersContainer from './components/Users/UsersContainer';
import ProfileContentContainerAPI from './components/Profile/ProfileContentContainerAPI';
import HeaderContainerAPI from './components/Header/HeaderContainerAPI';


function App() {

    return (

        <div className={st.appWrapper}>
            <HeaderContainerAPI/>
            <Nav/>
            <div className={st.wrapperMainContent}>
                <Route path='/profile/:userId?' render={() =>
                    <ProfileContentContainerAPI/>}/>
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
