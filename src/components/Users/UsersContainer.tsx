import React from 'react';
import Users from './Users';
import {ActionType, RootStateType} from '../../Rdux/State';
import {connect} from 'react-redux';
import {followAC, setUsersAC, unfollowAC, usersType} from '../../Rdux/users-reducer';


let mapStateToProps = (state: RootStateType) => {
    return {
       users: state.usersPage.users
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
        setUsers: (users: usersType) => {
            dispatch(setUsersAC(users));
        }
    };

};


const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(Users);


export default UsersContainer;