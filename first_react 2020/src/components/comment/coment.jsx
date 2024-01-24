import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col, Nav, Button, Navbar, Form, FormControl} from 'react-bootstrap';
import Dialogs from './dialogs/dialogs';
import Message from "./messages/messages";
import {Massageform} from "./messages/massage_form";
import classes from './coment.module.css';
import Cards from "./Card/card";
import Bascket_item from "./bascket/inbasket";




const Coment = (props) => {
    let SendMessage = (massage) =>{
        props.SendMessage(massage);
    }
    let CounterUp = () => {
        props.CounterUpp();
    }
    let DialogsElement = props.DialogsData.Dialogs.map( d => <Dialogs id={d.id} name={d.name} /> );
    let messagesElements = props.DialogsData.Messages.map( m => <Message message={m.message}/> );
    let InbasckrtElements = props.DialogsData.Bascket.map( m => <Bascket_item name={m.name}  price={m.price} pieces={m.pieces} /> );
    let Card_item = props.DialogsData.Goods.map( m => <Cards id={m.id} name={m.name} price={m.price} photourl={m.photourl} pieces={m.pieces} GetInBascket={props.GetInBascket} PullOutBascket={props.PullOutBascket}/> );
return (
    <Container>
        <Row>
            <Col xs={12} className={classes.table_ofgoods}>
                <Row>
                    <Col>{DialogsElement}</Col>
                    <Col>
                        <div>
                            {messagesElements}
                        </div>
                        <div>
                            <Massageform SendMessage={SendMessage} />
                        </div>
                    </Col>
                </Row>
                <Row>
                    <Col xs={10}>
                        <Row>
                        <Button variant="dark"  onClick={() => {CounterUp(props.id)}}>
                            +
                        </Button>
                        <div className={classes.num_block}>
                            {props.DialogsData.Common_counter}
                        </div>
                        </Row>
                <Row className={classes.cards_block}>
                    {Card_item}
                </Row>
                    </Col>
                    <Col xs={2} className={classes.basket_block}>
                        <Row>
                            <h1>
                                Now in the bascket
                            </h1>
                            <div className={classes.bascket_info}>
                                <p>
                                    Total count: {props.DialogsData.Common_counter}
                                </p>
                                {InbasckrtElements}
                            </div>
                        </Row>
                    </Col>
                </Row>

            </Col>

        </Row>
    </Container>
    );
}

export default Coment;