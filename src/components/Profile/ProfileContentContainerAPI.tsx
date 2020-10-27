import React from 'react';
import '../../App.module.css';
import {connect, ConnectedProps} from 'react-redux';
import {getUserProfileTC, ProfileType} from '../../Rdux/profile-reducer';
import {isAuthType, ProfilePageType} from '../../Rdux/State';
import Profile from './ProfileContent';
import {RouteComponentProps, withRouter} from 'react-router-dom';
import {withAuthRedirect} from '../../HOC/WithAuthRedirect';
import {compose} from 'redux';


// export type MapDispatchPropsType = {
//     setUserProfile?:(profile:ProfileType)=>void
// }

export type RootProfileType = {
    profilePage: ProfilePageType
    auth: isAuthType

}
export type MapStatePropsType = {
    profile: ProfileType

}
export type MapStatePropsForRedirectType = {

    isAuth: boolean
}

type PropsType = RouteComponentProps<PathParamsType> & PropsFromRedux
type PathParamsType = {
    userId: string

}

//userId cant be a number ?

class ProfileContentContainerAPI extends React.Component<PropsType> {
    componentDidMount() {
        let userId = +this.props.match.params.userId;
        if (!userId) {
            userId = 7531;
        }

        this.props.getUserProfileTC(userId);
    }

    render() {

        return (
            <div>
                <Profile {...this.props} profile={this.props.profile}/>
            </div>);
    }
}

let mapStateToProps = (state: RootProfileType): MapStatePropsType => ({
    profile: state.profilePage.profile,
});


type PropsFromRedux = ConnectedProps<typeof connector>
const connector = connect(mapStateToProps, {getUserProfileTC});
export default compose<React.ComponentClass>(
    connect(mapStateToProps, {getUserProfileTC}),
    withRouter,
    // withAuthRedirect
)(ProfileContentContainerAPI);


// export default connect<MapStatePropsType, MapDispatchPropsType, {}, RootProfileType >(mapStateToProps, {setUserProfile})(WithUrlDataContainerComponent); //спросить по типизации