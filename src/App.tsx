import React from 'react';
import './App.css';
import {BrowserRouter, Link, Redirect, withRouter} from 'react-router-dom';
import {connect, Provider} from 'react-redux';
import {setInitializedTC} from './Rdux/app-reducer';
import {compose} from 'redux';
import store, {AppRootStateType} from './Rdux/redux-store';
import PreLoader from './components/common/preLoader/preLoader';
import {withSuspense} from './HOC/withSuspense';
import 'antd/dist/antd.css';
import logoNew from '../src/photo/samurai.png';
import {DIALOGS_PATH, PROFILE_PATH, Routes, SIGN_IN_PATH, USERS_PATH} from './components/common/routes/Routes';
import {Layout, Menu} from 'antd';
import {
    CommentOutlined,
    CustomerServiceOutlined,
    FileOutlined,
    SettingOutlined,
    SoundOutlined,
    TeamOutlined,
    UserAddOutlined,
    UserOutlined,
} from '@ant-design/icons';
import {HeaderM} from './components/Header/Header';

const {SubMenu} = Menu;
const {Header, Content, Footer, Sider} = Layout;


const DialogContainer = React.lazy(() => import('./components/Dialogs/DialogsContainer'));
type MapPropsType = ReturnType<typeof mapStateToProps>
type DispatchPropsType = {
    setInitializedTC: () => void
}
export const SuspendedDialogs = withSuspense(DialogContainer);

class App extends React.Component<MapPropsType & DispatchPropsType> {
    state = {
        collapsed: false,
    };

    catchAllUnhandledError = (e: PromiseRejectionEvent) => {
        alert('Some Error');

    };

    onCollapse = (collapsed: boolean) => {
        console.log(collapsed);
        this.setState({collapsed});
    };

    componentDidMount() {
        this.props.setInitializedTC();
        if (this.props.isAuth) return <Redirect to={SIGN_IN_PATH}/>
        window.addEventListener('unhandledrejection', this.catchAllUnhandledError);
    }

    componentWillUnmount() {
        window.removeEventListener('unhandledrejection', this.catchAllUnhandledError);
    }

    render() {
        if (!this.props.isInitialized) {
            return <PreLoader/>;
        }
        const {collapsed} = this.state;
        return (<Layout style={{minHeight: '100vh'}}>
                <Sider collapsible collapsed={collapsed} onCollapse={this.onCollapse}>
                    <div className="logo"><img src={logoNew} alt="newLogo"/></div>
                    <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline">
                        <Menu.Item key="1" icon={<UserOutlined/>}>
                            <Link to={PROFILE_PATH}>Profile</Link>
                        </Menu.Item>
                        <Menu.Item key="Main/Messages" icon={<CommentOutlined/>}>
                            <Link to={DIALOGS_PATH}>Messages</Link>
                        </Menu.Item>
                        <Menu.Item key="Main/Friends" icon={<TeamOutlined/>}>
                            <Link to={USERS_PATH}>Friends</Link>
                        </Menu.Item>
                        <Menu.Item key="Main/People" icon={<UserAddOutlined/>}>
                            <Link to={USERS_PATH}>People</Link>
                        </Menu.Item>
                        <SubMenu key="Music" icon={<CustomerServiceOutlined/>} title="Music">
                            <Menu.Item key="Music/New">New music</Menu.Item>
                            <Menu.Item key="Music/My">My music</Menu.Item>
                            <Menu.Item key="Music/All">All music</Menu.Item>
                        </SubMenu>
                        <SubMenu key="News" icon={<SoundOutlined/>} title="News">
                            <Menu.Item key="News/Friends">Friends</Menu.Item>
                            <Menu.Item key="News/World">World</Menu.Item>
                            <Menu.Item key="News/City">City</Menu.Item>
                        </SubMenu>
                        <SubMenu key="Settings" icon={<SettingOutlined/>} title="Settings">
                            <Menu.Item key="Settings/General">General</Menu.Item>
                            <Menu.Item key="Settings/Security">Security</Menu.Item>
                            <Menu.Item key="Settings/Privacy">Privacy</Menu.Item>
                        </SubMenu>
                        <Menu.Item key="Files" icon={<FileOutlined/>}>
                            Files
                        </Menu.Item>
                    </Menu>
                </Sider>
                <Layout className="site-layout">
                    <Header className="site-layout-background" style={{padding: 0, backgroundColor: '#1890ff'}}>
                        <HeaderM/>
                    </Header>
                    <Content style={{margin: '0 16px'}}>
                        <Routes/>
                    </Content>
                    <Footer style={{textAlign: 'center'}}>Samurai Social Network ©2020 Created by Alex Dubrovskii &
                        IT-KAMASUTRA</Footer>
                </Layout>
            </Layout>


        )
    }
}

type mapStateToPropsType = {
    isInitialized: boolean
    isAuth: boolean
    login: string | null
}
const mapStateToProps = (state: AppRootStateType): mapStateToPropsType => ({
    isInitialized: state.app.isInitialized,
    isAuth: state.auth.isAuth,
    login: state.auth.login
});

const AppContainer = compose<React.ComponentType>(
    withRouter,
    connect(mapStateToProps, {setInitializedTC}))(App);

const SamuraiJSApp: React.FC = () => {
    return <BrowserRouter basename={process.env.PUBLIC_URL}>
        <Provider store={store}>
            <AppContainer/>
        </Provider>
    </BrowserRouter>;

};
export default SamuraiJSApp;
