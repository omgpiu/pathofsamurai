import React from 'react';
import {connect, useSelector} from 'react-redux';
import {logoutTC} from '../../Rdux/auth-reducer';
import {withRouter} from 'react-router-dom';
import {AppRootStateType} from '../../Rdux/redux-store';
import {compose} from 'redux';
import {getIsAuth} from '../Profile/profile-selectors';
import {getLogin} from './header-selectors';

//
// class HeaderContainer extends React.Component<HeaderPropsType & DispatchHeaderPropsType> {
//     render() {
//         return <Header {...this.props}/>;
//     }
// }
//
// const mapStateToProps = (state: AppRootStateType) => (
//     {
//         isAuth: state.auth.isAuth,
//         login: state.auth.login,
//     });
//
// export default compose<React.ComponentType>(
//     connect<HeaderPropsType, DispatchHeaderPropsType, {}, AppRootStateType>(mapStateToProps, {logoutTC}),
//     withRouter,
// )(HeaderContainer);
export default 1;