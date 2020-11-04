import React from 'react';
import '../../App.module.css';
import {connect, ConnectedProps} from 'react-redux';
import {getUserProfileTC, getUserStatusTC, ProfileType, updateUserStatusTC} from '../../Rdux/profile-reducer';
import Profile from './ProfileContent';
import {RouteComponentProps, withRouter} from 'react-router-dom';
import {compose} from 'redux';
import {AppRootStateType} from '../../Rdux/redux-store';
import {withAuthRedirect} from '../../HOC/WithAuthRedirect';


export type MapStatePropsType = {
    profile: ProfileType
    status: string
    isAuth: boolean
    authorizedUserId: number | null
}


type PropsType = RouteComponentProps<PathParamsType> & PropsFromRedux
type PathParamsType = {
    userId: string

}


class ProfileContentContainerAPI extends React.Component<PropsType> {

    componentDidMount() {
        let userId: number | null = +this.props.match.params.userId;
        if (!userId) {
            userId = this.props.authorizedUserId;
            // if(!userId){
            //     this.props.history.push('/login')}
            // TODO Support profile page unreachable when user is logged out
        }

        this.props.getUserProfileTC(userId);
        this.props.getUserStatusTC(userId);
    }

    render() {
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
    isAuth: state.auth.data.isAuth,
    authorizedUserId: state.auth.data.userId,

});


type PropsFromRedux = ConnectedProps<typeof connector>
const connector = connect(mapStateToProps, {getUserProfileTC, getUserStatusTC, updateUserStatusTC});
export default compose<React.ComponentClass>(
    connect(mapStateToProps, {getUserProfileTC, getUserStatusTC, updateUserStatusTC}),
    withRouter,
    // withAuthRedirect
)(ProfileContentContainerAPI);


// export default connect<MapStatePropsType, MapDispatchPropsType, {}, RootProfileType >(mapStateToProps, {setUserProfile})(WithUrlDataContainerComponent); //спросить по типизации