import {Col, Container, Row} from "react-bootstrap";
import React from "react";
import classes from './BasketComponent.module.css';
import Button from "react-bootstrap/Button";
const Basket_item_component = (props) => {
    let GetInBascket = (goodobj) => {
        props.GetInBascket(goodobj);
    }
    let PullOutBascket = (goodobj) => {
        props.PullOutBascket(goodobj);
    }
    return (
        <Row className={classes.bsk_item__mainb}>
            <div className={classes.item_info}>
                <div className={classes.first_item_info}>
                    <div className={classes.item_info_img}>
                        <img src={props.photourl}/>
                    </div>
                    <div className={classes.info}>
                        <h2>
                            {props.name}
                        </h2>
                        <h2>
                            {props.price} $
                        </h2>
                    </div>
                </div>
                <div className={classes.sec_item_info}>
                        <Row>
                            <div className={classes.info_sec}>
                                <h2>
                                    pieces: {props.pieces}
                                </h2>
                            </div>
                        </Row>
                    <Row className={classes.btn_block}>
                        <Button variant="light" onClick={() => {PullOutBascket(props.profile)}}>-</Button>
                        <Button variant="dark"  onClick={() => {GetInBascket(props.profile)}} >+</Button>
                    </Row>
                </div>
            </div>
        </Row>
    )
}

export default Basket_item_component;