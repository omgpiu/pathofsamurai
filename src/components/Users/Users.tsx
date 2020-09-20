import React from 'react';
import {userType} from '../../Rdux/users-reducer';
import st from './Users.module.css';
import commonAvatar from '../../photo/commonAvatar.png';
import {NavLink} from 'react-router-dom';
import axios from 'axios';


export type PropsUsersType = {
    users: Array<userType>
    followUser: (userId: string) => void
    unfollowUser: (userId: string) => void
    pageSize: number
    totalUsersCount: number
    currentPage: number
    onPageChanged: (pageNumber: number) => void

}

function Users(props: PropsUsersType) {
    let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize);
    let pages = [];
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i);
    }
    return (

        <div>
            <div>
                {pages.map((p, i) => {
                    return <span key={i} onClick={(e) => {
                        props.onPageChanged(p);
                    }}
                                 className={props.currentPage === p ? st.selected : st.unselected}>{p}</span>;
                })}

            </div>
            {props.users.map((u: userType) => {
                    return (
                        <div key={u.id}>
                                <span>
                                    <div>
                                        <NavLink to={'/profile/' + u.id}>
                                        <img src={u.photos.small != null
                                            ? u.photos.small
                                            : commonAvatar} className={st.userAvatar} alt="avatar"/>
                                            </NavLink>
                                    </div>
                                    <div>
                                        {u.followed ? <button onClick={() => {
                                                axios.delete(`https://social-network.samuraijs.com/api/1.0/follow/${u.id}`,
                                                    {
                                                        withCredentials: true,
                                                        headers: {
                                                            'API-KEY': '78abceff-cb7c-4815-8b56-016c67d0625d'
                                                        }
                                                    })
                                                    .then(response => {
                                                        if (response.data.resultCode === 0) {

                                                            props.unfollowUser(u.id);
                                                        }
                                                    });


                                            }}>Unfollow</button> :
                                            <button onClick={() => {
                                                axios.post(`https://social-network.samuraijs.com/api/1.0/follow/${u.id}`, {},
                                                    {
                                                        withCredentials: true,
                                                        headers: {
                                                            'API-KEY': '78abceff-cb7c-4815-8b56-016c67d0625d'
                                                        }

                                                    })
                                                    .then(response => {
                                                        if (response.data.resultCode === 0) {

                                                            props.followUser(u.id);
                                                        }
                                                    });


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


export default Users;
