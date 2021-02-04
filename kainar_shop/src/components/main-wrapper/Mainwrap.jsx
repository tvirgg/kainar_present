import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Carousel} from 'react-bootstrap';
import slide1 from '../../img/1.jpg'
import slide2 from '../../img/2.jpg'
import slide3 from '../../img/3.jpg'
import slide4 from '../../img/4.jpg'
import slide5 from '../../img/5.jpg'
import classes from './Mainwrap.module.css';
import Col from "react-bootstrap/Col";
const Main_wrapper = () => {
    return (
        <>
        <Carousel className={classes.wrappercarusel} controls={false} interval={3700} indicators={false}>
            <Carousel.Item className={classes.wrappercarusel_item}>
                <img
                    className="d-block w-100"
                    src={slide1}
                    alt="First slide"
                />
            </Carousel.Item>
            <Carousel.Item className={classes.wrappercarusel_item}>
                <img
                    className="d-block w-100"
                    src={slide2}
                    alt="Second slide"
                />
            </Carousel.Item>
            <Carousel.Item className={classes.wrappercarusel_item}>
                <img
                    className="d-block w-100"
                    src={slide3}
                    alt="Third slide"
                />
            </Carousel.Item>
            <Carousel.Item className={classes.wrappercarusel_item}>
                <img
                    className="d-block w-100"
                    src={slide4}
                    alt="Fore slide"
                />
            </Carousel.Item>
            <Carousel.Item className={classes.wrappercarusel_item}>
                <img
                    className="d-block w-100"
                    src={slide5}
                    alt="Five slide"
                />
            </Carousel.Item>
        </Carousel>
            <Col md={12} className={classes.wrap_info_block_col}>
                <div className={classes.wrap_info_block}>
                    <h1>RosCYBER Shop</h1>
                    <h3>Supported by multicultural post soviet Union</h3>
                </div>
            </Col>
        </>
    );
}
export default Main_wrapper;