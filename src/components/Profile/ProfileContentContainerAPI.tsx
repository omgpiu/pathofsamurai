import React from 'react';
import '../../App.module.css';
import {connect, ConnectedProps} from 'react-redux';
import {getUserProfileTC, getUserStatusTC, ProfileType, updateUserStatusTC} from '../../Rdux/profile-reducer';
import {isAuthType, ProfilePageType} from '../../Rdux/State';
import Profile from './ProfileContent';
import {Redirect, RouteComponentProps, withRouter} from 'react-router-dom';
import {compose} from 'redux';
import {AppRootStateType} from '../../Rdux/redux-store';
import {withAuthRedirect} from '../../HOC/WithAuthRedirect';


// export type MapDispatchPropsType = {
//     setUserProfile?:(profile:ProfileType)=>void
// }

export type RootProfileType = {
    profilePage: ProfilePageType
    auth: isAuthType
    isLoggedIn: boolean


}
export type MapStatePropsType = {
    profile: ProfileType
    status: string
    isAuth: boolean


}
export type MapStatePropsForRedirectType = {
    isAuth: boolean
}

type PropsType = RouteComponentProps<PathParamsType> & PropsFromRedux
type PathParamsType = {
    userId: string

}


class ProfileContentContainerAPI extends React.Component<PropsType> {

    componentDidMount() {
        let userId = +this.props.match.params.userId;
        if (!userId) {
            userId = 7531;
        }

        this.props.getUserProfileTC(userId);
        this.props.getUserStatusTC(userId);
    }
    // componentDidUpdate = (prevProps: any, prevState: any) => {
    //
    //     if (!this.props.isLoggedIn) {
    //         console.log('render2');
    //         return <Redirect to={'/login'}/>;
    //     }
    // }; support

    render() {

        // console.log('render');
        // if (!this.props.isLoggedIn) {
        //
        //     return <Redirect to={'/login'}/>;
        // }
        return (
            <div>
                <Profile {...this.props} profile={this.props.profile} status={this.props.status}
                         updateStatus={this.props.updateUserStatusTC}/>
            </div>);
    }
}

let mapStateToProps = (state: AppRootStateType): MapStatePropsType => ({
    profile: state.profilePage.profile,
    status: state.profilePage.status,
    isAuth: state.auth.isAuth
});


type PropsFromRedux = ConnectedProps<typeof connector>
const connector = connect(mapStateToProps, {getUserProfileTC, getUserStatusTC, updateUserStatusTC});
export default compose<React.ComponentClass>(
    connect(mapStateToProps, {getUserProfileTC, getUserStatusTC, updateUserStatusTC}),
    withRouter,
    withAuthRedirect
)(ProfileContentContainerAPI);


// export default connect<MapStatePropsType, MapDispatchPropsType, {}, RootProfileType >(mapStateToProps, {setUserProfile})(WithUrlDataContainerComponent); //спросить по типизации