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
newMessageBody : '' 
}
const DialogsDataReducer = (state=initialstate, action) =>{
  let Copystate = {...state};
      if (action.type === 'SendMessage'){
        let body =  action.text;
        return{
          ...state,
          Messages: [...state.Messages, {id: 5, message: body}]
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

export default DialogsDataReducer;