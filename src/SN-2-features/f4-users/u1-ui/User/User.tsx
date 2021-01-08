import React from 'react';

import st from '../Users.module.css';
import commonAvatar from '../../../../photo/commonAvatar.png';
import {Link} from 'react-router-dom';
import {userType} from '../../../../Types/Types';
import {PROFILE_PATH} from '../../../../SN-3-common/routes/Routes';


type UserType = {
    user: userType
    followingInProgress: Array<number>
    followTC: (userId: number) => void
    unfollowTC: (userId: number) => void

}

const User: React.FC<UserType> = React.memo(({user, followingInProgress, followTC, unfollowTC}) => {

    const unfollow = () => {
        unfollowTC(user.id);
    }
    const follow = () => {
        followTC(user.id);
    }
    const disable = followingInProgress.some(id => id === user.id)
    return (
        <div key={user.id}>
                                <span>
                                    <div>
                                        <Link to={PROFILE_PATH + '/' + user.id}>
                                        <img src={user.photos.small != null
                                            ? user.photos.small
                                            : commonAvatar} className={st.userAvatar} alt="avatar"/>
                                            </Link>
                                    </div>
                                    <div>
                                        {user.followed ?
                                            <button disabled={disable}
                                                    onClick={unfollow}>Unfollow</button> :
                                            <button disabled={disable}
                                                    onClick={follow}>Follow</button>}
                                    </div>
                                </span>
            <span>
                                    <div> <b>{user.name}</b></div>
                <div><b>Status :</b> <span>{user.status || 'What are you doing?'}</span></div>
                                </span>

        </div>
    );
})


export default User;
