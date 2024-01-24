import React, {useEffect, useState} from 'react';
import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";
import classes from './Cards.module.css';
import Button from "react-bootstrap/Button";
import Row from "react-bootstrap/Row";
import gif from "./loader/loader.gif";
import {NavLink} from "react-router-dom";

const Cards = (props) => {
    const [isImageLoaded, setIsImageLoaded] = useState(false);

    useEffect(() => {
        setIsImageLoaded(false);
    }, [props]);

    const cardItemClass = `${classes.card_item__block} ${!isImageLoaded ? 'blurred' : ''}`;

    return (
        <div className={cardItemClass}>
            <Card style={{ width: '18rem' }} className={classes.card_item}>
                <NavLink to={`/goodprofile/${props.category}/${props.id}`}>
                    {!isImageLoaded && <img src={gif} alt="loading" className={classes.good_avatar}/>}
                    <Card.Img
                        variant="top"
                        className={classes.good_avatar}
                        src={props.photourl[0]}
                        onLoad={() => setIsImageLoaded(true)}
                        style={{ display: isImageLoaded ? 'block' : 'none' }}
                    />
                </NavLink>
                    <Card.Body>
                        <Card.Title>{props.name}</Card.Title>
                        <Card.Text>
                            <span>
                                Price:
                                {props.price}
                            </span>
                            <br></br>
                        </Card.Text>
                    </Card.Body>
                    <ListGroup className="list-group-flush">
                        <Row>
                            <span className={classes.in_bsck}>
                                IN BASCKET : {props.pieces}
                            </span>
                        </Row>
                        <Row className={classes.btn_block}>
                            <Button variant="light" onClick={() => {props.PullOutBascket(props)}}>-</Button>
                            <Button variant="dark"  onClick={() => {props.GetInBascket(props)}} >+</Button>
                        </Row>
                    </ListGroup>
                </Card>
            </div>
    );
}
export default Cards;