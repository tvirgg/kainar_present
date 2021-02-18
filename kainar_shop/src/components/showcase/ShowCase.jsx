import React, {useState} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col, Nav, Button, Navbar} from 'react-bootstrap';
import classes from './ShowCase.module.css';
import Cards from "./Card/card";
import {NavLink} from "react-router-dom";


const ShowCase = (props) => {
    const [path, setPath] = useState('ind_imp');
    let Cards_item = props[path].map( m => <Cards key={m.id} id={m.id} name={m.name} price={m.price} photourl={m.photourl} pieces={m.pieces} category={path} GetInBascket={props.GetInBascket} PullOutBascket={props.PullOutBascket}/> );
return (
    <div className={classes.ShowCase}>
        <Container>
            <Row key={3}>
                <Navbar bg="dark" className={classes.nav_block}>
                    <Nav className={classes.navlink_block}>
                        <Nav.Link className={classes.navlink_block__item}  onClick={() => setPath( 'ind_imp')}>
                            <NavLink  to="#" className={classes.navlink}>
                                Independent implants
                            </NavLink>
                        </Nav.Link>
                        <Nav.Link className={classes.navlink_block__item} onClick={() => setPath( 'intobody_imp')}>
                            <NavLink to="#"  className={classes.navlink}>
                                Implants for internal
                            </NavLink>
                        </Nav.Link>
                        <Nav.Link className={classes.navlink_block__item} onClick={() => setPath( 'complect_imp')}>
                            <NavLink to="#"  className={classes.navlink}>
                                Kits
                            </NavLink>
                        </Nav.Link>
                        <Nav.Link className={classes.navlink_block__item} onClick={() => setPath( 'utilits')}>
                            <NavLink to="#"  className={classes.navlink}>
                                Utilities
                            </NavLink>
                        </Nav.Link>
                    </Nav>
                </Navbar>
            </Row>
            <Row>
                <Col xs={12} className={classes.table_ofgoods}>
                    <Row>
                        <Col xs={12}>
                            <Row className={classes.cards_block}>
                                {Cards_item}
                            </Row>
                        </Col>
                    </Row>
                </Col>
            </Row>
        </Container>
    </div>
    );
}

export default ShowCase;