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
    pageSize: number
    totalUsersCount: number
    currentPage: number
    setPage: (currentPage: number) => void
    setTotalUsersCount: any

}

class UsersC extends React.Component<PropsType> {


    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`)
            .then(response => {
                this.props.setUsers(response.data.items);
                this.props.setTotalUsersCount(response.data.totalCount);
            });
    }

    onPageChanged = (pageNumber: number) => {
        this.props.setPage(pageNumber);
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`)
            .then(response => {
                this.props.setUsers(response.data.items);

            });
    };

    render() {
        let pagesCount = Math.ceil(this.props.totalUsersCount / this.props.pageSize);
        let pages = [];
        for (let i = 1; i <= pagesCount; i++) {
            pages.push(i);
        }
        return (
            <div>
                <div>
                    {pages.map(p => {

                        return <span onClick={(e) => {
                            this.onPageChanged(p);
                        }}
                        className={this.props.currentPage === p ? st.selected : st.unselected}>{p}</span>;
                    })}

                </div>
                {this.props.users.map((u: userType) => {
                        return (
                            <div key={u.id}>
                                <span>
                                    <div>
                                        <img src={u.photos.small != null
                                            ? u.photos.small
                                            : commonAvatar} className={st.userAvatar} alt="avatar"/>
                                    </div>
                                    <div>
                                        {u.followed ? <button onClick={() => {
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
