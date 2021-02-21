const INITIALIZED_SUCCESS = 'INITIALIZED_SUCCESS';

let initialState = {
    initialized: false
};

const AppReducer = (state = initialState, action) => {
    switch (action.type) {
        case INITIALIZED_SUCCESS:
            return {
                ...state,
                initialized: action.statement
            }

        default:
            return state;
    }
}
export const initializeApp = (statement) => ({type: INITIALIZED_SUCCESS, statement : statement});
export default AppReducer;