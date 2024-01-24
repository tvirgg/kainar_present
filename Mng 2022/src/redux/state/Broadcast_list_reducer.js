const INITIALIZED_SUCCESS = 'INITIALIZED_SUCCESS';
let initialState = {
    videos:[
]
};

const Broadcast_list_Reducer = (state = initialState, action) => {
    switch (action.type) {
        default:
            return state;
    }
}
export const initializeApp = (statement) => ({type: INITIALIZED_SUCCESS, statement : statement});
export default Broadcast_list_Reducer;
