import {ActionType, ThunkType} from './Types';
import {getAuthUserDataTC} from './auth-reducer';
import {ThunkDispatch} from 'redux-thunk';
import {AppRootStateType} from './redux-store';


const SET_IS_INITIALIZED = 'SET_IS_INITIALIZED';


let initialState = {
    isInitialized: false
};
type  InitialStateType = typeof initialState
const appReducer = (state: InitialStateType = initialState, action: ActionType): InitialStateType => {

    switch (action.type) {
        case SET_IS_INITIALIZED:
            return {
                ...state,
                isInitialized: true,
            };

        default:
            return state;
    }
};

export const setInitialized = () => ({type: SET_IS_INITIALIZED} as const);


export const setInitializedTC = (): ThunkType => (dispatch: ThunkDispatch<AppRootStateType, unknown, ActionType>) => {

    let promise = dispatch(getAuthUserDataTC());
    Promise.all([promise]).then(() => {
        dispatch(setInitialized());

    });
};
export type setInitializedType = ReturnType<typeof setInitialized>


export default appReducer;