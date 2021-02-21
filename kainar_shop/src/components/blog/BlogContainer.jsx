import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {connect} from "react-redux";
import {compose} from "redux";
import Blog from "./Blog";
import {Blog_posts_selector} from "./Blog-selector";
import Loader from "../loader/loader";
import {getBlogDatathunk} from "../../redux/state/BlogData_reducer";

class BlogCont extends React.Component{
    componentDidMount() {
        this.props.getBlogDatathunk();
    }
    render() {
        if (this.props.initialized === false) {
            return <Loader />
        }else {
            return <>
                <Blog posts={this.props.posts} />
            </>
        }
    }
}
let DispatchToProps = (dispatch) =>{
    return{
        getBlogDatathunk: () =>{
            dispatch(getBlogDatathunk());
        }
    }
}
let mapStateToProps = (state) => {
    return {
        posts: Blog_posts_selector(state)
    }
}
export default compose(
    connect(mapStateToProps, DispatchToProps),
)(BlogCont);
