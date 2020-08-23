import React from 'react';
import UsersC from './UsersС';
import {ActionType, RootStateType} from '../../Rdux/State';
import {connect} from 'react-redux';
import {followAC, setUsersAC, unfollowAC, userType} from '../../Rdux/users-reducer';


type MapStatePropsType = {
    users: Array<userType>
}

type MapDispatchPropsType = {
    followUser:(userId: string)=> void
    unfollowUser:(userId: string)=> void
    setUsers:(users: Array<userType>)=> void
}

let mapStateToProps = (state: RootStateType):MapStatePropsType => {
    return {
        users: state.usersPage.users, // Спросить техподдержку,
    };
};
let mapDispatchToProps = (dispatch: (action: ActionType) => void):MapDispatchPropsType => {
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

const UsersContainer = connect<MapStatePropsType, MapDispatchPropsType,{},RootStateType >(mapStateToProps, mapDispatchToProps)(UsersC);


export default UsersContainer;