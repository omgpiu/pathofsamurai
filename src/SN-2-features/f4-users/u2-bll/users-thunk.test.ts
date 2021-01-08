import {followTC, unfollowTC, usersAction} from "./users-reducer";
import {APIResponseType, ResultCodesEnum} from '../../../Types/api-types';
import {usersAPI} from '../u3-dal/users-api';

jest.mock('../API/users-api')

const userAPIMock = usersAPI as jest.Mocked<typeof usersAPI>
const dispatchMock = jest.fn();
const getStateMock = jest.fn();
beforeEach(() => {
    dispatchMock.mockClear();
    getStateMock.mockClear();
    userAPIMock.startFollowUsers.mockClear();
    userAPIMock.startUnfollowUsers.mockClear();
})
const result: APIResponseType = {
    resultCode: ResultCodesEnum.Success,
    messages: [],
    data: {}
}
userAPIMock.startFollowUsers.mockReturnValue(Promise.resolve(result))
userAPIMock.startUnfollowUsers.mockReturnValue(Promise.resolve(result))


test('thunk followTC', async () => {

    try {
        const thunk = followTC(1079)
        await thunk(dispatchMock, getStateMock, {})
    } catch (e) {

    }


    expect(dispatchMock).toBeCalledTimes(3)
    expect(dispatchMock).toHaveBeenNthCalledWith(1, usersAction.toggleFollowingProgress(true, 1079))
    expect(dispatchMock).toHaveBeenNthCalledWith(2, usersAction.followUser(1079))
    expect(dispatchMock).toHaveBeenNthCalledWith(3, usersAction.toggleFollowingProgress(false, 1079))
})
test('thunk unfollow', async () => {
    const thunk = unfollowTC(1)

    await thunk(dispatchMock, getStateMock, {})

    expect(dispatchMock).toBeCalledTimes(3)
    expect(dispatchMock).toHaveBeenNthCalledWith(1, usersAction.toggleFollowingProgress(true, 1))
    expect(dispatchMock).toHaveBeenNthCalledWith(2, usersAction.unfollowUser(1))
    expect(dispatchMock).toHaveBeenNthCalledWith(3, usersAction.toggleFollowingProgress(false, 1))
})