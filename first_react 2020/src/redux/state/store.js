import PostsDataReducer from './PostsData-reducer.js';
import DialogsDataReducer from './DialogsData_reducer.js';
let store = {
   _state:{
    DialogsData: {
        Dialogs:
        [
          {id: 1, name: 'Artem'},
          {id: 2, name: 'Artem2'},
          {id: 3, name: 'Artem3'},
          {id: 4, name: 'Artem4'}
        ],
        Messages: [
          {id: 1, message: 'Hi'},
          {id: 2, message: 'How is your it-kamasutra?'},
          {id: 3, message: 'Yo'},
          {id: 4, message: 'Yo'},
          {id: 5, message: 'Yo'}
      ],
      newMessageBody : '' 
    },

    
      PostsData: {
        Posts: [
          {id: 1, message: 'Hi, how are you?', likesCount: 12},
          {id: 2, message: 'It\'s my first post', likesCount: 11},
          {id: 3, message: 'Blabla', likesCount: 11},
          {id: 4, message: 'Dada', likesCount: 11} 
        ],
          newPostText : '' 
        }
},

dispatch(action){
  this._state.PostsData = PostsDataReducer(this._state.PostsData, action);
  this._state.DialogsData = DialogsDataReducer(this._state.DialogsData, action);
  this._RenderFunc(this._state);
},
getState(){
  return this._state;
},
_RenderFunc(){
},
subscribe(observer){
  this._RenderFunc = observer;
}
}


export default store;
