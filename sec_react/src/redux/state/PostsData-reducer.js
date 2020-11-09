let initialstate = {
  Posts: [
      {id: 1, message: 'Hi, how are you?', likesCount: 12},
      {id: 2, message: 'It\'s my first post', likesCount: 11},
      {id: 3, message: 'Blabla', likesCount: 11},
      {id: 4, message: 'Dada', likesCount: 11} 
    ],
  newPostText : '',
  profile: null,
    status: ''
}
const PostsDataReducer = (state = initialstate, action) =>{

if (action.type === 'AddPost'){
        let newPost = {
          id: 5,
          message: action.postMassage,
          likesCount: 0
        };
        return{
          ...state,
          Posts: [...state.Posts, newPost]
        };
      }
      else {
        return state;
      }
}

export const addPostcreator = (text) =>{
  return{
      type: 'AddPost', postMassage: text
  }
}
export const OnPostchangecreator = (text) =>{
  return{
      type: 'UpdatePost', Newtext: text
  }
}
export default PostsDataReducer;
