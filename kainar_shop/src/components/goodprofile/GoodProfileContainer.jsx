import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {connect} from "react-redux";
import {compose} from "redux";
import {
 mainIdSelect, maincategorySelect, curentProfilepageSelect
} from "./GoodProfile-selector";
import GoodProfile from "./GoodProfile";
import {setProfilePageCreater} from "../../redux/state/ProfileGoodsData_reducer";
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
         <GoodProfile profile={this.props.curentProfilepage} GetInBascket={this.props.GetInBascket} PullOutBascket={this.props.PullOutBascket} />
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
        curentProfilepage: curentProfilepageSelect(state)
    }
}
export default compose(
    withRouter,
    connect(mapStateToProps, DispatchToProps),
)(GoodProfileCont);
