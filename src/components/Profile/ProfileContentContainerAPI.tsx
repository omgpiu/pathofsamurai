import React from 'react';
import '../../App.module.css';
import {connect} from 'react-redux';
import {
    getUserProfileTC,
    getUserStatusTC,
    savePhoto,
    saveProfile,
    updateUserStatusTC
} from '../../Rdux/profile-reducer';
import Profile from './ProfileContent';
import {RouteComponentProps, withRouter} from 'react-router-dom';
import {compose} from 'redux';
import {AppRootStateType} from '../../Rdux/redux-store';
import {ReduxLogin} from '../Login/reduxFormLogin/ReduxLogin';
import {NewProfileType} from '../../Types/Types';


// export type MapStatePropsType = {
//     profile: NewProfileType | null
//     status: string
//     isAuth: boolean
//     authorizedUserId: number | null
//
// }
type MapPropsType = ReturnType<typeof mapStateToProps>
type DispatchPropsType = {
    getUserProfileTC: (userId: number | null) => void
    getUserStatusTC: (userId: number | null) => void
    updateUserStatusTC: (status: string) => void
    savePhoto: (file: File) => void
    saveProfile: (profile: NewProfileType) => Promise<any>
}

type PathParamsType = {
    userId: string

}


type PropsType = MapPropsType & DispatchPropsType & RouteComponentProps<PathParamsType>;

class ProfileContentContainerAPI extends React.Component<PropsType> {
    constructor(props: PropsType) {
        super(props);
    }

    refreshProfile() {
        let userId: number | null = +this.props.match.params.userId;
        if (!userId) {
            userId = this.props.authorizedUserId;
            if (!userId) {
                this.props.history.push('/login');
            }
        }

        if (!userId) {
            console.error('ID should exists in URI params or in state (\'authorizedUserId\')');
        } else {
            this.props.getUserProfileTC(userId);
            this.props.getUserStatusTC(userId);
        }
    }


    componentDidMount() {

        this.refreshProfile();
    }

    componentDidUpdate(prevProps: PropsType, prevState: PropsType) {
        if (this.props.match.params.userId != prevProps.match.params.userId) {
            this.refreshProfile();
        }

    }

    componentWillUnmount(): void {
    }

    render() {
        return (
            <div>
                <div style={{margin: '5px', border: '1px solid white', backgroundColor: 'yellow'}}>
                    <ReduxLogin/>
                </div>

                <Profile
                    {...this.props}
                    isOwner={!this.props.match.params.userId}
                    {...this.props} profile={this.props.profile} status={this.props.status}
                    updateStatus={this.props.updateUserStatusTC}
                />

            </div>);
    }
}

let mapStateToProps = (state: AppRootStateType) => ({
    profile: state.profilePage.profile,
    status: state.profilePage.status,
    isAuth: state.auth.isAuth,
    authorizedUserId: state.auth.userId,


});


export default compose<React.ComponentType>(
    connect(mapStateToProps, {getUserProfileTC, getUserStatusTC, updateUserStatusTC, savePhoto, saveProfile}),
    withRouter,
    // withAuthRedirect
)(ProfileContentContainerAPI);


