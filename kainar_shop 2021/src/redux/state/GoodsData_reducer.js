import {UserAPI as API} from"../../Api";
import {initializeApp} from "./App_reducer";
let initialstate = {
  Basket: [],
  Common_counter : 0,
  mainId: 1,
  maincategory: 'intobody_imp',
  curentProfilepage:  {id: 1, category: 'ind_imp', name: 'Eye', price: 100,  photourl: [
      "https://i.postimg.cc/C1WnsYVt/1.jpg",
      "https://i.postimg.cc/3rvvJyXH/2.jpg",
      "https://i.postimg.cc/PrbvYBV3/3.jpg",
      "https://i.postimg.cc/qMHCtkw6/4.jpg"], pieces: 0, description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.'}
}


const GoodsDataReducer = (state=initialstate, action) =>{

  if (action.type === 'SetProfile'){
    let curent_data =  state[action.category].find(item => item.id === parseInt(action.goodid)) 
    return{
      ...state,
      curentProfilepage: curent_data
    }
  }



      else if (action.type === 'GetGood'){
        let path = action.category 
        state[path].find(own_g => own_g.id === action.goodid).pieces = action.goodpieces + 1 
          state.Common_counter = state.Common_counter + action.goodprice
        if(state.Basket.length !== 0 && state.Basket.findIndex(own_g => own_g.id === action.goodid && own_g.category === action.category) !== -1){
          state.Basket.find(good => good.id === action.goodid && good.category === action.category).pieces = action.goodpieces + 1 
          return{
            ...state
          }
        }else{
          return{
            ...state,
            Basket: [...state.Basket, {id: action.goodid, name: action.goodname, price: action.goodprice, pieces: action.goodpieces + 1, category: action.category, photourl: action.goodphotourl}],
          }
        }
      }




      else if (action.type === 'PullOutGood')
      {
        let path = action.category 
        if (action.goodpieces>0 && state.Common_counter>=0) {
          state.Common_counter = state.Common_counter - action.goodprice 
          state[path].find(own_g => own_g.id === action.goodid).pieces = action.goodpieces - 1 
          if (state.Basket.length !== 0 && state.Basket.findIndex(own_g => own_g.id === action.goodid  && own_g.category === action.category) !== -1){
            state.Basket.find(good => good.id === action.goodid && good.category === action.category).pieces = action.goodpieces - 1 
            state.Basket.forEach(function(el, i){
              if (el.pieces === 0) state.Basket.splice(i, 1)
            })
            return {
              ...state
            }
          } else{
            return {
              ...state,
              Basket: [...state.Basket, {
                id: action.goodid,
                name: action.goodname,
                price: action.goodprice,
                pieces: action.goodpieces - 1
              }]
            }
          }
        }else{
          return {
            ...state
          }
        }
      }
  else if(action.type === "GetGoodcategory") {
    return{
      ...state,
      ...action.data
    }
  }
    else {
      return state 
    }
}
export const getGoodcategoryDatacreater = (data) =>{
  return{
    type: 'GetGoodcategory', data: data
  }
}
export const setProfilePageCreater = (userId, category) =>  {
  return{
    type: 'SetProfile', goodid: userId, category: category
  }
}
export const GetInBascketCreater = (obj) =>{
  return{
    type: 'GetGood', goodid: obj.id, goodprice: obj.price, goodpieces: obj.pieces, goodname: obj.name, category: obj.category, goodphotourl: obj.photourl
  }
}
export const PullOutBascketCreater = (obj) =>{
  return{
    type: 'PullOutGood', goodid: obj.id, goodprice: obj.price, goodpieces: obj.pieces, goodname: obj.name, category: obj.category
  }
}

export const getGoodsDatathunk = () => async (dispatch) => {
  dispatch(initializeApp(false));
  let response = await API.GetGoodData();
  dispatch(getGoodcategoryDatacreater(response.data));
  dispatch(initializeApp(true));
}

export default GoodsDataReducer 