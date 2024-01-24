const INITIALIZED_SUCCESS = 'INITIALIZED_SUCCESS';
const CURRENTPATH = 'CURRENTPATH';

let initialState = {
    initialized: false,
    currentPath: 'intobody_imp'
};

const AppReducer = (state = initialState, action) => {
    switch (action.type) {
        case INITIALIZED_SUCCESS:
            return {
                ...state,
                initialized: action.statement
            }
        case CURRENTPATH:
            return {
                ...state,
                currentPath: action.statement
            }

        default:
            return state;
    }
}
export const initializeApp = (statement) => ({type: INITIALIZED_SUCCESS, statement : statement});
export const SetCurrentPath = (statement) => ({type: CURRENTPATH, statement : statement});
export default AppReducer;