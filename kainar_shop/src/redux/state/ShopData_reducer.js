
let initialstate = {
  Common_counter : 0
}
const ShopDataReducer = (state=initialstate, action) =>{
      if (action.type === 'SendMessage'){
        let body =  action.text;
        return{
          ...state,
          Messages: [...state.Messages, {id: 5, message: body}]
        }
    }
  else if (action.type === 'UpCounter'){
        let new_value = state.Common_counter + 1;
        return{
          ...state,
          Common_counter: new_value
    }
  }
  /*/&& state.Bascket.find(own_g => own_g.id === action.goodid).id === action.goodid/*/
      else if (action.type === 'GetGood'){
        state.Common_counter = state.Common_counter + action.goodprice;
        state.Goods.find(own_g => own_g.id === action.goodid).pieces = action.goodpieces + 1;
        if(state.Basket.length !== 0 && state.Basket.findIndex(own_g => own_g.id === action.goodid) !== -1){
          state.Basket.find(good => good.id === action.goodid).pieces = action.goodpieces + 1;
          return{
            ...state
          }
        }else{
          return{
            ...state,
            Basket: [...state.Basket, {id: action.goodid, name: action.goodname, price: action.goodprice, pieces: action.goodpieces + 1}]
          }
        }
      }
      else if (action.type === 'PullOutGood')
      {
        if (action.goodpieces>0 && state.Common_counter>=0) {
          state.Common_counter = state.Common_counter - action.goodprice;
          state.Goods.find(own_g => own_g.id === action.goodid).pieces = action.goodpieces - 1;
          if (state.Basket.length !== 0 && state.Basket.findIndex(own_g => own_g.id === action.goodid) !== -1) {
            state.Basket.find(good => good.id === action.goodid).pieces = action.goodpieces - 1;
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
    else {
      return state;
    }
}
export const SendMessagecreator = (text) =>{
  return{
      type: 'SendMessage', text: text.newMessageBody
  }
}
export const CounterUppercreater = () =>{
  return{
    type: 'UpCounter'
  }
}
export const GetInBascketCreater = (obj) =>{
  return{
    type: 'GetGood', goodid: obj.id, goodprice: obj.price, goodpieces: obj.pieces, goodname: obj.name
  }
}
export const PullOutBascketCreater = (obj) =>{
  return{
    type: 'PullOutGood', goodid: obj.id, goodprice: obj.price, goodpieces: obj.pieces, goodname: obj.name
  }
}
/*/
export const Common_counter_pumperC = (obj) =>{
  return{
    type: 'CommonCounterPumper', goodprice: obj.price
  }
}

export const GetInBascketCreaterС = (obj) => {
  return (dispatch) => {
    dispatch(Common_counter_pumperC(obj));
  }}
else if (action.type === 'CommonCounterPumper')
        {
          return {
            ...state,
            Common_counter: state.Common_counter + action.goodprice
          }
        }
/*/
export default ShopDataReducer;