import React from 'react';
import {v1} from 'uuid';
import {ActionType} from './State';

const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';

export type followACType = {
    type: typeof FOLLOW
    userId:string
}
export type unfollowACType = {
    type: typeof UNFOLLOW
    userId:string
 }
let initialState = {
    users: [
        {
            id: v1(),
            fullName: 'Sasha',
            surName: 'Dubrovskii',
            location: {
                country: 'Russia',
                city: 'St.Peterburg',
            },
            statusMessage: 'I\'m looking for an IT job',
            followed: true
        }, {
            id: v1(),
            fullName: 'Petya',
            surName: 'Reznichenko',
            statusMessage: 'I\'m looking for  a friend',
            location: {
                country: 'Russia',
                city: 'Novosibirsk',
            },
            followed: true,
        }, {
            id: v1(),
            fullName: 'Masha',
            surName: 'Petrenko',
            statusMessage: 'I want to go anywhere',
            location: {
                country: 'China',
                city: 'Beijing',
            },
            followed: true,
        }, {
            id: v1(),
            fullName: 'Jhon',
            surName: 'Smit',
            statusMessage: 'I\'m tired',
            location: {
                country: 'Canada',
                city: 'St.Torronto',
            },
            followed: false,
        },
    ]

};
type StateProfile = typeof initialState
const usersReducer = (state: StateProfile = initialState, action: ActionType): StateProfile => {

        switch (action.type) {
           case FOLLOW:
          return {...state,users: state.users.map(user=>{
              if(user.id=action.userId){
                  return {...user,followed: true }
              }
              return user
              }),

            }
            case UNFOLLOW:
                return {...state,users: state.users.map(user=>{
                        if(user.id=action.userId){
                            return {...user,followed: false }
                        }
                        return user
                    }),

                }
            default :
                return state;
        }


    }
;
export const followAC = (userId:string): followACType => ({type: FOLLOW,userId});
export const unfollowAC = (userId:string): unfollowACType => ({type: UNFOLLOW,userId});


export default usersReducer;