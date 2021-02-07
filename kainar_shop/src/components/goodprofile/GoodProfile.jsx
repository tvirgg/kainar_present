import 'bootstrap/dist/css/bootstrap.min.css';
import {Container, Row, Col, Carousel} from 'react-bootstrap';
import classes from './GoodProfile.module.css';
import React, {useEffect} from "react";
import AwesomeSlider from 'react-awesome-slider';
import 'react-awesome-slider/dist/styles.css';
import Button from "react-bootstrap/Button";


const GoodProfile = (props) => {
    let GetInBascket = (goodobj) => {
        props.GetInBascket(goodobj);
    }
    let PullOutBascket = (goodobj) => {
        props.PullOutBascket(goodobj);
    }
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
                        <h3 className={classes.in_bask}>
                            IN BASKET NOW: {props.profile.pieces}
                        </h3>
                        <Row className={classes.btn_block}>
                            <Button variant="light" onClick={() => {PullOutBascket(props.profile)}}>-</Button>
                            <Button variant="dark"  onClick={() => {GetInBascket(props.profile)}} >+</Button>
                        </Row>
                    </Col>
                </Row>
            </Container>
        </>
    )
}

export default GoodProfile;