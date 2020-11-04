import {AppRootStateType} from './redux-store';
import {createSelector} from 'reselect';


const getUsersSelector = (state:AppRootStateType)=>{
    return state.usersPage.users
}
// export const getUsersDoSomethingSelector = (state:AppRootStateType)=>{
//     return getUsersSelector(state).filter(u=>true)
// }

export const getUsers = createSelector(getUsersSelector, (users)=>{
 return   users.filter(u=>true)
}) // пример

export const getPageSize = (state:AppRootStateType)=>{
    return state.usersPage.pageSize
}

export const getTotalUsers = (state:AppRootStateType)=>{
    return state.usersPage.totalUsersCount
}
export const getCurrentPage = (state:AppRootStateType)=>{
    return state.usersPage.currentPage
}

export const getIsFetching = (state:AppRootStateType)=>{
    return state.usersPage.isFetching
}
export const getFollowingInProgress = (state:AppRootStateType)=>{
    return state.usersPage.followingInProgress
}

