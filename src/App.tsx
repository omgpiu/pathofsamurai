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
import {RootStateType} from './Rdux/State';

export type AppType = {
    state: RootStateType
    addPostCallBack: () => void
    updateNewPostText: (newText: string) => void


}


function App(props:AppType) {
    return (

            <div className={st.appWrapper}>
                <Header/>
                <Nav/>
                <div className={st.wrapperMainContent}>


                    <Route path='/profile' render={() =>
                        <Profile
                        postData={props.state.profilePage.postData}
                        addPostCallBack={props.addPostCallBack}
                        newPostText={props.state.profilePage.newPostText}
                        updateNewPostText={props.updateNewPostText}


                    />}/>

                    <Route path='/dialogs' render={() => <Dialogs messageData={props.state.dialogsPage.messageData}
                                                                  dialogsData={props.state.dialogsPage.dialogsData}/>}/>


                    <Route path={'/news'} component={News}/>
                    <Route path={'/music'} component={Music}/>
                    <Route path={'/settings'} component={Settings}/>


                </div>


            </div>

    );
}

export default App;
