import React, {useEffect, useState} from 'react';
import './App.css';
import {BrowserRouter} from 'react-router-dom';
import {Provider, useDispatch, useSelector} from 'react-redux';
import {setInitializedTC} from './Rdux/app-reducer';
import store from './Rdux/redux-store';
import PreLoader from './components/common/preLoader/preLoader';
import {withSuspense} from './HOC/withSuspense';
import 'antd/dist/antd.css';
import logoNew from '../src/photo/samurai.png';
import {Routes} from './components/common/routes/Routes';
import {Layout} from 'antd';
import {HeaderM} from './components/Header/Header';
import {Nav} from './components/Nav/Nav';
import {getIsInitialized} from './Rdux/app-selectors';
import {getIsAuth} from './components/Profile/profile-selectors';

type PropsType = {}

const {Header, Content, Footer, Sider} = Layout;


const DialogContainer = React.lazy(() => import('./components/Dialogs/DialogsContainer'));
const ChatContainer = React.lazy(() => import('./components/chat/ChatPage'));
// type MapPropsType = ReturnType<typeof mapStateToProps>
// type DispatchPropsType = {
//     setInitializedTC: () => void
// }
export const SuspendedDialogs = withSuspense(DialogContainer);
export const SuspendedChat = withSuspense(ChatContainer);
export const AppHooks: React.FC<PropsType> = () => {
    const dispatch = useDispatch()
    const [collapsed, setCollapsed] = useState<boolean>(false)
    const isInitialized = useSelector(getIsInitialized)
    const isAuth = useSelector(getIsAuth)

    useEffect(() => {
        dispatch(setInitializedTC());
    }, [dispatch])

    const onCollapse = () => {
        setCollapsed(!collapsed);
    };

    if (!isInitialized) {
        return <PreLoader/>;
    }
    return (<div>
            <Layout style={{minHeight: '100vh'}}>
                <Sider collapsible collapsed={collapsed} onCollapse={onCollapse}>
                    <div className="logo"><img src={logoNew} alt="newLogo"/></div>
                    <Nav/>
                </Sider>
                <Layout className="site-layout">
                    <Header className="site-layout-background">
                        <HeaderM/>
                    </Header>
                    <Content style={{margin: '0 16px'}}>
                        <Routes/>
                    </Content>
                    <Footer style={{textAlign: 'center'}}>Samurai Social Network ©2020 Created by Alex Dubrovskii &
                        IT-KAMASUTRA</Footer>
                </Layout>
            </Layout>
        </div>

    )
}

const SamuraiJSApp: React.FC = () => {
    return <BrowserRouter basename={process.env.PUBLIC_URL}>
        <Provider store={store}>
            <AppHooks/>
        </Provider>
    </BrowserRouter>;

};
export default SamuraiJSApp;
