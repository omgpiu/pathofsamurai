import {BaseThunkType, InferActionsTypes} from '../Types/Types';
import {getAuthUserDataTC} from './auth-reducer';


const initialState = {
    isInitialized: false
};

const appReducer = (state: InitialStateType = initialState, action: ActionsType): InitialStateType => {
    switch (action.type) {
        case 'APP/SET_IS_INITIALIZED':
            return {
                ...state,
                isInitialized: true,
            };
        default:
            return state;
    }
};

export const appActions = {
    setInitialized: () => ({type: 'APP/SET_IS_INITIALIZED'} as const)
};

export const setInitializedTC = (): ThunkType => async (dispatch) => {
    try {
        await dispatch(getAuthUserDataTC());
        dispatch(appActions.setInitialized());
    } catch (e) {
        console.log(e);
        console.log('Some error with setInitializedTC');
    }

};
type ActionsType = InferActionsTypes<typeof appActions>
type  InitialStateType = typeof initialState
type ThunkType = BaseThunkType<ActionsType>

export default appReducer;
