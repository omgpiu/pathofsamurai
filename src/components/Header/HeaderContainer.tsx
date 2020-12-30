import React from 'react';
import Header, {DispatchHeaderPropsType, HeaderPropsType} from './Header';
import {connect} from 'react-redux';
import {logoutTC} from '../../Rdux/auth-reducer';
import {withRouter} from 'react-router-dom';
import {AppRootStateType} from '../../Rdux/redux-store';
import {compose} from 'redux';


type PathParamsType = {
    id: string,
    email: string,
    login: string
}
type mapStateToPropsType = {
    isAuth: boolean
    login: string | null

}

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

// export default withRouter(connector(HeaderContainer));
export default compose<React.ComponentType>(
    connect<HeaderPropsType, DispatchHeaderPropsType, {}, AppRootStateType>(mapStateToProps, {logoutTC}),
    withRouter,
)(HeaderContainer);
