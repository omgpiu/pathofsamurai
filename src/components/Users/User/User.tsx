import React from 'react';

import st from '../Users.module.css';
import commonAvatar from '../../../photo/commonAvatar.png';
import {NavLink} from 'react-router-dom';
import {userType} from '../../../Types/Types';


type UserType = {
    user: userType
    followingInProgress: Array<number>
    followTC: (userId: number) => void
    unfollowTC: (userId: number) => void

}

const User: React.FC<UserType> = React.memo( ({user, followingInProgress, followTC, unfollowTC}) => {


    return (
        <div key={user.id}>
                                <span>
                                    <div>
                                        <NavLink to={'/profile/' + user.id}>
                                        <img src={user.photos.small != null
                                            ? user.photos.small
                                            : commonAvatar} className={st.userAvatar} alt="avatar"/>
                                            </NavLink>
                                    </div>
                                    <div>
                                        {user.followed ?
                                            <button disabled={followingInProgress.some(id => id === user.id)}
                                                    onClick={() => {
                                                        unfollowTC(user.id);
                                                    }}>Unfollow</button> :
                                            <button disabled={followingInProgress.some(id => id === user.id)}
                                                    onClick={() => {
                                                        followTC(user.id);
                                                    }}>Follow</button>}
                                    </div>
                                </span>
            <span>
                                    <div>{user.name} </div>
                                    <div>{user.status}</div>
                                </span>
            <span>
                                    <div>{'u.location.country'}</div>
                                    <div>{'u.location.city'}</div>
                                </span>
        </div>
    );
})


export default User;
