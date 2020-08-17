import React from 'react';
import {userType} from '../../Rdux/users-reducer';
import st from './Users.module.css';
import {v1} from 'uuid';

type PropsType = {
    users: Array<userType>
    followUser: (userId: string) => void
    unfollowUser: (userId: string) => void
    setUsers: (users: Array<userType>) => void
}


function Users(props: PropsType) {
    if (props.users.length === 1) {

        props.setUsers([
            {
                id: v1(),
                fullName: 'Ivan',
                surName: 'Pavlov',
                statusMessage: 'I\'m looking for  a friend',
                location: {
                    country: 'Russia',
                    city: 'Novosibirsk',
                },
                followed: true,
                photoUrl: 'https://studyinrussia.ru/images/pages/scientists/scientist-11.jpg'
            },
            {
                id: v1(),
                fullName: 'Maria',
                surName: 'Kuri',
                statusMessage: 'I want to go anywhere',
                location: {
                    country: 'China',
                    city: 'Beijing',
                },
                followed: true,
                photoUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQObWUi5sAB_3-910khJ0qaHHCTPMfqzMUw4Q&usqp=CAU'
            },
            {
                id: v1(),
                fullName: 'Stephen',
                surName: 'Hawking ',
                statusMessage: 'I\'m tired',
                location: {
                    country: 'Canada',
                    city: 'St.Torronto',
                },
                followed: false,
                photoUrl: 'https://avatars.mds.yandex.net/get-zen_doc/1880126/pub_5cdb288dd0418e00b317c23e_5cdb2890dfa62200b3a492ec/scale_1200'
            },

        ]);
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

                    <div>{u.fullName} {u.surName}</div>
                    <div>{u.statusMessage}</div>
                </span>
                    <span>
                    <div>{u.location.country}</div>
                    <div>{u.location.city}</div>
                </span>
                </div>
            )}
        </div>
    );


}


export default Users;
