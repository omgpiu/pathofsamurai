import {BaseThunkType, InferActionsTypes} from '../Types/Types';
import {getAuthUserDataTC} from './auth-reducer';


const SET_IS_INITIALIZED = 'SET_IS_INITIALIZED';


let initialState = {
    isInitialized: false
};
type  InitialStateType = typeof initialState
const appReducer = (state: InitialStateType = initialState, action: appActionsType): InitialStateType => {

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

export const appActions = {
    setInitialized: () => ({type: SET_IS_INITIALIZED} as const)
};


// export const setInitialized = () => ({type: SET_IS_INITIALIZED} as const);


export const setInitializedTC = (): BaseThunkType => (dispatch) => {

    let promise = dispatch(getAuthUserDataTC());
    Promise.all([promise]).then(() => {
        dispatch(appActions.setInitialized());

    });
};
// export type setInitializedType = ReturnType<typeof setInitialized>
export type appActionsType = InferActionsTypes<typeof appActions>


export default appReducer;