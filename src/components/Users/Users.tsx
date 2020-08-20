import React from 'react';
import {userType} from '../../Rdux/users-reducer';
import st from './Users.module.css';
import axios from 'axios';

type PropsType = {
    users: Array<userType>
    followUser: (userId: string) => void
    unfollowUser: (userId: string) => void
    setUsers: any

}


function Users(props: PropsType) {


    if (props.users.length === 1) {

        axios.get('https://social-network.samuraijs.com/api/1.0/users').then(response => {
            props.setUsers(response.data);
        });


    }

    return (

        <div>
            {props.users.map(u =>
                <div key={u.id}>
                <span>
                    <div>
                        <img className={st.userAvatar} src={u.photoUrl} alt="userPhoto"/>
                    </div>
                    <div>
                        {u.followed ?
                            <button onClick={() => {
                                props.unfollowUser(u.id);
                            }}>Unfollow</button> :
                            <button onClick={() => {
                                props.followUser(u.id);
                            }}>Follow</button>}
                                            </div>
                </span>
                    <span>

                    <div>{u.name} </div>
                    <div>{u.status}</div>
                </span>
                    <span>
                    <div>{'u.location.country'}</div>
                    <div>{'u.location.city'}</div>
                </span>
                </div>
            )}
        </div>
    );


}


export default Users;
