import React from 'react';

import st from './User.module.css';
import commonAvatar from '../../../../photo/commonAvatar.png';
import {Link} from 'react-router-dom';
import {userType} from '../../../../Types/Types';
import {PROFILE_PATH} from '../../../../SN-3-common/routes/Routes';
import {Button} from 'antd';
import {MinusCircleOutlined, PlusCircleOutlined} from '@ant-design/icons';


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
        <div key={user.id} className={st.wrapper}>


            <div>
                <Link to={PROFILE_PATH + '/' + user.id}>
                    <img src={user.photos.small != null
                        ? user.photos.small
                        : commonAvatar} className={st.userAvatar} alt="avatar"/>
                </Link>
            </div>

            <span> <b>Name:</b> {user.name}</span>
            <div>
                <b>Status :</b> <span>{user.status || 'What are you doing?'}</span>
            </div>

            <div>
                {user.followed ?
                    <Button type="primary" onClick={unfollow} disabled={disable}
                            icon={<MinusCircleOutlined/>}>
                        Unfollow
                    </Button>
                    :
                    <Button type="primary" onClick={follow} disabled={disable}
                            icon={<PlusCircleOutlined/>}
                    >
                        Follow
                    </Button>
                }
            </div>

        </div>
    );
})


export default User;
