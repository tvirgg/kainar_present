import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col, Nav, Button, Navbar, Form, FormControl, Carousel} from 'react-bootstrap';
import Posts from './posts'
import { OnPostchangecreator, addPostcreator } from '../../../redux/state/PostsData-reducer';
import { connect } from 'react-redux';
let mapStateToProps = (state) => {
    return {
        PostsData: state.PostsData,
        newPostText: state.PostsData.newPostText
    }
}
let mapStatedispatch = (dispatch) => {
    return {
        addPost: (text) =>{
            dispatch(addPostcreator(text));
        }
    
    }
}
const Postscontainer = connect(mapStateToProps, mapStatedispatch)(Posts);
export default Postscontainer;