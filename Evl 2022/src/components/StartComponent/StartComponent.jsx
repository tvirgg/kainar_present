import React, {useEffect} from 'react';
import classes from "./StartComponent.module.css";
import Main from "../Main/MainContainer";
import {connect} from "react-redux";
const StartComponent = (props) => {
    if(props.categories){
        let Category_item = props.categories.map( m => <Main key ={m} value={m} name={m.name} videos={m.videos}/> );
        return (
            <div className={classes.start_block}>
                {Category_item}
            </div>
        );
    }else{
        return (<div>
            none
        </div>);
    }


}


const mapStateToProps = (state) => ({
    categories: state.AppData.categories
})
const mapDispatchToProps = (dispatch) => {
    return {
    }}
export default connect(mapStateToProps, mapDispatchToProps)(StartComponent);

