import React, {useState} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col, Nav, Button, Navbar} from 'react-bootstrap';
import classes from './ShowCase.module.css';
import Cards from "./Card/card";
import Bascket_item from "./bascket/inbasket";
import {NavLink} from "react-router-dom";


const ShowCase = (props) => {
    let CounterUp = () => {
        props.CounterUpp();
    }

    const [path, setPath] = useState('ind_imp');



    let InbasketElements = props.Basket.map( m => <Bascket_item name={m.name}  price={m.price} pieces={m.pieces} /> );
    let Cards_item = props[path].map( m => <Cards key={m.id} id={m.id} name={m.name} price={m.price} photourl={m.photourl} pieces={m.pieces} category={path} GetInBascket={props.GetInBascket} PullOutBascket={props.PullOutBascket}/> );
return (
    <Container>
        <Row key={3}>
            <Navbar bg="dark" className={classes.nav_block}>
                <Col className={classes.navlink_block_wpapp}>
                    <Nav className={classes.navlink_block}>
                        <Nav.Link>
                            <NavLink  to="#" onClick={() => setPath( 'ind_imp')} className={classes.navlink}>
                                Independent implants
                            </NavLink>
                        </Nav.Link>
                        <Nav.Link>
                            <NavLink to="#" onClick={() => setPath( 'intobody_imp')} className={classes.navlink}>
                                Implants for internal
                            </NavLink>
                        </Nav.Link>
                        <Nav.Link>
                            <NavLink to="#" onClick={() => setPath( 'complect_imp')} className={classes.navlink}>
                                Kits
                            </NavLink>
                        </Nav.Link>
                        <Nav.Link>
                            <NavLink to="#" onClick={() => setPath( 'utilits')} className={classes.navlink}>
                                Utilities
                            </NavLink>
                        </Nav.Link>
                    </Nav>
                </Col>
            </Navbar>
        </Row>
        <Row>
            <Col xs={12} className={classes.table_ofgoods}>
                <Row>
                    <Col xs={10}>
                        <Row>
                        <Button variant="dark"  onClick={() => {CounterUp()}}>
                            +
                        </Button>
                        <div className={classes.num_block}>
                            {props.Common_counter}
                        </div>
                        </Row>
                <Row className={classes.cards_block}>
                    {Cards_item}
                </Row>
                    </Col>
                    <Col xs={2} className={classes.basket_block}>
                        <Row>
                            <h1>
                                Now in the bascket
                            </h1>
                            <div className={classes.bascket_info}>
                                <p>
                                    Total count: {props.Common_counter}
                                </p>
                                {InbasketElements}
                            </div>
                        </Row>
                    </Col>
                </Row>
            </Col>
        </Row>
    </Container>
    );
}

export default ShowCase;