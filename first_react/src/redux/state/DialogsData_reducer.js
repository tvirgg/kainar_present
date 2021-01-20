import {UserAPI} from "../../components/users/Api";
import {setUpphoto} from "./ProfileData-reducer";

let initialstate = {
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
  Goods: [
    {id: 1, name: 'Phone', price: 100, photourl: 'https://htstatic.imgsmail.ru/pic_image/5ba8100818c85192744ffff07175316a/450/450/1909782/', pieces: 0},
    {id: 2, name: 'Earphones', price: 200, photourl: 'https://www.borofone.com/wp-content/uploads/2019/04/borofone-bm30-original-series-wire-control-earphones-with-mic-headset.jpg', pieces: 0},
    {id: 3, name: 'Tablet', price: 300, photourl: 'https://alfa.kz/files/alfa/messages/thumbnails_452x339/1/5/7/2/9/15729687-ipad-pro-11-select-wifi-spacegray-202003.png', pieces: 0},
    {id: 4, name: 'TV', price: 400, photourl: 'https://itigic.com/wp-content/uploads/2020/01/sony-oled-tv-2020-10.jpg', pieces: 0},
    {id: 5, name: 'Laptop', price: 500, photourl: 'https://nout.kz/upload/iblock/c04/Apple-MacBook-Air-13_3-1.8-GHz-dual_core-Intel-Core-i5_-128GB-2.jpg', pieces: 0},
    {id: 6, name: 'Desktop', price: 1500, photourl: 'https://5.imimg.com/data5/ZQ/BL/PM/GLADMIN-85846143/87dsf85s4d5f45sdfsdf-500x500.png', pieces: 0}
  ],
  Bascket: [
  ],
newMessageBody : '',
  Common_counter : 0
}
const DialogsDataReducer = (state=initialstate, action) =>{
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
        if(state.Bascket.length !== 0 && state.Bascket.findIndex(own_g => own_g.id === action.goodid) !== -1){
          state.Bascket.find(good => good.id === action.goodid).pieces = action.goodpieces + 1;//не может найти с таким же id так как его нет
          return{
            ...state
          }
        }else{
          return{
            ...state,
            Bascket: [...state.Bascket, {id: action.goodid, name: action.goodname, price: action.goodprice, pieces: action.goodpieces + 1}]
          }
        }
      }
      else if (action.type === 'PullOutGood')
      {
        if (action.goodpieces>0 && state.Common_counter>=0) {
          state.Common_counter = state.Common_counter - action.goodprice;
          state.Goods.find(own_g => own_g.id === action.goodid).pieces = action.goodpieces - 1;
          if (state.Bascket.length !== 0 && state.Bascket.findIndex(own_g => own_g.id === action.goodid) !== -1) {
            state.Bascket.find(good => good.id === action.goodid).pieces = action.goodpieces - 1;//не может найти с таким же id так как его нет
            state.Bascket.forEach(function(el, i){
              if (el.pieces === 0) state.Bascket.splice(i, 1)
            })
            return {
              ...state
            }
          } else{
            return {
              ...state,
              Bascket: [...state.Bascket, {
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



export default DialogsDataReducer;