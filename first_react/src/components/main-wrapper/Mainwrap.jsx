import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col, Nav, Button, Navbar, Form, FormControl, Carousel} from 'react-bootstrap';
import slide1 from '../../img/slider (1).jpg'
import slide2 from '../../img/slider (2).jpg'
import slide3 from '../../img/slider (3).jpg'
import classes from './Mainwrap.module.css';
import Postscontainer from './Posts/postscontainer';
const Main_wrapper = () => {
    return (
        <>
        <Carousel className={classes.wrappercarusel}>
            <Carousel.Item className={classes.wrappercarusel}>
                <img
                    className="d-block w-100"
                    src={slide1}
                    alt="First slide"
                />
            </Carousel.Item>
            <Carousel.Item className={classes.wrappercarusel}>
                <img
                    className="d-block w-100"
                    src={slide2}
                    alt="Third slide"
                />
            </Carousel.Item>
            <Carousel.Item className={classes.wrappercarusel}>
                <img
                    className="d-block w-100"
                    src={slide3}
                    alt="Third slide"
                />
            </Carousel.Item>
        </Carousel>
        <Container>
            <Postscontainer/>
        </Container>
        </>
    );
}
export default Main_wrapper;