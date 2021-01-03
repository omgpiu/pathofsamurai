import {v1} from 'uuid';
import profileReducer, {profileActions} from './profile-reducer';
import {ContactsType, NewProfileType, PhotosType, userType} from "../Types/Types";


let state = {
    postData: [
        {
            id: '1',
            message: 'Hello friendlo friendlo friendlo friendlo friendlo friendlo friendlo friendlo friendlo friendlo friendlo friendlo friend',
            likesCount: 14
        },
        {id: '2', message: 'Hello friend', likesCount: 14},
        {id: '3', message: 'Hello friend', likesCount: 14},
        {id: '4', message: 'Hello ', likesCount: 10},
        {id: '5', message: 'Hello ', likesCount: 10}],
    profile: null as NewProfileType | null,
    status: ''
};

const MyUser: NewProfileType = {
    userId: 1079,
    lookingForAJob: false,
    lookingForAJobDescription: 'Im looking for a job',
    aboutMe: 'Im a fun guy',
    fullName: 'Alex',
    contacts: {
        facebook: 'string',
        website: 'string',
        vk: 'string',
        twitter: 'string',
        instagram: 'string',
        youtube: 'string',
        github: 'string',
        mainLink: 'string',
    },
    photos: {
        small: 'string | null',
        large: 'string | null'
    }
}


it('new post should de added', () => {
    //test data
    let action = profileActions.addPostActionCreator('hello');

    // do something
    let newState = profileReducer(state, action);
    expect(newState.postData.length).toBe(6);


});
it('decrement messages', () => {
    //test data
    let action = profileActions.deletePostAC('1');

    // do something
    let newState = profileReducer(state, action);
    // 3 expectation
    expect(newState.postData.length).toBe(4);


});
it(`after deleting length should not be less if id isn't correct`, () => {
    //test data

    let action = profileActions.deletePostAC('10000');

    // do something
    let newState = profileReducer(state, action);
    // 3 expectation
    expect(newState.postData.length).toBe(5);
});
it('change the status', () => {
    let newStatus = profileActions.setUserStatus('Hello world')
    let newState = profileReducer(state, newStatus)
    expect(newState.status).toBe('Hello world')
})
it('set new user id', () => {
    const changeId = (user: NewProfileType, newId: number) => {
        return {
            ...user,
            userId: newId

        }

    }
    let newUser = changeId(MyUser, 20)
    let action = profileActions.setUserProfile(newUser)
    let newState = profileReducer(state, action)
    expect(newState.profile?.userId).toBe(20)
})