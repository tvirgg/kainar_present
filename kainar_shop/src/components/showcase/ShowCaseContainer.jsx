import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import ShowCase from './ShowCase';
import {connect} from "react-redux";
import {
    CounterUppercreater, GetInBascketCreater,
    PullOutBascketCreater
} from '../../redux/state/GoodsData_reducer';
import {compose} from "redux";
import {
    Bascket_counterSelect,
    Common_counterSelect, complect_impSelect,
    ind_impSelect,
    intobody_impSelect, utilitsSelect, CategoryPathSelect
} from "./ShowCase-selector";



let DispatchToProps = (dispatch) =>{
    return{
        CounterUpp: () =>{
            dispatch(CounterUppercreater());
        },
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
        ind_imp: ind_impSelect(state),
        path: CategoryPathSelect(state),
        intobody_imp: intobody_impSelect(state),
        complect_imp: complect_impSelect(state),
        utilits: utilitsSelect(state),
        Common_counter: Common_counterSelect(state),
        Basket: Bascket_counterSelect(state)
    }
}
export default compose(
    connect(mapStateToProps, DispatchToProps),
)(ShowCase);