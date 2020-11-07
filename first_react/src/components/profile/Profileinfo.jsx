import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Container} from "react-bootstrap";
import Loader from "./loader";
import classes from './Profile.module.css';
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import {Redirect} from "react-router-dom";
import ProfileStatus from "./ProfileStatus";
import ProfileStatusWithHooks from "./ProfileStatusWithHooks";
const Profileinfo = (props) => {
    if(!props.profile){
        return (
            <Loader />
        )
    }

    return(
        <Container>
            <Row>
                <Col md={4}>
                    <h2  className={classes.profile_name}>{props.profile.fullName}</h2>
                    <img className={classes.profile_img} src={props.profile.photos.large!= null ? props.profile.photos.large : "https://pbs.twimg.com/profile_images/1081531670656962561/J9QiHhLT_400x400.jpg" } />
                </Col>
                <Col md={8}>

                    <h3 className={classes.status}>
                        <ProfileStatusWithHooks  status={props.status} updateStatus={props.updateStatus}/>
                    </h3>
                </Col>
            </Row>

        </Container>
)

}
export default Profileinfo;