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

type PropsType = {}

const {Header, Content, Footer, Sider} = Layout;


const DialogContainer = React.lazy(() => import('./components/Dialogs/Dialogs'));
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

//
// class App extends React.Component<MapPropsType & DispatchPropsType> {
//     state = {
//         collapsed: false,
//     };
//
//     catchAllUnhandledError = (e: PromiseRejectionEvent) => {
//         alert('Some Error');
//
//     };
//
//     onCollapse = (collapsed: boolean) => {
//         console.log(collapsed);
//         this.setState({collapsed});
//     };
//
//     componentDidMount() {
//         this.props.setInitializedTC();
//         if (this.props.isAuth) return <Redirect to={SIGN_IN_PATH}/>;
//         window.addEventListener('unhandledrejection', this.catchAllUnhandledError);
//     }
//
//     componentWillUnmount() {
//         window.removeEventListener('unhandledrejection', this.catchAllUnhandledError);
//     }
//
//     render() {
//         if (!this.props.isInitialized) {
//             return <PreLoader/>;
//         }
//         const {collapsed} = this.state;
//         return (
//             <Layout style={{minHeight: '100vh'}}>
//                 <Sider collapsible collapsed={collapsed} onCollapse={this.onCollapse}>
//                     <div className="logo"><img src={logoNew} alt="newLogo"/></div>
//                     <Nav/>
//                 </Sider>
//                 <Layout className="site-layout">
//                     <Header className="site-layout-background">
//                         <HeaderM/>
//                     </Header>
//                     <Content style={{margin: '0 16px'}}>
//                         <Routes/>
//                     </Content>
//                     <Footer style={{textAlign: 'center'}}>Samurai Social Network ©2020 Created by Alex Dubrovskii &
//                         IT-KAMASUTRA</Footer>
//                 </Layout>
//             </Layout>
//
//
//         );
//     }
// }
//
// type mapStateToPropsType = {
//     isInitialized: boolean
//     isAuth: boolean
//     login: string | null
// }
// const mapStateToProps = (state: AppRootStateType): mapStateToPropsType => ({
//     isInitialized: state.app.isInitialized,
//     isAuth: state.auth.isAuth,
//     login: state.auth.login
// });
//
// const AppContainer = compose<React.ComponentType>(
//     withRouter,
//     connect(mapStateToProps, {setInitializedTC}))(App);

const SamuraiJSApp: React.FC = () => {
    return <BrowserRouter basename={process.env.PUBLIC_URL}>
        <Provider store={store}>
            <AppHooks/>
        </Provider>
    </BrowserRouter>;

};
export default SamuraiJSApp;
