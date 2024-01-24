import {initializeApp} from "./App_reducer";
import {UserAPI as API} from "../../Api";

let initialstate = {
   Posts: [
   ]
}
const BlogPageDataReducer = (state=initialstate, action) =>{
    if (action.type === 'GetBlogdata'){
        return{
            ...state,
            Posts: action.data
    }
    }
    else {
        return state
    }
}


export const getGoodcategoryDatacreater = (data) =>{
    return{
        type: 'GetBlogdata', data: data
    }
}
export const getBlogDatathunk = () => async (dispatch) => {
    dispatch(initializeApp(false));
    let response = await API.GetBlogPosts();
    dispatch(getGoodcategoryDatacreater(response.data));
    dispatch(initializeApp(true));
}
export default BlogPageDataReducer;