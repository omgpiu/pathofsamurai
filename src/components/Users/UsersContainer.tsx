import UsersAPIComponent from './UsersAPIComponent';
import {RootStateType} from '../../Rdux/State';
import {connect} from 'react-redux';
import {followUser, getUsersTC, setPage, unfollowUser, userType} from '../../Rdux/users-reducer';


type MapStatePropsType = {
    users: Array<userType>
    pageSize: number
    totalUsersCount: number
    currentPage: number
    isFetching: boolean
}

type MapDispatchPropsType = {
    followUser: (userId: string) => void
    unfollowUser: (userId: string) => void

    setPage: (currentPage: number) => void


    getUsersTC: (currentPage: number, pageSize: number) => void


}

let mapStateToProps = (state: RootStateType): MapStatePropsType => {
    return {
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalUsersCount: state.usersPage.totalUsersCount,
        currentPage: state.usersPage.currentPage,
        isFetching: state.usersPage.isFetching

    };
};


const UsersContainer = connect<MapStatePropsType, MapDispatchPropsType, {}, RootStateType>(mapStateToProps, {
    followUser,
    unfollowUser,
    setPage,
    getUsersTC


})(UsersAPIComponent);

export default UsersContainer;