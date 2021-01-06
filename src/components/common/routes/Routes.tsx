import React from 'react';
import {Redirect, Route, Switch} from 'react-router-dom';
import ProfileContentContainerAPI from '../../Profile/ProfileContentContainerAPI';
import {UsersPage} from '../../Users/UsersPage';
import News from '../../News/News';
import Music from '../../Music/Music';
import Settings from '../../Settings/Settings';
import Login from '../../Login/Login';
import {SuspendedDialogs} from '../../../App';
import {Page404} from '../Page404/Page404';

export const START_PATH = '/'
export const SIGN_IN_PATH = '/login';
export const PROFILE_PATH = '/profile/:userId?';
export const DIALOGS_PATH = '/dialogs';
export const USERS_PATH = '/users';
export const NEWS_PATH = '/news';
export const MUSIC_PATH = '/music';
export const SETTINGS_PATH = '/settings';
export const PAGE_NOT_FOUND_PATH = '/404';

type PropsType = {}
export const Routes: React.FC<PropsType> = (props) => {

    return <>
        <Switch>
            <Route exact path={SIGN_IN_PATH} render={() => <Login/>}/>

            <Route path={DIALOGS_PATH} render={() => <SuspendedDialogs/>}/>
            <Route path={PROFILE_PATH} render={() =>
                <ProfileContentContainerAPI/>}/>
            <Route path={USERS_PATH} render={() => <UsersPage/>}/>
            <Route path={NEWS_PATH} render={() => <News/>}/>
            <Route path={PAGE_NOT_FOUND_PATH} render={() => <Page404/>}/>
            <Route path={MUSIC_PATH} render={() => <Music/>}/>
            <Route path={SETTINGS_PATH} render={() => <Settings/>}/>
            <Route path={START_PATH} render={() =>
                <Redirect to={PROFILE_PATH}/>}/>
            <Redirect from={'*'} to={PAGE_NOT_FOUND_PATH}/>
        </Switch>

    </>;
};

