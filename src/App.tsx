import React from 'react';
import './App.module.css';
import Nav from './components/Nav/Nav';
import st from './App.module.css';
import {BrowserRouter, Redirect, Route, Switch, withRouter} from 'react-router-dom';
import News from './components/News/News';
import Music from './components/Music/Music';
import Settings from './components/Settings/Settings';
import UsersContainer from './components/Users/UsersContainer';
import ProfileContentContainerAPI from './components/Profile/ProfileContentContainerAPI';
import HeaderContainerAPI from './components/Header/HeaderContainerAPI';
import Login from './components/Login/Login';
import {connect, Provider} from 'react-redux';
import {setInitializedTC} from './Rdux/app-reducer';
import {compose} from 'redux';
import store, {AppRootStateType} from './Rdux/redux-store';
import PreLoader from './components/Users/preLoader';
import {withSuspense} from './HOC/withSuspense';

const DialogContainer = React.lazy(() => import('./components/Dialogs/DialogsContainer'));


class App extends React.Component<any, any> {
    catchAllUnhandledError = (promiseRejectionEvent: any) => {
        alert('Some Error');

    };

    componentDidMount() {
        this.props.setInitializedTC();
        window.addEventListener('unhandledrejection', this.catchAllUnhandledError);
    }

    componentWillUnmount() {
        window.removeEventListener('unhandledrejection', this.catchAllUnhandledError);
    }

    render() {
        // {this.props.isInitialized && <PreLoader/>}

        if (!this.props.isInitialized) {
            return <PreLoader/>;
        }
        return (

            <div className={st.appWrapper}>
                <HeaderContainerAPI/>
                <Nav/>
                <div className={st.wrapperMainContent}>
                    <Switch>
                        <Route exact path='/' render={() =>
                            <Redirect to={'/profile'}/>}/>
                        <Route path='/dialogs' render={withSuspense(DialogContainer)}/>
                        <Route path='/profile/:userId?' render={() =>
                            <ProfileContentContainerAPI/>}/>
                        <Route path={'/users'} render={() => <UsersContainer/>}/>
                        <Route path={'/news'} component={News}/>
                        <Route path={'/music'} component={Music}/>
                        <Route path={'/settings'} component={Settings}/>
                        <Route path={'/login'} component={Login}/>
                        <Route path={'*'} render={() => <h1>404: PAGE NOT FOUND</h1>}/>

                    </Switch>
                </div>
            </div>

        );
    }
}

type mapStateToPropsType = {
    isInitialized: boolean
}
const mapStateToProps = (state: AppRootStateType): mapStateToPropsType => ({
    isInitialized: state.app.isInitialized
});
// export default compose<React.ComponentClass>(
//     withRouter,
//     connect(mapStateToProps, {setInitializedTC}))(App);

const AppContainer = compose<React.ComponentClass>(
    withRouter,
    connect(mapStateToProps, {setInitializedTC}))(App);

const SamuraiJSApp = () => {
    return <BrowserRouter basename={process.env.PUBLIC_URL}>
        <Provider store={store}>
            <AppContainer/>
        </Provider>
    </BrowserRouter>;
};
export default SamuraiJSApp;
