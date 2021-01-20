import React from 'react';
import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";
import classes from './Cards.module.css';
import Button from "react-bootstrap/Button";
import Row from "react-bootstrap/Row";
const Cards = (props) => {
    let GetInBascket = (goodobj) => {
        props.GetInBascket(goodobj);
    }
    let PullOutBascket = (goodobj) => {
        props.PullOutBascket(goodobj);
    }
    return (
        <>
            <div>
                <Card style={{ width: '18rem' }} className={classes.card_item}>
                    <Card.Img variant="top" src={props.photourl}/>
                    <Card.Body>
                        <Card.Title>{props.name}</Card.Title>
                        <Card.Text>
                            Price:
                            {props.price}
                        </Card.Text>
                    </Card.Body>
                    <ListGroup className="list-group-flush">
                        <Row>
                            <h2 className={classes.in_bsck}>
                                IN BASCKET : {props.pieces}
                            </h2>
                        </Row>
                        <Row className={classes.btn_block}>
                            <Button variant="light" onClick={() => {PullOutBascket(props)}}>-</Button>
                            <Button variant="dark"  onClick={() => {GetInBascket(props)}} >+</Button>
                        </Row>
                    </ListGroup>
                </Card>
            </div>
        </>
    );
}
export default Cards;