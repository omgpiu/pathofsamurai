import React from 'react';
import {userType} from '../../Rdux/users-reducer';
import axios from 'axios';
import st from './Users.module.css';
import commonAvatar from '../../photo/commonAvatar.png';

type PropsType = {
    users: Array<userType>
    followUser: (userId: string) => void
    unfollowUser: (userId: string) => void
    setUsers: any
    photoUrl: string

}

class UsersC extends React.Component<any, any> {


    componentDidMount() {
        axios.get('https://social-network.samuraijs.com/api/1.0/users').then(response => {
            this.props.setUsers(response.data.items);
        });
    }


    render() {
        debugger
        return (

            <div>

                {this.props.users.map((u: any) => {
                        debugger
                        return (
                            <div key={u.id}>
                                <span>
                                    <div>
                                        <img src={u.photos.small != null
                                            ? u.photos.small
                                            : commonAvatar} className={st.userAvatar} alt="avatar"/>
                                    </div>
                                    <div>
                                        {u.followed ?
                                            <button onClick={() => {
                                                this.props.unfollowUser(u.id);
                                            }}>Unfollow</button> :
                                            <button onClick={() => {
                                                this.props.followUser(u.id);
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
                        );
                    }
                )}
            </div>
        );

    }

}


export default UsersC;
