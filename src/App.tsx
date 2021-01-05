import React from 'react';
import './App.css';
import Nav from './components/Nav/Nav';

import {BrowserRouter, Redirect, withRouter} from 'react-router-dom';
import {connect, Provider} from 'react-redux';
import {setInitializedTC} from './Rdux/app-reducer';
import {compose} from 'redux';
import store, {AppRootStateType} from './Rdux/redux-store';
import PreLoader from './components/common/preLoader/preLoader';
import {withSuspense} from './HOC/withSuspense';
import 'antd/dist/antd.css';

import {Routes, SIGN_IN_PATH} from './components/common/routes/Routes';
// import Header from './components/Header/Header';
import {Layout, Menu, Breadcrumb} from 'antd';
import {
    DesktopOutlined,
    PieChartOutlined,
    FileOutlined,
    TeamOutlined,
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
    catchAllUnhandledError = (e: PromiseRejectionEvent) => {
        alert('Some Error');

    };
    state = {
        collapsed: false,
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


        return (<div>
                <div>
                    <HeaderM/>
                    <Nav/>
                    <div>
                        <Routes/>
                    </div>
                </div>
                <Layout style={{minHeight: '100vh'}}>
                    <Sider collapsible collapsed={collapsed} onCollapse={this.onCollapse}>
                        <div className="logo"/>
                        <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline">
                            <Menu.Item key="Main/Profile" icon={<PieChartOutlined/>}>
                                My Profile
                            </Menu.Item>
                            <Menu.Item key="Main/Messages" icon={<DesktopOutlined/>}>
                                Messages
                            </Menu.Item>
                            <Menu.Item key="Main/Friends" icon={<DesktopOutlined/>}>
                                Friends
                            </Menu.Item>
                            <Menu.Item key="Main/People" icon={<DesktopOutlined/>}>
                                People
                            </Menu.Item>
                            <SubMenu key="Music" icon={<UserOutlined/>} title="Music">
                                <Menu.Item key="Music/New">New music</Menu.Item>
                                <Menu.Item key="Music/My">My music</Menu.Item>
                                <Menu.Item key="Music/All">All music</Menu.Item>
                            </SubMenu>
                            <SubMenu key="News" icon={<TeamOutlined/>} title="News">
                                <Menu.Item key="News/Friends">Friends</Menu.Item>
                                <Menu.Item key="News/World">World</Menu.Item>
                                <Menu.Item key="News/City">City</Menu.Item>
                            </SubMenu>
                            <SubMenu key="Settings" icon={<TeamOutlined/>} title="Settings">
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
                        <Header className="site-layout-background" style={{padding: 0}}/>
                        <Content style={{margin: '0 16px'}}>
                            <Breadcrumb style={{margin: '16px 0'}}>
                                <Breadcrumb.Item>User</Breadcrumb.Item>
                                <Breadcrumb.Item>Bill</Breadcrumb.Item>
                            </Breadcrumb>
                            <div className="site-layout-background" style={{padding: 24, minHeight: 360}}>
                                Bill is a cat.
                            </div>
                        </Content>
                        <Footer style={{textAlign: 'center'}}>Ant Design ©2018 Created by Ant UED</Footer>
                    </Layout>
                </Layout>

            </div>
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
