import {v1} from 'uuid';
import {ActionType, PostType} from './Types';
import {Dispatch} from 'react';
import {usersAPI} from '../API/users-api';
import {profileAPI} from '../API/profile-api';
import profileReducer, {addPostActionCreator, deletePostAC, updateNewPostTextActionCreator} from './profile-reducer';
let state =  {
    postData: [
        { id: '1', message: 'one ', likesCount: 14},
        {id: v1(), message: 'two', likesCount: 14},
        {id: v1(), message: 'three', likesCount: 14},
        {id: v1(), message: 'four ', likesCount: 10},
    ],
};

// it('new post should de added',()=>{
//     //test data
//     //@ts-ignore
//
//     let action = updateNewPostTextActionCreator('it-kamasutra.com')
//
//
//     // do something
//     //@ts-ignore
//     let newState = profileReducer(state,action)
//     // 3 expectation
//
//
//     expect(newState.postData[5].message).toBe('it-kamasutra.com')
// })
it('new post should de added',()=>{
    //test data
    //@ts-ignore
    let action = addPostActionCreator()

    // do something
    //@ts-ignore
    let newState = profileReducer(state,action)
    // 3 expectation
    expect(newState.postData.length).toBe(5);


})
it('decrement messages',()=>{
    //test data
    //@ts-ignore
    let action = deletePostAC('1')

    // do something
    //@ts-ignore
    let newState = profileReducer(state,action)
    // 3 expectation
    expect(newState.postData.length).toBe(3);


})
it(`after deleting length should not be less if id isn't correct`,()=>{
    //test data
    //@ts-ignore
    let action = deletePostAC(10000)

    // do something
    //@ts-ignore
    let newState = profileReducer(state,action)
    // 3 expectation
    expect(newState.postData.length).toBe(4);


})