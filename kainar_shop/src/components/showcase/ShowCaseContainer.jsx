import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import ShowCase from './ShowCase';
import {connect} from "react-redux";
import {
    getGoodsDatathunk, GetInBascketCreater,
    PullOutBascketCreater
} from '../../redux/state/GoodsData_reducer';
import {compose} from "redux";
import {
    Bascket_counterSelect,
    Common_counterSelect, complect_impSelect,
    ind_impSelect,
    intobody_impSelect, utilitsSelect, CategoryPathSelect
} from "./ShowCase-selector";
import Loader from "../loader/loader";
import {initializeApp} from "../../redux/state/App_reducer";


class ShowCaseCont extends React.Component{
    componentDidMount() {
        this.props.getGoodsData();
    }
    render() {
        if (this.props.initialized === false) {
            return <Loader />
        }else {
            return <>
                <ShowCase ind_imp={this.props.ind_imp} path = {this.props.path}
                          intobody_imp = {this.props.intobody_imp} complect_imp={this.props.complect_imp}
                          utilits = {this.props.utilits} Common_counter = {this.props.Common_counter}
                          Basket={this.props.Basket} GetInBascket={this.props.GetInBascket} PullOutBascket={this.props.PullOutBascket}/>
            </>
        }
    }
}

let DispatchToProps = (dispatch) =>{
    return{
        GetInBascket: (goodobj) =>{
            dispatch(GetInBascketCreater(goodobj));
        },
        PullOutBascket: (goodobj) =>{
            dispatch(PullOutBascketCreater(goodobj));
        },
        getGoodsData: () =>{
            dispatch(getGoodsDatathunk());
        },
        initializeApp: (some) =>{
            dispatch(initializeApp(some));
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
        Basket: Bascket_counterSelect(state),
        initialized: state.AppData.initialized
    }
}
export default compose(
    connect(mapStateToProps, DispatchToProps),
)(ShowCaseCont);