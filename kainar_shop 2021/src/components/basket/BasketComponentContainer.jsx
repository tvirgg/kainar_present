import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {connect} from "react-redux";
import {compose} from "redux";
import {Basket_selector} from "./BasketComponent-selector";
import BasketComponent from "./BasketComponent";
import {GetInBascketCreater, PullOutBascketCreater} from "../../redux/state/GoodsData_reducer";

let DispatchToProps = (dispatch) =>{
    return{
        GetInBascket: (goodobj) =>{
            dispatch(GetInBascketCreater(goodobj));
        },
        PullOutBascket: (goodobj) =>{
            dispatch(PullOutBascketCreater(goodobj));
        }
    }
}
let mapStateToProps = (state) => {
    return {
        data: Basket_selector(state)
    }
}
export default compose(
    connect(mapStateToProps, DispatchToProps),
)(BasketComponent);
