import usersReducer, {followTC, StateProfile, usersAction} from "./users-reducer";

let state: StateProfile;
beforeEach(() => {
    state = {
        users: [{
            id: 1,
            followed: true,
            location: {
                country: 'Russia',
                city: 'Chita'
            },
            name: 'Alex1',
            photos: {
                small: null,
                large: null
            },
            photoUrl: 'Url',
            status: "I'm an engineer"

        },
            {
                id: 2,
                followed: false,
                location: {
                    country: 'China',
                    city: 'Linzhou'
                },
                name: 'Alex2',
                photos: {
                    small: null,
                    large: null
                },
                photoUrl: 'Url',
                status: "I'm an english teacher"
            },
            {
                id: 3,
                followed: false,
                location: {
                    country: 'Russia',
                    city: 'Saint-Petersburg'
                },
                name: 'Alex3',
                photos: {
                    small: null,
                    large: null
                },
                photoUrl: 'Url',
                status: "I'm an engineer"
            }],
        pageSize: 10,
        totalUsersCount: 1,
        currentPage: 1,
        isFetching: false,
        followingInProgress: [],
    };
})

test('follow users success', () => {
    const newState = usersReducer(state, usersAction.followUser(2))
    expect(newState.users[1].followed).toBeTruthy()
    expect(newState.users[2].followed).toBeFalsy()
})
test('unfollow users success', () => {
    const newState = usersReducer(state, usersAction.unfollowUser(1))
    expect(newState.users[0].followed).toBeFalsy()
    expect(newState.users[1].followed).toBeFalsy()
})
