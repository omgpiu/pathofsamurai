
import UsersAPIComponent from './UsersAPIComponent';
import {RootStateType} from '../../Rdux/State';
import {connect} from 'react-redux';
import {
    followUser,
    setPage,
    setTotalUsersCount,
    setUsers,
    toggleIsFetching,
    unfollowUser,
    userType
} from '../../Rdux/users-reducer';


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
    setUsers: (users: Array<userType>) => void
    setPage: (currentPage: number) => void
    setTotalUsersCount: (totalCount: number) => void
    toggleIsFetching: (isFetching: boolean) => void


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
// let mapDispatchToProps = (dispatch: (action: ActionType) => void): MapDispatchPropsType => {
//     return {
//         followUser: (userId: string) => {
//             dispatch(followAC(userId));
//         },
//         unfollowUser: (userId: string) => {
//             dispatch(unfollowAC(userId));
//         },
//         setUsers: (users: Array<userType>) => {
//             dispatch(setUsersAC(users));
//         },
//         setPage: (pageNumber: number) => {
//             dispatch(setPageAC(pageNumber));
//         },
//         setTotalUsersCount: (totalCount: number) => {
//             dispatch(setTotalUsersCountAC(totalCount));
//         },
//         toggleIsFetching: (isFetching: boolean) => {
//             dispatch(toggleIsFetchingAC(isFetching));
//         },
//
//     };
// };

const UsersContainer = connect<MapStatePropsType, MapDispatchPropsType, {}, RootStateType>(mapStateToProps, {
    followUser,
    unfollowUser,
    setUsers,
    setPage,
    setTotalUsersCount,
    toggleIsFetching,

})(UsersAPIComponent);

export default UsersContainer;