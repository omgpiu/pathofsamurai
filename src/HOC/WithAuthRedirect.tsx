import React from 'react';
import {Redirect} from 'react-router-dom';
import {connect} from 'react-redux';
import {AppRootStateType} from '../Rdux/redux-store';


let mapStateToPropsForRedirect = (state: AppRootStateType): withAuthRedirectPropsType => ({
    isAuth: state.auth.data.isAuth

});

export const withAuthRedirect = (Component: any) => {


    class RedirectComponent extends React.Component<any, any, any> {
        render() {
            if (!this.props.isAuth) return <Redirect to={'/login'}/>;
            return <Component {...this.props}/>;
        }
    }

    return connect(mapStateToPropsForRedirect)(RedirectComponent);
};

type withAuthRedirectPropsType = {
    isAuth: boolean
}