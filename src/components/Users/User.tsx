import React from 'react';

import st from './Users.module.css';
import commonAvatar from '../../photo/commonAvatar.png';
import {NavLink} from 'react-router-dom';
import {userType} from '../../Rdux/Types';


export type PropsUsersType = {

    user: userType
    pageSize: number
    totalUsersCount: number
    currentPage: number
    onPageChanged: (pageNumber: number) => void
    toggleFollowingProgress: (isFetching: boolean, userId: number) => void
    followingInProgress: Array<number>
    followTC: (userId: number) => void
    unfollowTC: (userId: number) => void


}

const User: React.FC<PropsUsersType> = (props) => {

    return (
        <div key={props.user.id}>
                                <span>
                                    <div>
                                        <NavLink to={'/profile/' + props.user.id}>
                                        <img src={ props.user.photos.small != null
                                            ?  props.user.photos.small
                                            : commonAvatar} className={st.userAvatar} alt="avatar"/>
                                            </NavLink>
                                    </div>
                                    <div>
                                        { props.user.followed ?
                                            <button disabled={props.followingInProgress.some(id => id ===  props.user.id)}
                                                    onClick={() => {
                                                        props.unfollowTC( props.user.id);
                                                    }}>Unfollow</button> :
                                            <button disabled={props.followingInProgress.some(id => id ===  props.user.id)}
                                                    onClick={() => {
                                                        props.followTC( props.user.id);
                                                    }}>Follow</button>}
                                    </div>
                                </span>
            <span>
                                    <div>{ props.user.name} </div>
                                    <div>{ props.user.status}</div>
                                </span>
            <span>
                                    <div>{'u.location.country'}</div>
                                    <div>{'u.location.city'}</div>
                                </span>
        </div>
    );
};


export default User;
