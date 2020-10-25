import UsersAPIComponent from './UsersAPIComponent';
import {RootStateType} from '../../Rdux/State';
import {connect} from 'react-redux';
import {followTC, getUsersTC, setPage, toggleFollowingProgress, unfollowTC, userType} from '../../Rdux/users-reducer';
import {withAuthRedirect} from '../../HOC/WithAuthRedirect';


type MapStatePropsType = {
    users: Array<userType>
    pageSize: number
    totalUsersCount: number
    currentPage: number
    isFetching: boolean
    followingInProgress: Array<string>
}

type MapDispatchPropsType = {

    setPage: (currentPage: number) => void
    toggleFollowingProgress: (isFetching: boolean, userId: string) => void
    getUsersTC: (currentPage: number, pageSize: number) => void
    followTC: (userId: string) => void
    unfollowTC: (userId: string) => void


}

let mapStateToProps = (state: RootStateType): MapStatePropsType => {
    return {
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalUsersCount: state.usersPage.totalUsersCount,
        currentPage: state.usersPage.currentPage,
        isFetching: state.usersPage.isFetching,
        followingInProgress: state.usersPage.followingInProgress

    };
};
let withRedirect = withAuthRedirect(UsersAPIComponent);

const UsersContainer = connect<MapStatePropsType, MapDispatchPropsType, {}, RootStateType>(mapStateToProps, {

    setPage,
    getUsersTC,
    toggleFollowingProgress,
    followTC,
    unfollowTC


})(withRedirect);

export default UsersContainer;