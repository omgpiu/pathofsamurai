import React from 'react';
import Header, {DispatchHeaderPropsType, HeaderPropsType} from './Header';
import {connect} from 'react-redux';
import {logoutTC} from '../../Rdux/auth-reducer';
import {withRouter} from 'react-router-dom';
import {AppRootStateType} from '../../Rdux/redux-store';
import {compose} from 'redux';


class HeaderContainer extends React.Component<HeaderPropsType & DispatchHeaderPropsType> {
    render() {
        return <Header {...this.props}/>;
    }
}

const mapStateToProps = (state: AppRootStateType) => (
    {
        isAuth: state.auth.isAuth,
        login: state.auth.login,
    });

export default compose<React.ComponentType>(
    connect<HeaderPropsType, DispatchHeaderPropsType, {}, AppRootStateType>(mapStateToProps, {logoutTC}),
    withRouter,
)(HeaderContainer);
