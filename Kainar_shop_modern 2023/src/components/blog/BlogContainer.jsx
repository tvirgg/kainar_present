import React, { useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useDispatch, useSelector } from 'react-redux';
import { Container, Col } from 'react-bootstrap';
import 'react-awesome-slider/dist/styles.css';
import classes from './Blog.module.css';
import Post from './Post';
import Loader from '../loader/loader';
import { getBlogDatathunk } from '../../redux/state/BlogData_reducer';
import {Blog_posts_selector, Init_selector} from './Blog-selector';

const BlogCont = () => {
    const posts = useSelector(Blog_posts_selector);
    const initialized = useSelector(Init_selector); // Замените на ваш селектор для initialized
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getBlogDatathunk());
    }, [dispatch]);

    if (!initialized) {
        return <Loader />;
    } else {
        return <Blog posts={posts} />;
    }
}

const Blog = ({ posts }) => {
    const Post_item = posts.map(m =>
        <Post
            key={m.id}
            lable={m.lable}
            text={m.text}
            authorname={m.authorname}
            date={m.date}
            position={m.position}
        />
    );

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

export default BlogCont;