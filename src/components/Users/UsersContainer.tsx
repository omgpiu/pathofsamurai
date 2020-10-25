import UsersAPIComponent from './UsersAPIComponent';
import {RootStateType} from '../../Rdux/State';
import {connect} from 'react-redux';
import {
    followUser,
    getUsersTC,
    setPage,
    toggleFollowingProgress,
    unfollowUser,
    userType
} from '../../Rdux/users-reducer';


type MapStatePropsType = {
    users: Array<userType>
    pageSize: number
    totalUsersCount: number
    currentPage: number
    isFetching: boolean
    followingInProgress:[]
}

type MapDispatchPropsType = {
    followUser: (userId: string) => void
    unfollowUser: (userId: string) => void
    setPage: (currentPage: number) => void
    toggleFollowingProgress: (isFetching: boolean,userId:string) => void
    getUsersTC: (currentPage: number, pageSize: number) => void


}

let mapStateToProps = (state: RootStateType): MapStatePropsType => {
    return {
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalUsersCount: state.usersPage.totalUsersCount,
        currentPage: state.usersPage.currentPage,
        isFetching: state.usersPage.isFetching,
        followingInProgress:state.usersPage.followingInProgress

    };
};


const UsersContainer = connect<MapStatePropsType, MapDispatchPropsType, {}, RootStateType>(mapStateToProps, {
    followUser,
    unfollowUser,
    setPage,
    getUsersTC,
    toggleFollowingProgress,


})(UsersAPIComponent);

export default UsersContainer;