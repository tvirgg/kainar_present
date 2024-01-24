import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import icon from '../../../img/icon.png'
import { Container, Row, Col, Nav, Button, Navbar, Form, FormControl, Carousel} from 'react-bootstrap';
import classes from './Posts.module.css';
import Post from './post/post'
import {Postform} from "./post/post_form";

const Posts = React.memo(props => {
    let state = props.PostsData;
    let postsElements = state.Posts.map( p => <Post message={p.message} likesCount={p.likesCount}/>);
    let newPostElemet = React.createRef();
    let addPost = (values) =>{
        props.addPost(values.newMessageBody);
    }

    return (
        <div className={classes.posts}>

            <div className={classes.posts}>
                <div>
                    <h3>My posts</h3>
                    <Postform addPost={addPost}/>
                </div>
            </div>
            <div className={classes.posts}>
                { postsElements }
            </div>
        </div>
    );
}
);
export default Posts;
