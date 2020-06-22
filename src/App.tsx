import React from 'react';
import './App.module.css';
import Header from './components/Header/Header';
import Nav from './components/Nav/Nav';
import st from './App.module.css';
import {BrowserRouter, Route} from 'react-router-dom';


import Dialogs from './components/Dialogs/Dialogs';
import Profile from './components/MainContant/MainContent';
import state from './Rdux/State';


function App() {
    return (
        <BrowserRouter>
            <div className={st.appWrapper}>
                <Header/>
                <Nav/>
                <div className={st.wrapperMainContent}>


                    <Route path='/profile' render={() => <Profile postData={state.profilePage.postData}/>}/>

                    <Route path='/dialogs' render={() => <Dialogs messageData={state.dialogsPage.messageData}
                                                                    dialogsData={state.dialogsPage.dialogsData}/>}/>


                    {/*<Route path={'/news'} component={News}/>*/}
                    {/*<Route path={'/music'} component={Music}/>*/}
                    {/*<Route path={'/settings'} component={Settings}/>*/}


                </div>


            </div>
        </BrowserRouter>
    );
}

export default App;
