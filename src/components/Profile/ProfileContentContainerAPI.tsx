import React from 'react';
import '../../App.module.css';
import axios from 'axios';
import {connect, ConnectedProps} from 'react-redux';
import {ProfileType, setUserProfile} from '../../Rdux/profile-reducer';
import {ProfilePageType} from '../../Rdux/State';
import Profile from './ProfileContent';
import {withRouter, RouteComponentProps} from 'react-router-dom';


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
    userId: any
}


class ProfileContentContainerAPI extends React.Component<PropsType> {
    componentDidMount() {
        let userId = this.props.match.params.userId;
        if (!userId) {
            userId = 7531;
        }

        axios.get(`https://social-network.samuraijs.com/api/1.0/profile/` + userId)
            .then(response => {
                this.props.setUserProfile(response.data);

            });
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
const connector = connect(mapStateToProps, {setUserProfile})
export default connect(mapStateToProps, {setUserProfile})(WithUrlDataContainerComponent);


// export default connect<MapStatePropsType, MapDispatchPropsType, {}, RootProfileType >(mapStateToProps, {setUserProfile})(WithUrlDataContainerComponent); //спросить по типизации