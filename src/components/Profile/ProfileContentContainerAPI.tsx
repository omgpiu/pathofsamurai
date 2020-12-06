import React from 'react';
import '../../App.module.css';
import {connect, ConnectedProps} from 'react-redux';
import {getUserProfileTC, getUserStatusTC, savePhoto, updateUserStatusTC} from '../../Rdux/profile-reducer';
import Profile from './ProfileContent';
import {RouteComponentProps, withRouter} from 'react-router-dom';
import {compose} from 'redux';
import {AppRootStateType} from '../../Rdux/redux-store';
import {NewProfileType} from '../../Types/Types';
import {ReduxLogin} from '../Login/reduxFormLogin/ReduxLogin';


export type MapStatePropsType = {
    profile: NewProfileType | null
    status: string
    isAuth: boolean
    authorizedUserId: number | null

}


type PropsType = RouteComponentProps<PathParamsType> & PropsFromRedux
type PathParamsType = {
    userId: string

}


class ProfileContentContainerAPI extends React.Component<PropsType> {

    refreshProfile() {
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


    componentDidMount() {

        this.refreshProfile();
    }

    componentDidUpdate(prevProps: Readonly<PropsType>, prevState: Readonly<{}>, snapshot?: any) {
        if (this.props.match.params.userId != prevProps.match.params.userId) {
            this.refreshProfile();
        }

    }

    render() {
        return (
            <div>
                <div style={{margin: '5px', border: '1px solid white', backgroundColor: 'yellow'}}>
                    <ReduxLogin/>
                </div>

                <Profile

                    isOwner={!this.props.match.params.userId}
                    {...this.props} profile={this.props.profile} status={this.props.status}
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
const connector = connect(mapStateToProps, {getUserProfileTC, getUserStatusTC, updateUserStatusTC, savePhoto});
export default compose<React.ComponentClass>(
    connect(mapStateToProps, {getUserProfileTC, getUserStatusTC, updateUserStatusTC, savePhoto}),
    withRouter,
    // withAuthRedirect
)(ProfileContentContainerAPI);


// export default connect<MapStatePropsType, MapDispatchPropsType, {}, RootProfileType >(mapStateToProps, {setUserProfile})(WithUrlDataContainerComponent); //спросить по типизации