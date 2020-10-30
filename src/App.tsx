import React from 'react';
import './App.module.css';
import Nav from './components/Nav/Nav';
import st from './App.module.css';
import {Redirect, Route, Switch} from 'react-router-dom';
import News from './components/News/News';
import Music from './components/Music/Music';
import Settings from './components/Settings/Settings';
import DialogContainer from './components/Dialogs/DialogsContainer';
import UsersContainer from './components/Users/UsersContainer';
import ProfileContentContainerAPI from './components/Profile/ProfileContentContainerAPI';
import HeaderContainerAPI from './components/Header/HeaderContainerAPI';
import Login from './components/Login/Login';


function App() {

    return (

        <div className={st.appWrapper}>
            <HeaderContainerAPI/>
            <Nav/>
            <div className={st.wrapperMainContent}>
                <Switch>
                    <Route  path='/profile/:userId?' render={() =>
                        <ProfileContentContainerAPI/>}/>
                    <Route path='/dialogs' render={() =>
                        <DialogContainer/>
                    }
                    />
                    <Route path='/users' render={() => <UsersContainer/>}/>
                    <Route path={'/news'} component={News}/>
                    <Route path={'/music'} component={Music}/>
                    <Route path={'/settings'} component={Settings}/>
                    <Route path={'/login'} component={Login}/>
                    <Route path={'/404'} render={() => <h1>404: PAGE NOT FOUND</h1>}/>
                    <Redirect from={'*'} to={'/404'}/>
                </Switch>
            </div>


        </div>

    );
}

export default App;
