import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Carousel, Col } from 'react-bootstrap';
import slide1 from '../../img/1.jpg';
import slide2 from '../../img/2.jpg';
import slide3 from '../../img/3.jpg';
import slide4 from '../../img/4.jpg';
import slide5 from '../../img/5.jpg';
import classes from './Mainwrap.module.css';

const Main_wrapper = () => {
    return (
        <div className={classes.wrapp_block}>
            <Carousel className={classes.wrappercarusel} controls={false} interval={2700} indicators={false}>
                <Carousel.Item className={classes.wrappercarusel_item}>
                    <div
                        className={classes.carouselBackground}
                        style={{ backgroundImage: `url(${slide1})` }}
                        aria-label="First slide"
                    />
                </Carousel.Item>
                <Carousel.Item className={classes.wrappercarusel_item}>
                    <div
                        className={classes.carouselBackground}
                        style={{ backgroundImage: `url(${slide2})` }}
                        aria-label="Second slide"
                    />
                </Carousel.Item>
                <Carousel.Item className={classes.wrappercarusel_item}>
                    <div
                        className={classes.carouselBackground}
                        style={{ backgroundImage: `url(${slide3})` }}
                        aria-label="Third slide"
                    />
                </Carousel.Item>
                <Carousel.Item className={classes.wrappercarusel_item}>
                    <div
                        className={classes.carouselBackground}
                        style={{ backgroundImage: `url(${slide4})` }}
                        aria-label="Fore slide"
                    />
                </Carousel.Item>
                <Carousel.Item className={classes.wrappercarusel_item}>
                    <div
                        className={classes.carouselBackground}
                        style={{ backgroundImage: `url(${slide5})` }}
                        aria-label="Five slide"
                    />
                </Carousel.Item>
            </Carousel>
            <Col md={12} className={classes.wrap_info_block_col}>
                <div className={classes.wrap_info_block}>
                    <h1>KAINAR SHOP</h1>
                    <h3>Supported by multicultural post soviet Union</h3>
                </div>
            </Col>
        </div>
    );
}

export default Main_wrapper;
