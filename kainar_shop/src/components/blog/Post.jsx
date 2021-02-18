import {Col, Container, Row} from "react-bootstrap";
import React from "react";
import classes from './Blog.module.css';
const Post = (props) => {
    return (
        <Col md={12} className={classes.post_block}>
                <h1>
                    {props.lable}
                </h1>
            <div className={classes.post_block__text}>
                <p>
                    {props.text}
                </p>
            </div>
            <div className={classes.post_block__info}>
                {props.authorname} : {props.position}
                <br></br>
                {props.date}
            </div>
        </Col>
    )
}

export default Post;