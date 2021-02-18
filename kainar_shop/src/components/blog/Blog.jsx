import 'bootstrap/dist/css/bootstrap.min.css';
import {Container, Row, Col, Carousel} from 'react-bootstrap';
import React, {useEffect} from "react";
import 'react-awesome-slider/dist/styles.css';
import classes from './Blog.module.css';
import Post from "./Post";


const Blog = (props) => {
    let Post_item = props.posts.map( m => <Post key={m.id}  lable={m.lable} text={m.text} authorname={m.authorname} date={m.date} position={m.position} /> );
    return (
        <div className={classes.Blog}>
            <Container>
                <Col md={12}>
                    {Post_item}
                </Col>
            </Container>
        </div>
    )
}

export default Blog;