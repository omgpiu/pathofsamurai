import React from 'react';
import '../../App.module.css';
import axios from 'axios';
import {connect} from 'react-redux';
import {ProfileProfileType, setUserProfile} from '../../Rdux/profile-reducer';
import {ProfilePageType} from '../../Rdux/State';
import Profile from './ProfileContent';
import { withRouter } from 'react-router-dom';
import {futimes} from 'fs';

export type RootProfileType = {
    profilePage: ProfilePageType

}

export type ProfilePropsType = {
    profile: ProfileProfileType
}


class ProfileContentContainerAPI extends React.Component<any> {


    componentDidMount() {

        axios.get(`https://social-network.samuraijs.com/api/1.0/profile/2`)
            .then(response => {
                this.props.setUserProfile(response.data);

            });
    }


    render() {

        return (
            <div>
                <Profile profile={this.props.profile}/>
                {/*{...this.props}*/}
            </div>);


    }
}

let mapStateToProps = (state: RootProfileType): ProfilePropsType => ({
    profile: state.profilePage.profile

});

let WithUrlDataContainerComponent = withRouter(ProfileContentContainerAPI);


export default connect<ProfilePropsType, object, {}, RootProfileType>(mapStateToProps, {setUserProfile})(WithUrlDataContainerComponent);