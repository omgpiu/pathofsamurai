import React from 'react';
import './App.module.css';
import Header from "./components/Header/Header";
import Nav from "./components/Nav/Nav";
import st from './App.module.css'
import Dialogs from "./components/Dialogs/Dialogs";
import {BrowserRouter, Route} from 'react-router-dom';
import Profile from '../src/components/MainContant/MainContent'
import Settings from "./components/Settings/Settings";
import Music from "./components/Music/Music";
import News from "./components/News/News";

function App() {
    return (<BrowserRouter>

        <div className={st.appWrapper}>
            <Header/>
            <Nav/>
            <div className={st.wrapperMainContent}>


                <Route path={'/profile'} component={Profile}/>
                <Route path={'/dialogs'} component={Dialogs}/>
                <Route path={'/news'} component={News}/>
                <Route path={'/music'} component={Music}/>
                <Route path={'/settings'} component={Settings}/>


            </div>


        </div>
    </BrowserRouter>)
}

export default App;
