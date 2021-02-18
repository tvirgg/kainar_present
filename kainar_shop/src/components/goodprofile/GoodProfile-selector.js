export const mainIdSelect = (state) =>{
    return  state.GoodsData.mainId;
}
export const maincategorySelect = (state) =>{
    return  state.GoodsData.maincategory;
}
export const curentProfilepageSelect = (state) => {
    return state.GoodsData.curentProfilepage;
}
export const curentnameSelect = (state) => {
    return state.GoodsData.curentProfilepage.name;
}
export const curentpiecesSelect = (state) => {
    return state.GoodsData.curentProfilepage.pieces;
}
export const curentdescriptionSelect = (state) => {
    return state.GoodsData.curentProfilepage.description;
}
export const curentpriceSelect = (state) => {
    return state.GoodsData.curentProfilepage.price;
}
export const curentphotourlSelect = (state) => {
    return state.GoodsData.curentProfilepage.photourl;
}
