import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import icon from '../../../../img/icon.png'
import { Container, Row, Col, Nav, Button, Navbar, Form, FormControl, Carousel} from 'react-bootstrap';
import classes from './Post.module.css';
const Post = (props) => {
    return (
        <div className={classes.post}>
            <div className={classes.post_wrap}>
                <img className={classes.post__img} src={icon} />
                <p>
                    {props.message}
                </p>
            </div>
            <div className={classes.post_likes}><span>like</span> {props.likesCount}</div>

        </div>
    );
}
export default Post;