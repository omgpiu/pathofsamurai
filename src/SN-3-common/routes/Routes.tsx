import React from 'react';
import {Redirect, Route, Switch} from 'react-router-dom';
import Login from '../../SN-2-features/f1-login/l1-ui/Login';
import {SuspendedChat, SuspendedDialogs} from '../../SN-1-main/m1-ui/App';
import Settings from '../../SN-2-features/f7-news/s1-ui/Settings';
import Music from '../../SN-2-features/f6-music/m1-ui/Music';
import {Page404} from '../Page404/Page404';
import News from '../../SN-2-features/f8-settings/n1-ui/News';
import UsersPage from '../../SN-2-features/f4-users/u1-ui/UsersPage';
import ProfileContentContainerAPI from '../../SN-2-features/f2-profile/p1-ui/ProfileContentContainerAPI';


export const SIGN_IN_PATH = '/login';
export const PROFILE_PATH = '/profile';
export const DIALOGS_PATH = '/dialogs';
export const USERS_PATH = '/users';
export const CHAT_PATH = '/chat';
export const NEWS_PATH = '/news';
export const MUSIC_PATH = '/music';
export const SETTINGS_PATH = '/settings';
export const PAGE_NOT_FOUND_PATH = '/404';

type PropsType = {}
export const Routes: React.FC<PropsType> = (props) => {

    return <>
        <Switch>
            <Route path={SIGN_IN_PATH} render={() => <Login/>}/>
            <Route exact path='/'
                   render={() => <Redirect to={PROFILE_PATH}/>}/>
            <Route path={DIALOGS_PATH} render={() => <SuspendedDialogs/>}/>
            <Route path={PROFILE_PATH + '/:userId?'} render={() =>
                <ProfileContentContainerAPI/>}/>
            <Route path={USERS_PATH} render={() => <UsersPage/>}/>
            <Route path={NEWS_PATH} render={() => <News/>}/>
            <Route path={PAGE_NOT_FOUND_PATH} render={() => <Page404/>}/>
            <Route path={MUSIC_PATH} render={() => <Music/>}/>
            <Route path={SETTINGS_PATH} render={() => <Settings/>}/>
            <Route path={CHAT_PATH} render={() => <SuspendedChat/>}/>
            <Redirect from={'*'} to={PAGE_NOT_FOUND_PATH}/>
        </Switch>

    </>;
};

