import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {connect} from "react-redux";
import {compose} from "redux";
import {
    mainIdSelect,
    maincategorySelect,
    curentProfilepageSelect,
    curentpiecesSelect,
    curentnameSelect,
    curentdescriptionSelect, curentpriceSelect, curentphotourlSelect
} from "./GoodProfile-selector";
import GoodProfile from "./GoodProfile";
import {setProfilePageCreater} from "../../redux/state/GoodsData_reducer.js";
import {withRouter} from "react-router-dom";
import {GetInBascketCreater, PullOutBascketCreater} from "../../redux/state/GoodsData_reducer";

class GoodProfileCont extends React.Component{
 componentDidMount()  {
        let profId = this.props.match.params.profId;
        if (!profId) {
            profId = this.props.mainId;
            if (!profId) {
                this.props.history.push("/shop");
            }
        }
     let profcategory = this.props.match.params.profcategory;
     if (!profcategory) {
         profcategory = this.props.maincategory;
         if (!profcategory) {
             this.props.history.push("/shop");
         }
     }
         this.props.SetProfilePage(profId, profcategory);
    }
    render() {
        return <>
         <GoodProfile profile={this.props.curentProfilepage} pieces = {this.props.pieces}
                      name = {this.props.name} description={this.props.description}
                      price = {this.props.price} photourl = {this.props.photourl}
                      GetInBascket={this.props.GetInBascket} PullOutBascket={this.props.PullOutBascket} />
        </>
    }
}
let DispatchToProps = (dispatch) =>{
    return{
        SetProfilePage: (profId, profcategory) =>{dispatch(setProfilePageCreater(profId, profcategory));
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
        mainId: mainIdSelect(state),
        maincategory: maincategorySelect(state),
        curentProfilepage: curentProfilepageSelect(state),
        pieces: curentpiecesSelect(state),
        name: curentnameSelect(state),
        description: curentdescriptionSelect(state),
        price: curentpriceSelect(state),
        photourl: curentphotourlSelect(state)
    }
}
export default compose(
    withRouter,
    connect(mapStateToProps, DispatchToProps),
)(GoodProfileCont);
