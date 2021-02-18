import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {connect} from "react-redux";
import {compose} from "redux";
import Blog from "./Blog";
import {Blog_posts_selector} from "./Blog-selector";

let DispatchToProps = (dispatch) =>{
    return{
    }
}
let mapStateToProps = (state) => {
    return {
        posts: Blog_posts_selector(state)
    }
}
export default compose(
    connect(mapStateToProps, DispatchToProps),
)(Blog);
