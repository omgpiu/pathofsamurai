import React from 'react';
import UsersC from './UsersС';
import {ActionType, RootStateType} from '../../Rdux/State';
import {connect} from 'react-redux';
import {followAC, setUsersAC, unfollowAC, userType} from '../../Rdux/users-reducer';


let mapStateToProps = (state: RootStateType) => {
    return {
        users: state.usersPage.users // Спросить техподдержку
    };
};
let mapDispatchToProps = (dispatch: (action: ActionType) => void) => {
    return {
        followUser: (userId: string) => {
            dispatch(followAC(userId));
        },
        unfollowUser: (userId: string) => {
            dispatch(unfollowAC(userId));
        },
        setUsers: (users: Array<userType>) => {
            dispatch(setUsersAC(users));
        }
    };

};


const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(UsersC);


export default UsersContainer;