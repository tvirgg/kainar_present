import {authAPI} from "../../api/api";
import {isAUTHAC, SET_ISRENDERAC} from "./App_reducer";

const SETCURRENT_DATA = 'SETCURRENT_DATA';
const SETCURRENT_PHOTO = 'SETCURRENT_PHOTO';
const SETCURRENT_ALBUM = 'SETCURRENT_ALBUM';
const SETCURRENT_ALBUM_CONTAIN = 'SETCURRENT_ALBUM_CONTAIN';
const SETCURRENT_ADD_NEW_ALMUB = 'SETCURRENT_ADD_NEW_ALMUB';
const SETCURRENT_IS_ADD_NEW_ALMUB = 'SETCURRENT_IS_ADD_NEW_ALMUB';
const SET_PATH = 'SET_PATH';
const SET_SELECTEDALBUMES = 'SET_SELECTEDALBUMES';
const SET_SELECTEDFRIENDS = 'SET_SELECTEDFRIENDS';
const SET_ISSELECTEDALBUMES = 'SET_ISSELECTEDALBUMES';
const DELETEALBUMES = 'DELETEALBUMES';
const DELETEALFRIENDS = 'DELETEALFRIENDS';
const DELETEIMAGES = 'DELETEIMAGES';
const CLEAR_SELECTEDALBUMES = 'CLEAR_SELECTEDALBUMES';
const CLEAR_SELECTEDIMAGES = 'CLEAR_SELECTEDIMAGES';
const SET_SELECTEDIMAGE = 'SET_SELECTEDIMAGE';
const SET_ISSELECTEDIMAGES = 'SET_ISSELECTEDIMAGES';
const SET_EDITALBUM = 'SET_EDITALBUM';
const SET_ALTREDALBUM = 'SET_ALTREDALBUM';
const ADDTARGET = 'ADDTARGET';
const DELETETARGET = 'DELETETARGET';
const ISEDDITTARGET = 'ISEDDITTARGET';
const ISEDDITFRIENDLIST = 'ISEDDITFRIENDLIST';
const DELITEFROMFRIENDSDELECT = 'DELITEFROMFRIENDSDELECT';
const DELITEFROMALBUMESDELECT = 'DELITEFROMALBUMESDELECT';
const DELITEFROMIMAGESDELECT = 'DELITEFROMIMAGESDELECT';
const SETSHOWFLAG = 'SETSHOWFLAG';
const SETSHOTEG = 'SETSHOTEG';
const SETTWOAUTH = 'SETTWOAUTH';
const SETMAILGETUPDATES = 'SETMAILGETUPDATES';
const SETMAILGETOFFERS = 'SETMAILGETOFFERS';
const SETREPLENISHMENT = 'SETREPLENISHMENT';
const ISEDDITMODERATERLIST = 'ISEDDITMODERATERLIST';
const SET_SELECTEDMODERATORS = 'SET_SELECTEDMODERATORS';
const DELITEFROMMODERATEDDELECT = 'DELITEFROMMODERATEDDELECT';
const DELETEMODERATORS = 'DELETEMODERATORS';
const ISEDDITINFORMATION = 'ISEDDITINFORMATION';

let initialState = {
    privacy:{
        blockcountres:[
        ],
        ismailget:{
            update: true,
            specoffers: true
        },
        showflag: true,
        showbycountryteg: true,
        email: {emailname: 'relocan@gmail.com', veref: true},
        password: '1232146',
        twofactor_auth: false,
        blockedfrazes:[],
        replenishment: false
    },
    current_data: {
        profilePhoto: 'https://i1.sndcdn.com/avatars-000052937173-u81wkd-t500x500.jpg',
        username: '',
        email:'',
        type:'',
        visibility: '',
        name: '',
        gender: 'Женщина'
    },
    current_photo: {
        url: 'http://167.71.38.182/images/1.png',
        id:1
    },
    current_album_contain: {
        name: 'first',
        id:1,
        photos: [`/1.png`, '/2.png',  '/2gta.png', '/7gta.png', '/3gta.png','/6gta.png',]
    },
    isaddingalbum: false,
    albumsidselect: [],
    friendsselect: [],
    imageidselect: [],
    isalbumselecting: false,
    isimageselecting: false,
    MyAlbumes: [
        {
            name: 'First',
            id:1,
            secure: 'Бесплатно для всех',
            photos: [{
                url: '/1.png',
                id: 0
            },
                {
                    url: '/2.png',
                    id: 1
                },
                {
                    url: '/3gta.png',
                    id: 2
                },
                {
                    url: '/4.png',
                    id: 3
                },
                {
                    url: '/5.png',
                    id: 4
                },
            ],
            photoscount: 3,
            videocount: 1
        },
        {
            name: 'Second',

            id:2,
            secure: 'Только для зарегестрированных',
            photos: [{
                url: '/2.png',
                id: 0
            },
                {
                    url: '/3.png',
                    id: 1
                },
                {
                    url: '/4.png',
                    id: 2
                },
                {
                    url: '/5.png',
                    id: 3
                },
                {
                    url: '/5gta.png',
                    id: 4
                },
            ],
            photoscount: 5,
            videocount: 2
        },
        {
            name: 'Third',
            id:3,
            secure: 'Только для друзей',
            photos: [{
                url: '/1gta.png',
                id: 0
            },
                {
                    url: '/2gta.png',
                    id: 1
                },
                {
                    url: '/3.png',
                    id: 2
                },
                {
                    url: '/4gta.png',
                    id: 3
                },
                {
                    url: '/5.png',
                    id: 4
                },
            ],
            photoscount: 4,
            videocount: 1
        },
        {
            name: 'Four',
            id:4,
            secure: 'Платный',
            price: 30000,
            photos: [{
                url: '/4.png',
                id: 0
            },
                {
                    url: '/2.png',
                    id: 1
                },
                {
                    url: '/3.png',
                    id: 2
                },
                {
                    url: '/4.png',
                    id: 3
                },
                {
                    url: '/5gta.png',
                    id: 4
                },
            ],
            photoscount: 5,
            videocount: 1
        },
        {
            name: 'Five',
            id:5,
            secure: 'Только для подписчиков фанклуба',
            price: 0,
            photos: [{
                url: '/5.png',
                id: 0
            },
                {
                    url: '/2gta.png',
                    id: 1
                },
                {
                    url: '/3gta.png',
                    id: 2
                },
                {
                    url: '/4.png',
                    id: 3
                },
                {
                    url: '/5.png',
                    id: 4
                },
            ],
            photoscount: 3,
            videocount: 2
        },
        {
            name: 'Six',
            id:6,
            secure: 'Неопубликованные',
            price: 0,
            photos: [{
                url: '/5gta.png',
                id: 0
            },
                {
                    url: '/2.png',
                    id: 1
                },
                {
                    url: '/3.png',
                    id: 2
                },
                {
                    url: '/4.png',
                    id: 3
                },
                {
                    url: '/5.png',
                    id: 4
                },
            ],
            photoscount: 2,
            videocount: 5
        }
    ],
    current_album: {
        id: 1,
        name: "First"
    },
    edit_album: {
        mode: false,
        id: 1
    },
    target:{
        name: 'Купить дом !',
        participates: 2,
        amount: 100000,
        collected: 34540,
        active: true,
        get fill() {
            return (this.collected/(this.amount/100)).toFixed(3);
        }
    },
    isedittarget: false,
    iseditfriendlist: false,
    friendlist : [
        {
            name: 'jimmywallace',
            photo: 'https://i.pinimg.com/474x/a5/d0/76/a5d076ca46566d432f4eb6b1258cb94c.jpg',
            lavel: 1,
            id: 1
        },
        {
            name: 'thegreen80',
            photo: 'https://i.pinimg.com/originals/7a/ba/28/7aba28e6a2537e6036b6e13bc4986a49.jpg',
            lavel: 2,
            id: 2
        },
        {
            name: 'kibajutsu',
            photo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ1YlMxO7U0jfIlqWaU_6FtuJypztJsacUz0g&usqp=CAU',
            lavel: 3,
            id: 3
        },
        {
            name: 'best_rogan',
            photo: 'https://static10.tgstat.ru/channels/_0/5f/5f07ff6ba9402352da72f50ae169e9c5.jpg',
            lavel: 4,
            id: 4
        },
        {
            name: 'apchihwa',
            photo: 'https://i.pinimg.com/736x/85/7b/4e/857b4e8cce8accb357e4afc37361e90c.jpg',
            lavel: 5,
            id: 5
        },
        {
            name: 'Richard',
            photo: 'http://hypeava.ru/uploads/posts/2019-07/1562395730_1.jpg',
            lavel: 6,
            id: 6
        },
        {
            name: 'Kreker',
            photo: 'https://i.imgur.com/o2yGKCU.jpg',
            lavel: 7,
            id: 7
        },
        {
            name: 'Anora',
            photo: 'https://i.pinimg.com/originals/47/5f/29/475f29d5973e4f8e6f8641318ef39172.jpg',
            lavel: 8,
            id: 8
        },

    ],
    moderatorsselect: [],
    moderatorslist : [
        {
            name: 'jimmywallace',
            photo: 'https://i.pinimg.com/474x/a5/d0/76/a5d076ca46566d432f4eb6b1258cb94c.jpg',
            id: 1
        },
        {
            name: 'thegreen80',
            photo: 'https://i.pinimg.com/originals/7a/ba/28/7aba28e6a2537e6036b6e13bc4986a49.jpg',
            id: 2
        }
    ],
    iseditmederatorlist: false,
    iseditprofileinfo: true
};

const ProfileReducer = (state = initialState, action) => {
    switch (action.type) {
        case SETCURRENT_DATA:
            if (action.statement.languages){
                action.statement.languages = JSON.parse(action.statement.languages);
                action.statement.specifics = JSON.parse(action.statement.specifics);
            }
            return {
                ...state,
                current_data: Object.assign(state.current_data, action.statement)
            }
        case ADDTARGET:
            return {
                ...state,
                target: Object.assign(state.target, action.statement)
            }
        case DELETETARGET:
            let target = {
                name: '',
                participates: 0,
                amount: '',
                collected: 0,
                active: true,
                fill: 0
            }
            return {
                ...state,
                target: target
            }
        case SETSHOWFLAG:
            let privacyinit = state.privacy;
            privacyinit.showflag = action.statement;
            return {
                ...state,
                privacy: privacyinit
            }
        case SETSHOTEG:
            let privacyinitTEG = state.privacy;
            privacyinitTEG.showbycountryteg = action.statement;
            return {
                ...state,
                privacy: privacyinitTEG
            }
        case SETMAILGETOFFERS :
            let privacyinitOFFERGET = state.privacy;
            privacyinitOFFERGET.ismailget.specoffers = action.statement;
            return {
                ...state,
                privacy: privacyinitOFFERGET
            }
        case SETREPLENISHMENT :
            let privacyinitreplenishment = state.privacy;
            privacyinitreplenishment.ismailget.replenishment = action.statement;
            return {
                ...state,
                privacy: privacyinitreplenishment
            }
        case SETMAILGETUPDATES :
            let privacyinitUPDATEGET = state.privacy;
            privacyinitUPDATEGET.ismailget.update = action.statement;
            return {
                ...state,
                privacy: privacyinitUPDATEGET
            }
        case SETTWOAUTH:
            let privacyinitTwoauth = state.privacy;
            privacyinitTwoauth.twofactor_auth = action.statement;
            return {
                ...state,
                privacy: privacyinitTwoauth
            }
        case SETCURRENT_PHOTO:
            return {
                ...state,
                current_photo: action.statement
            }
        case ISEDDITTARGET:
            return {
                ...state,
                isedittarget: action.statement
            }
        case ISEDDITFRIENDLIST:
            return {
                ...state,
                iseditfriendlist: action.statement
            }
        case ISEDDITMODERATERLIST :
            return {
                ...state,
                iseditmederatorlist: action.statement
            }
        case SETCURRENT_ALBUM:
            return {
                ...state,
                current_album: action.statement
            }
        case SETCURRENT_ALBUM_CONTAIN:
            return {
                ...state,
                current_album_contain: state.MyAlbumes.find(good => good.id === state.current_album.id)
            }
        case SET_ISSELECTEDALBUMES:
            return {
                ...state,
                isalbumselecting: action.statement
            }
        case SET_ISSELECTEDIMAGES:
            return {
                ...state,
                isimageselecting: action.statement
            }
        case SETCURRENT_ADD_NEW_ALMUB:
            let newalbumes = state.MyAlbumes;
            newalbumes.push(action.statement);
            return {
                ...state,
                MyAlbumes: newalbumes
            }
        case SET_SELECTEDALBUMES:
            let newSELECTEDalbumes = state.albumsidselect;
            newSELECTEDalbumes.push(action.statement);
            return {
                ...state,
                albumsidselect: newSELECTEDalbumes
            }
        case SET_SELECTEDFRIENDS:
            let newSELECTEDfriends = state.friendsselect;
            newSELECTEDfriends.push(action.statement);
            return {
                ...state,
                friendsselect: newSELECTEDfriends
            }
        case SET_SELECTEDMODERATORS:
            let newSELECTEDmoederators = state.moderatorsselect;
            newSELECTEDmoederators.push(action.statement);
            return {
                ...state,
                moderatorsselect: newSELECTEDmoederators
            }
        case SET_SELECTEDIMAGE:
            let newSELECTEDimages = state.imageidselect;
            newSELECTEDimages.push(action.statement);
            return {
                ...state,
                imageidselect: newSELECTEDimages
            }
        case SETCURRENT_IS_ADD_NEW_ALMUB:
            return {
                ...state,
                isaddingalbum: action.statement
            }
        case CLEAR_SELECTEDALBUMES:
            return {
                ...state,
                albumsidselect: []
            }
        case CLEAR_SELECTEDIMAGES:
            return {
                ...state,
                imageidselect: []
            }
        case SET_EDITALBUM:
            return {
                ...state,
                edit_album: action.statement
            }
        case ISEDDITINFORMATION:
            return {
                ...state,
                iseditprofileinfo: action.statement
            }

        case DELITEFROMALBUMESDELECT:
            const deleteselectalbumes=(state)=>{
                let newarray = [];
                var newalbumesobject = state.albumsidselect;
                for (let i = 0; i<= state.albumsidselect.length-1; i++){
                    if (newalbumesobject[i]){
                        if (newalbumesobject[i] == action.statement){
                            delete newalbumesobject[i];
                        }
                    }
                }
                for (let i = 0; i<= newalbumesobject.length-1; i++){
                    if (newalbumesobject[i]){
                        newarray.push(newalbumesobject[i]);
                    }
                }
                return newarray;
            }
            return {
                ...state,
                albumsidselect: deleteselectalbumes(state),
            }

        case DELITEFROMIMAGESDELECT:
            const deleteselectimages=(state)=>{
                let newarray = [];
                var newalbumesobject = state.imageidselect;
                for (let i = 0; i<= state.imageidselect.length-1; i++){
                    if (newalbumesobject[i]){
                        if (newalbumesobject[i] == action.statement){
                            delete newalbumesobject[i];
                        }
                    }
                }
                for (let i = 0; i<= newalbumesobject.length-1; i++){
                    if (newalbumesobject[i]){
                        newarray.push(newalbumesobject[i]);
                    }
                }
                return newarray;
            }
            return {
                ...state,
                imageidselect: deleteselectimages(state),
            }
        case DELITEFROMFRIENDSDELECT:
            const deleteselectfriends=(state)=>{
                let newarray = [];
                var newalbumesobject = state.friendsselect;
                for (let i = 0; i<= state.friendsselect.length-1; i++){
                    if (newalbumesobject[i]){
                        if (newalbumesobject[i] == action.statement){
                            delete newalbumesobject[i];
                        }
                    }
                }
                for (let i = 0; i<= newalbumesobject.length-1; i++){
                    if (newalbumesobject[i]){
                        newarray.push(newalbumesobject[i]);
                    }
                }
                return newarray;
            }
            return {
                ...state,
                friendsselect: deleteselectfriends(state),
            }
        case DELITEFROMMODERATEDDELECT:
            const deleteselectmoders=(state)=>{
                let newarray = [];
                var newalbumesobject = state.moderatorslist;
                for (let i = 0; i<= state.moderatorsselect.length-1; i++){
                    if (newalbumesobject[i]){
                        if (newalbumesobject[i] == action.statement){
                            delete newalbumesobject[i];
                        }
                    }
                }
                for (let i = 0; i<= newalbumesobject.length-1; i++){
                    if (newalbumesobject[i]){
                        newarray.push(newalbumesobject[i]);
                    }
                }
                return newarray;
            }
            return {
                ...state,
                moderatorsselect: deleteselectmoders(state),
            }
        case DELETEALFRIENDS:
            const deletefriens=(state)=>{
                let newarray = [];
                var newalbumesobject = state.friendlist;
                for (let i = 0; i<= state.friendlist.length-1; i++){
                    for (let r = 0; r <= state.friendsselect.length-1; r++){
                        if (newalbumesobject[i]){
                            if (newalbumesobject[i].id == state.friendsselect[r]){
                                delete newalbumesobject[i];
                            }
                        }
                    }
                }
                for (let i = 0; i<= newalbumesobject.length-1; i++){
                    if (newalbumesobject[i]){
                        newarray.push(newalbumesobject[i]);
                    }
                }
                return newarray;
            }
            return {
                ...state,
                friendlist:  deletefriens(state),
                friendsselect: []
            }
        case DELETEMODERATORS:
            const deletemoders=(state)=>{
                let newarray = [];
                var newalbumesobject = state.moderatorslist;
                for (let i = 0; i<= state.moderatorslist.length-1; i++){
                    for (let r = 0; r <= state.moderatorsselect.length-1; r++){
                        if (newalbumesobject[i]){
                            if (newalbumesobject[i].id == state.moderatorsselect[r]){
                                delete newalbumesobject[i];
                            }
                        }
                    }
                }
                for (let i = 0; i<= newalbumesobject.length-1; i++){
                    if (newalbumesobject[i]){
                        newarray.push(newalbumesobject[i]);
                    }
                }
                return newarray;
            }
            return {
                ...state,
                moderatorslist:  deletemoders(state),
                moderatorsselect: []
            }
        case DELETEALBUMES:
            const romaca=(state)=>{
                let newarray = [];
                var newalbumesobject = state.MyAlbumes;
                for (let i = 0; i<= state.MyAlbumes.length-1; i++){
                    for (let r = 0; r <= state.albumsidselect.length-1; r++){
                        if (newalbumesobject[i]){
                            if (newalbumesobject[i].id == state.albumsidselect[r]){
                                delete newalbumesobject[i];
                            }
                        }
                    }
                }
                for (let i = 0; i<= newalbumesobject.length-1; i++){
                    if (newalbumesobject[i]){
                        newarray.push(newalbumesobject[i]);
                    }
                }
                return newarray;
            }
            return {
                ...state,
                MyAlbumes:  romaca(state),
                albumsidselect: []
            }
        case DELETEIMAGES:
            const romac=(state)=>{
                var newimagesobject = state.MyAlbumes;
                var relocer = state.current_album_contain.id -1;
                if(newimagesobject[relocer].photos){
                    for (let i = 0; i<= newimagesobject[relocer].photos.length -1; i++){
                        for (let r = 0; r <= state.imageidselect.length-1; r++){
                            if (state.current_album_contain.photos[i]){
                                if (state.current_album_contain.photos[i].id == state.imageidselect[r]){
                                    delete newimagesobject[relocer].photos[i];
                                }
                            }
                        }
                    }
                }
                let newarray = [];
                for (let i = 0; i<= newimagesobject[relocer].photos.length-1; i++){
                    if (newimagesobject[relocer].photos[i]){
                        newarray.push(newimagesobject[relocer].photos[i]);
                    };
                }
                newimagesobject[relocer].photos = newarray;
                return newimagesobject;
            }
            return {
                ...state,
                MyAlbumes:  romac(state),
                imageidselect: []
            }
        case SET_PATH:
            return action.payload
        case SET_ALTREDALBUM:
            let condans = (state, action)=>{
                let newmyalbums = state.MyAlbumes;
                newmyalbums[action.statement.id-1] = Object.assign(newmyalbums[action.statement.id-1], action.statement);
                return newmyalbums;
            }
            return {
                ...state,
                MyAlbumes: condans(state, action)
            }
        default:
            return state;
    }
}
export const PostUserData = (some => async (dispatch) => {
    dispatch(SET_ISRENDERAC(false));
    let response = await authAPI.postuserdata(some);
    if (response) {
        if (response.statusText === "OK") {
            await dispatch(isAUTHAC());
            dispatch(ISEDDITINFORMATIONAC(true));
            dispatch(SET_ISRENDERAC(true));
        }else{
            dispatch(ISEDDITINFORMATIONAC(true));
            console.log(response);
            dispatch(SET_ISRENDERAC(true));
        }
    }else{
        console.log('eror');
    }
});

export const ISEDDITINFORMATIONAC = (statement) => ({type: ISEDDITINFORMATION, statement : statement});
export const ISEDDITMODERATERLISTAC = (statement) => ({type: ISEDDITMODERATERLIST, statement : statement});
export const DELETEMODERATORSAC = () => ({type: DELETEMODERATORS});
export const SETREPLENISHMENTAC = (statement) => ({type: SETREPLENISHMENT, statement : statement});
export const SETMAILGETUPDATESAC = (statement) => ({type: SETMAILGETUPDATES, statement : statement});
export const SETTWOAUTHAC = (statement) => ({type: SETTWOAUTH, statement : statement});
export const DELITEFROMIMAGESDELECTAC = (statement) => ({type: DELITEFROMIMAGESDELECT, statement : statement});
export const DELITEFROMALBUMESDELECTAC = (statement) => ({type: DELITEFROMALBUMESDELECT, statement : statement});
export const DELITEFROMFRIENDSDELECTAC = (statement) => ({type: DELITEFROMFRIENDSDELECT, statement : statement});
export const SET_ALTREDALBUMAC = (statement) => ({type: SET_ALTREDALBUM, statement : statement});
export const isEDITALBUM = (statement) => ({type: SET_EDITALBUM, statement : statement});
export const SET_ISSELECTEDIMAGESAC = (statement) => ({type: SET_ISSELECTEDIMAGES, statement : statement});
export const CLEAR_SELECTEDIMAGESAC = () => ({type: CLEAR_SELECTEDIMAGES});
export const DELETEALBUMESAC = () => ({type: DELETEALBUMES});
export const DELETEALFRIENDSAC = () => ({type: DELETEALFRIENDS});
export const DELETEIMAGESAC = () => ({type: DELETEIMAGES});
export const ISEDDITFRIENDLISTAC = (statement) => ({type: ISEDDITFRIENDLIST, statement : statement});
export const ADDTARGETAC = (statement) => ({type: ADDTARGET, statement : statement});
export const DELETETARGETAC = () => ({type: DELETETARGET});
export const SET_ISSELECTEDALBUMESAC = (statement) => ({type: SET_ISSELECTEDALBUMES, statement : statement});
export const SET_SELECTEDALBUMESAC = (statement) => ({type: SET_SELECTEDALBUMES, statement : statement});
export const CLEAR_SELECTEDALBUMESAC = () => ({type: CLEAR_SELECTEDALBUMES});
export const SET_selectedimagearray = (statement) => ({type: SET_SELECTEDIMAGE, statement : statement});
export const SetmyCurrentphoto = (statement) => ({type: SETCURRENT_PHOTO, statement : statement});
export const SetCurrentDATA = (statement) => ({type: SETCURRENT_DATA, statement : statement});
export const SetCurrentAlbum = (statement) => ({type: SETCURRENT_ALBUM, statement : statement});
export const isAddnewAlmub = (statement) => ({type: SETCURRENT_IS_ADD_NEW_ALMUB, statement : statement});
export const AddnewAlmub = (statement) => ({type: SETCURRENT_ADD_NEW_ALMUB, statement : statement});
export const SetCurrentContain = () => ({type: SETCURRENT_ALBUM_CONTAIN});
export default ProfileReducer;
