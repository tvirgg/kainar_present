import React, {useState} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col, Nav, Button, Navbar} from 'react-bootstrap';
import classes from './ShowCase.module.css';
import Cards from "./Card/card";
import {NavLink} from "react-router-dom";


const ShowCase = (props) => {
    let CounterUp = () => {
        props.CounterUpp();
    }

    const [path, setPath] = useState('ind_imp');
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
                </Row>
            </Col>
        </Row>
    </Container>
    );
}

export default ShowCase;