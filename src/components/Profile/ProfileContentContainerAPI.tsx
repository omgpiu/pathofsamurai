import React from 'react';
import '../../App.module.css';
import {connect, ConnectedProps} from 'react-redux';
import {getUserProfileTC, ProfileType, setUserProfile} from '../../Rdux/profile-reducer';
import {ProfilePageType} from '../../Rdux/State';
import Profile from './ProfileContent';
import {RouteComponentProps, withRouter} from 'react-router-dom';
import {usersAPI} from '../../API/api';


// export type MapDispatchPropsType = {
//     setUserProfile?:(profile:ProfileType)=>void
// }

export type RootProfileType = {
    profilePage: ProfilePageType
}
export type MapStatePropsType = {
    profile: ProfileType
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

        this.props.getUserProfileTC(String(userId))
    }

    render() {
        return (
            <div>
                <Profile {...this.props} profile={this.props.profile}/>
            </div>);
    }
}

let mapStateToProps = (state: RootProfileType): MapStatePropsType => ({
    profile: state.profilePage.profile
});


let WithUrlDataContainerComponent = withRouter(ProfileContentContainerAPI);

type PropsFromRedux = ConnectedProps<typeof connector>
const connector = connect(mapStateToProps, {getUserProfileTC});
export default connect(mapStateToProps, {getUserProfileTC})(WithUrlDataContainerComponent);


// export default connect<MapStatePropsType, MapDispatchPropsType, {}, RootProfileType >(mapStateToProps, {setUserProfile})(WithUrlDataContainerComponent); //спросить по типизации