import React from 'react';
import {Redirect} from 'react-router-dom';
import {MapStatePropsForRedirectType, RootProfileType} from '../components/Profile/ProfileContentContainerAPI';
import {connect} from 'react-redux';


let mapStateToPropsForRedirect = (state: RootProfileType): MapStatePropsForRedirectType => ({
    isAuth: state.auth.isAuth

});

export const withAuthRedirect = (Component: any) => {


    class RedirectComponent extends React.Component<any, any, any> {
        render() {
            if (!this.props.isAuth) return <Redirect to={'/login'}/>;
            return <Component {...this.props}/>;
        }
    }


    // let ConnectedAuthRedirectComponent = connect(mapStateToPropsForRedirect)(RedirectComponent);
    // return ConnectedAuthRedirectComponent;
    return connect(mapStateToPropsForRedirect)(RedirectComponent);
};
