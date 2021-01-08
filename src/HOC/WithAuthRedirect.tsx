import React from 'react';
import {Redirect} from 'react-router-dom';
import {connect} from 'react-redux';
import {AppRootStateType} from '../SN-1-main/m2-bll/redux-store';


let mapStateToPropsForRedirect = (state: AppRootStateType) => ({
    isAuth: state.auth.isAuth

} as withAuthRedirectPropsType);

type DispatchPropsType = {}

export function withAuthRedirect<WCP>(WrappedComponent: React.ComponentType<WCP>) {


    const RedirectComponent: React.FC<withAuthRedirectPropsType & DispatchPropsType> = ({isAuth, ...restProps}) => {
        if (!isAuth) return <Redirect to={'/login'}/>;
        return <WrappedComponent {...restProps as WCP}/>;
    };

    return connect<withAuthRedirectPropsType, DispatchPropsType, WCP, AppRootStateType>(mapStateToPropsForRedirect, {})(RedirectComponent);
}

type withAuthRedirectPropsType = {
    isAuth: boolean
}
