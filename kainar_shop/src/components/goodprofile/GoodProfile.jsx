import 'bootstrap/dist/css/bootstrap.min.css';
import {Container, Row, Col, Carousel} from 'react-bootstrap';
import classes from './GoodProfile.module.css';
import React from "react";
import AwesomeSlider from 'react-awesome-slider';
import 'react-awesome-slider/dist/styles.css';

const GoodProfile = (props) => {
return (
    <>
        <Container className={classes.prof_c}>
            <Row>
                <h1 className={classes.main_lable}>
                    {props.profile.name}
                </h1>
            </Row>
            <Row>
                <Col md={7} className={classes.galer_block}>
                    <div className={classes.galery}>
                        <AwesomeSlider className={classes.aws_btn}>
                            {props.profile.photourl.map( m => <div key={m} data-src={m} />)}
                        </AwesomeSlider>
                    </div>
                </Col>
                <Col md={5} className={classes.info_block}>
                    <div className={classes.info_block__price}>
                        <h2>
                            Price: {props.profile.price} $
                        </h2>
                    </div>
                    <h5>
                        Worldwide delivery - 20 $
                    </h5>
                    <hr></hr>
                    <p>
                        {props.profile.description}
                    </p>
                </Col>
            </Row>
        </Container>
    </>
 );
}

export default GoodProfile;