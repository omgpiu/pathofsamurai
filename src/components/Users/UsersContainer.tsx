import UsersAPIComponent from './UsersAPIComponent';
import {RootStateType} from '../../Rdux/State';
import {connect} from 'react-redux';
import {followTC, getUsersTC, setPage, toggleFollowingProgress, unfollowTC, userType} from '../../Rdux/users-reducer';


type MapStatePropsType = {
    users: Array<userType>
    pageSize: number
    totalUsersCount: number
    currentPage: number
    isFetching: boolean
    followingInProgress: []
}

type MapDispatchPropsType = {
    // followUser: (userId: string) => void
    // unfollowUser: (userId: string) => void
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


const UsersContainer = connect<MapStatePropsType, MapDispatchPropsType, {}, RootStateType>(mapStateToProps, {

    setPage,
    getUsersTC,
    toggleFollowingProgress,
    followTC,
    unfollowTC


})(UsersAPIComponent);

export default UsersContainer;