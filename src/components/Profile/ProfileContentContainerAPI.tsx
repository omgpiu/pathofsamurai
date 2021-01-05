import React, {useCallback, useEffect} from 'react';
import '../../App.css';
import {connect, useDispatch, useSelector} from 'react-redux';
import {getUserProfile, getUserStatus, savePhoto, saveProfile, updateUserStatus} from '../../Rdux/profile-reducer';
import {RouteComponentProps, useParams, withRouter} from 'react-router-dom';
import {compose} from 'redux';
import {AppRootStateType} from '../../Rdux/redux-store';
import {NewProfileType} from '../../Types/Types';
import {Profile} from './ProfileContent';
import {getIsAuth, getProfile, getStatus, getUserId} from './profile-selectors';
import {withAuthRedirect} from '../../HOC/WithAuthRedirect';


type MapPropsType = ReturnType<typeof mapStateToProps>
type DispatchPropsType = {
    getUserProfile: (userId: number | null) => void
    getUserStatus: (userId: number | null) => void
    updateUserStatus: (status: string) => void
    savePhoto: (file: File) => void
    saveProfile: (profile: NewProfileType) => Promise<any>
}

type PathParamsType = {
    userId: string

}


type PropsType = MapPropsType & DispatchPropsType & RouteComponentProps<PathParamsType>;

type HooksType = {}
const ProfileHooks: React.FC<HooksType> = (props) => {
    const {id} = useParams<{ id: string }>()
    const dispatch = useDispatch();
    const profile = useSelector(getProfile)
    const status = useSelector(getStatus)
    const isAuth = useSelector(getIsAuth)
    const authorizedUserId = useSelector(getUserId)

    const getUserProfile = useCallback((userId: number | null) => {
        dispatch(getUserProfile(userId))
    }, [dispatch])
    const getUserStatus = useCallback((userId: number | null) => {
        dispatch(getUserStatus(userId))
    }, [dispatch])
    const updateUserStatus = useCallback((status: string) => {
        dispatch(updateUserStatus(status))
    }, [dispatch])
    const savePhoto = useCallback((photo: File) => {
        dispatch(savePhoto(photo))
    }, [])
    const saveProfile = useCallback(async (profile: NewProfileType): Promise<any> => {
        await dispatch(saveProfile(profile))
    }, [])


    useEffect(() => {
    }, [])


    return (
        <div>


        </div>);

}


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
            this.props.getUserProfile(userId);
            this.props.getUserStatus(userId);
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
                <Profile
                    {...this.props}
                    isOwner={!this.props.match.params.userId}
                    profile={this.props.profile}
                    status={this.props.status}
                    updateStatus={this.props.updateUserStatus}
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
    connect(mapStateToProps, {
        getUserProfile,
        getUserStatus,
        updateUserStatus,
        savePhoto,
        saveProfile
    }),
    withRouter,
    withAuthRedirect
)(ProfileContentContainerAPI);


