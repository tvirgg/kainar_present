import {setlocalstorage} from "./App_reducer";

const SETCURRENT_PHOTO = 'SETCURRENT_PHOTO';
const SETCURRENT_CHATMODE = 'SETCURRENT_CHATMODE';
const SETCURRENT_CHATMODELID = 'SETCURRENT_CHATMODELID';
const SETCURRENT_Videowatch = 'SETCURRENT_Videowatch';
let initialState = {
    current_photo: {
        url: 'http://167.71.38.182/images/1.png',
        id:1
    },
    chatmode: true,
    current_chat_model_id: '1',
    current_video: {
        country: {
            id: '1',
            name: 'Не указано'
        },
        animal: '',
        video_name: '',
        uploader_name: '',
        likes_amount: '',
        views_amount: '',
        cover_img: '',
        video_id: '',
        coments: []
    }
};

const BroadcastReducer = (state = initialState, action) => {
    switch (action.type) {
        case SETCURRENT_PHOTO:
            return {
                ...state,
                current_photo: action.statement
            }
        case SETCURRENT_CHATMODE:
            return {
                ...state,
                chatmode: action.statement
            }
        case SETCURRENT_Videowatch:
            localStorage.setItem('current_video', JSON.stringify(action.statement));
            return {
                ...state,
                current_video: action.statement
            }
        case SETCURRENT_CHATMODELID:
            return {
                ...state,
                current_chat_model_id: action.statement
            }
        default:
            return state;
    }
}
export const SetCurrentphoto = (statement) => ({type: SETCURRENT_PHOTO, statement : statement});
export const SetCurrentchatmode = (statement) => ({type: SETCURRENT_CHATMODE, statement : statement});
export const SETCURRENT_CHATMODELIDAC = (statement) => ({type: SETCURRENT_CHATMODELID, statement : statement});
export const SETCURRENT_VideowatchAC = (statement) => ({type: SETCURRENT_Videowatch, statement : statement});
export default BroadcastReducer;
